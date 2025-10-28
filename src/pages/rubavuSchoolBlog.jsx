import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, User, Calendar, Tag, Mail, Phone, MapPin, Menu } from "lucide-react";

const samplePosts = [
  {
    id: 1,
    title: "Welcome Back: New Term, New Goals",
    excerpt:
      "A warm welcome to students and staff — key dates, a quick look at clubs, and a spotlight on our volunteering program.",
    author: "Ms. Amahoro",
    date: "2025-09-01",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Science Fair Highlights",
    excerpt:
      "Student projects that blew our minds — winners, judges' notes, and how to prepare for next year.",
    author: "Mr. Kamali",
    date: "2025-06-14",
    category: "Events",
    image: "https://images.unsplash.com/photo-1532634896-26909d0d2b46?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Study Tips: Exams Without the Stress",
    excerpt: "Practical, teacher-approved study habits and a 4-week plan to stay on top of exams.",
    author: "Ms. Patel",
    date: "2025-10-01",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Alumni Spotlight: From Our Halls to the World",
    excerpt: "Where are our alumni now? Career paths, advice, and how they remember school life.",
    author: "Alumni Team",
    date: "2025-07-22",
    category: "Community",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=60",
  },
];

const categories = ["All", "Announcements", "Events", "Academic", "Community","Our Calender"];

export default function RubavuBlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    return samplePosts.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.author.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-blue-600 text-white w-15 h-15 flex items-center justify-center font-bold">WDS</div>
              <div>
                <h1 className="text-lg font-semibold">WISDOM SCHOOL RUBAVU BRANCH</h1>
                <p className="text-xs text-gray-500">News & stories from our school community</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <button onClick={() => setActivePage("home")} className={`hover:text-blue-600 ${activePage === "home" ? "text-gray-600 font-semibold" : ""}`}>Home</button>
              <button onClick={() => setActivePage("about")} className={`hover:text-blue-600 ${activePage === "about" ? "text-gray-600 font-semibold" : ""}`}>About</button>
              <button onClick={() => setActivePage("contact")} className={`hover:text-blue-600 ${activePage === "contact" ? "text-gray-600 font-semibold" : ""}`}>Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-20">
            <div className="flex flex-col space-y-2 p-4 text-gray-700">
              <button onClick={() => { setActivePage("home"); setMenuOpen(false); }} className="hover:text-indigo-600 text-left">Home</button>
              <button onClick={() => { setActivePage("about"); setMenuOpen(false); }} className="hover:text-indigo-600 text-left">About</button>
              <button onClick={() => { setActivePage("contact"); setMenuOpen(false); }} className="hover:text-indigo-600 text-left">Contact</button>
              <button className="mt-2 px-3 py-1 rounded-md border border-indigo-600 text-indigo-600 text-sm w-max">Donate</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Image */}
      <div className="w-full h-48 sm:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=60"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activePage === "home" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <section className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-400 text-white p-8">
                  <div className="md:flex md:items-center md:justify-between">
                    <div>
                      <h2 className="text-3xl font-extrabold">School Life & Stories</h2>
                      <p className="mt-2 opacity-90">Updates, student work, and teacher reflections — read what's happening this term.</p>
                    </div>

                    <div className="mt-4 md:mt-0">
                      <div className="flex items-center bg-white/20 rounded-lg p-2 shadow-sm">
                        <Search className="w-5 h-5 text-white/80" />
                        <input
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search posts..."
                          className="ml-3 bg-transparent outline-none placeholder-gray-200 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-semibold">Latest Posts</h2>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredPosts.map((post) => (
                      <motion.article key={post.id} layout whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                          <h3 className="text-md font-semibold">{post.title}</h3>
                          <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                          <div className="mt-3 text-xs flex items-center gap-3 text-gray-500">
                            <User className="w-4 h-4" /> <span>{post.author}</span>
                            <Calendar className="w-4 h-4 ml-2" /> <time>{post.date}</time>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </section>

              <aside>
                <div className="sticky top-8 space-y-6">
                  <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <h4 className="text-sm font-semibold">Categories</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {categories.map((c) => (
                        <button
                          key={c}
                          onClick={() => setActiveCategory(c)}
                          className={`text-xs px-2 py-1 rounded-full border ${activeCategory === c ? "bg-indigo-100 border-indigo-200" : "bg-white"}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}

        {activePage === "about" && (
          <section className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">About Starlight School Blog</h2>
            <p className="text-gray-700 leading-relaxed">
              The Starlight School Blog is our digital window into the life of the school. It highlights student achievements, teacher insights, and community events that shape our learning environment.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our goal is to encourage collaboration, celebrate creativity, and share knowledge. From academic tips to club updates, each post reflects our school's spirit of curiosity and excellence.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Managed by our student media club and supported by teachers, this blog aims to connect everyone — students, parents, and alumni — through storytelling.
            </p>
          </section>
        )}

        {activePage === "contact" && (
          <section className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              Have questions, ideas, or stories to share? Reach out to us using the details below or send us a message directly.
            </p>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-indigo-600" /> info@wisdomschoolrubavu.edu</p>
              <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-indigo-600" /> +250 788 123 456</p>
              <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-600" /> 123 School Road, Rubavu, Rwanda</p>
            </div>

            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border rounded-md p-3 text-sm" />
              <input type="email" placeholder="Your Email" className="w-full border rounded-md p-3 text-sm" />
              <textarea placeholder="Your Message" className="w-full border rounded-md p-3 text-sm h-28" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Send Message</button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
