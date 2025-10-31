import { promises as fs } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const ROOT = process.cwd();
const SRC_DIR = path.resolve(ROOT, 'src');
const NODE_MODULES = path.resolve(ROOT, 'node_modules');

const SOURCE_EXTS = ['.js', '.jsx', '.ts', '.tsx'];
const ASSET_EXTS = ['.css', '.scss', '.sass', '.less', '.json', '.svg', '.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.gif', '.webp', '.avif', '.ico', '.pdf', '.mp4', '.mp3', '.wav'];
const RESOLVABLE_EXTS = [...SOURCE_EXTS, ...ASSET_EXTS];

async function existsExactCase(targetPath) {
  const dir = path.dirname(targetPath);
  const base = path.basename(targetPath);
  try {
    const listing = await fs.readdir(dir);
    return listing.includes(base);
  } catch {
    return false;
  }
}

async function resolveRelativeImport(fromFile, spec) {
  const fromDir = path.dirname(fromFile);
  const base = path.resolve(fromDir, spec);

  // 1) Exact file with extension
  if (path.extname(base)) {
    if (await existsExactCase(base)) return base;
    return null;
  }

  // 2) Try extensions
  for (const ext of RESOLVABLE_EXTS) {
    const candidate = base + ext;
    if (await existsExactCase(candidate)) return candidate;
  }

  // 3) Try index files
  for (const ext of RESOLVABLE_EXTS) {
    const candidate = path.join(base, 'index' + ext);
    if (await existsExactCase(candidate)) return candidate;
  }

  return null;
}

function parseImports(content) {
  const staticImport = /import\s+[^;]+?from\s+['"]([^'"\n]+)['"]/g;
  const sideEffectImport = /import\s+['"]([^'"\n]+)['"]/g;
  const matches = [];
  for (const re of [staticImport, sideEffectImport]) {
    let m;
    while ((m = re.exec(content))) {
      matches.push(m[1]);
    }
  }
  return matches;
}

async function walk(dir, acc = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, acc);
    } else if (SOURCE_EXTS.some(ext => entry.name.endsWith(ext))) {
      acc.push(full);
    }
  }
  return acc;
}

async function loadPackageJson() {
  const pkgPath = path.join(ROOT, 'package.json');
  const content = await fs.readFile(pkgPath, 'utf8');
  return JSON.parse(content);
}

async function verifyBareModule(spec, pkgJson) {
  // Scope/package name only (ignore deep paths for dependency declaration check)
  const pkgName = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];

  const declaredInDeps = Boolean((pkgJson.dependencies && pkgJson.dependencies[pkgName]) || (pkgJson.peerDependencies && pkgJson.peerDependencies[pkgName]));
  const declaredOnlyInDev = Boolean(!declaredInDeps && pkgJson.devDependencies && pkgJson.devDependencies[pkgName]);

  // Check resolvability in node_modules
  let resolvable = false;
  try {
    require.resolve(spec, { paths: [ROOT] });
    resolvable = true;
  } catch {
    resolvable = false;
  }

  return { pkgName, declaredInDeps, declaredOnlyInDev, resolvable };
}

async function main() {
  // Sanity checks
  try {
    await fs.stat(SRC_DIR);
  } catch {
    console.error(`❌ [verify-imports] Source directory not found: ${SRC_DIR}`);
    process.exit(1);
  }
  try {
    await fs.stat(NODE_MODULES);
  } catch {
    console.error('❌ [verify-imports] node_modules not found. Run npm install first.');
    process.exit(1);
  }

  const pkgJson = await loadPackageJson();

  const files = await walk(SRC_DIR);
  let totalImports = 0;
  const problems = [];

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    const imports = parseImports(content);
    totalImports += imports.length;
    for (const spec of imports) {
      if (spec.startsWith('.') || spec.startsWith('/')) {
        const resolved = await resolveRelativeImport(file, spec);
        if (!resolved) {
          problems.push({ type: 'relative-missing', file, spec });
        }
      } else {
        const info = await verifyBareModule(spec, pkgJson);
        if (!info.resolvable) problems.push({ type: 'module-unresolved', file, spec });
        if (info.declaredOnlyInDev) problems.push({ type: 'module-devdep', file, spec, pkg: info.pkgName });
        if (!info.declaredInDeps && !info.declaredOnlyInDev) problems.push({ type: 'module-not-declared', file, spec, pkg: info.pkgName });
      }
    }
  }

  if (problems.length > 0) {
    console.error(`\n❌ [verify-imports] FAILED: Found ${problems.length} import issue(s) across ${totalImports} import(s):\n`);
    for (const p of problems) {
      const rel = path.relative(ROOT, p.file);
      if (p.type === 'relative-missing') console.error(`  [RELATIVE_NOT_FOUND] ${rel}\n    → ${p.spec}`);
      if (p.type === 'module-unresolved') console.error(`  [MODULE_UNRESOLVED] ${rel}\n    → ${p.spec}`);
      if (p.type === 'module-devdep') console.error(`  [MODULE_IN_DEVDEPS] ${rel}\n    → ${p.spec} (declared only in devDependencies)`);
      if (p.type === 'module-not-declared') console.error(`  [MODULE_NOT_DECLARED] ${rel}\n    → ${p.spec} (not declared in dependencies/peerDependencies)`);
    }
    console.error('\n💡 Fix the issues above. For bare modules, ensure they are installed and listed in dependencies.');
    process.exit(1);
  }

  console.log(`✅ [verify-imports] PASSED: All ${totalImports} imports are resolvable and correctly declared`);
}

main().catch(err => {
  console.error('\n❌ [verify-imports] FATAL ERROR:');
  console.error(err.stack || err.message);
  process.exit(1);
});


