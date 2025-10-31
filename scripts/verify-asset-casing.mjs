import { promises as fs } from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve(process.cwd(), 'src');
const ASSET_DIRS = [
  path.join(SRC_DIR, 'assets', 'images'),
  path.join(SRC_DIR, 'assets', 'gallery'),
];

const FILE_GLOBS = ['.js', '.jsx', '.ts', '.tsx'];

async function listDirExact(dir) {
  try {
    return await fs.readdir(dir);
  } catch {
    return [];
  }
}

async function walk(dir, acc = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, acc);
    } else if (FILE_GLOBS.some(ext => entry.name.endsWith(ext))) {
      acc.push(full);
    }
  }
  return acc;
}

function findImports(content) {
  const re = /import\s+[^;]+from\s+['"](\.\.\/|\.\/)?assets\/(images|gallery)\/[^'"\n]+['"]/g;
  const matches = content.match(re) || [];
  return matches.map(m => {
    const p = m.split('from')[1].trim().replace(/^['"]|['"]$/g, '');
    return p;
  });
}

async function checkPathCase(fromFile, importPath) {
  const abs = path.resolve(path.dirname(fromFile), importPath);
  const dir = path.dirname(abs);
  const base = path.basename(abs);
  const listing = await listDirExact(dir);
  return listing.includes(base);
}

async function main() {
  // Ensure asset dirs exist
  for (const dir of ASSET_DIRS) {
    const exists = await fs
      .stat(dir)
      .then(() => true)
      .catch(() => false);
    if (!exists) {
      console.error(`[verify-asset-casing] ERROR: Asset directory not found: ${dir}`);
      process.exit(1);
    }
  }

  // Verify src directory exists
  const srcExists = await fs
    .stat(SRC_DIR)
    .then(() => true)
    .catch(() => false);
  if (!srcExists) {
    console.error(`[verify-asset-casing] ERROR: Source directory not found: ${SRC_DIR}`);
    process.exit(1);
  }

  const files = await walk(SRC_DIR);
  if (files.length === 0) {
    console.warn('[verify-asset-casing] WARNING: No source files found to check');
  }

  const violations = [];
  let totalImports = 0;

  for (const file of files) {
    try {
      const content = await fs.readFile(file, 'utf8');
      const imports = findImports(content);
      totalImports += imports.length;
      for (const imp of imports) {
        const ok = await checkPathCase(file, imp);
        if (!ok) violations.push({ file, imp });
      }
    } catch (err) {
      console.error(`[verify-asset-casing] ERROR: Failed to process ${file}:`, err.message);
      process.exit(1);
    }
  }

  if (violations.length > 0) {
    console.error('\n❌ [verify-asset-casing] FAILED: Case mismatches detected:');
    console.error(`Found ${violations.length} violation(s) out of ${totalImports} import(s)\n`);
    for (const v of violations) {
      const relFile = path.relative(process.cwd(), v.file);
      console.error(`  ${relFile}`);
      console.error(`    → ${v.imp}`);
    }
    console.error('\n💡 Fix the import paths above to match exact filename casing.');
    process.exit(1);
  }

  console.log(`✅ [verify-asset-casing] PASSED: All ${totalImports} image imports have correct casing`);
}

main().catch(err => {
  console.error('\n❌ [verify-asset-casing] FATAL ERROR:');
  console.error(err.stack || err.message);
  process.exit(1);
});


