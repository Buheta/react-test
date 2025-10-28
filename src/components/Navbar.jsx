import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.jpg";


const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/aboutUs' },
    // {
    //     name: 'Schools',
    //     dropdown: [
    //         { name: 'Kigali', link: '/schools/kigali' },
    //         // { name: 'Musanze', link: '/schools/musanze' },
    //         { name: 'Rubavu', link: '/schools/rubavu' },
    //     ],
    // },
    // {
    //     name: 'Admissions',
    //     dropdown: [
    //         { name: 'Undergraduate', link: '/admissions/undergraduate' },
    //         { name: 'Graduate', link: '/admissions/graduate' },
    //         { name: 'International', link: '/admissions/international' },
    //     ],
    // },
    { name: 'Academics', link: '/Academic' },
    // {
    //     name: 'Academics',
    //     dropdown: [
    //         { name: 'Programs', link: '/academics/programs' },
    //         { name: 'Faculties', link: '/academics/faculties' },
    //         { name: 'Research', link: '/academics/research' },
    //     ],
    // },
    {
        name: 'Student Life',
        dropdown: [
            { name: 'Clubs', link: '/student-life/clubs' },
            { name: 'Spiritual Life', link: '/student-life' },
            { name: 'Sports', link: '/student-life/sports' },
        ],
    },
    {
        name: 'News', link: '/campus-news'
        // dropdown: [
        //     { name: 'News', link: '/campus-news' },
        //     { name: 'Events', link: '/events' },
        // ],
    },
    { name: 'Contact Us', link: '/contact' },
];

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                    <img 
                        src={logo} 
                        alt="MySchool Logo" 
                        className="w-15 h-15"
                    />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item, idx) =>
                            item.dropdown ? (
                                <div
                                    key={idx}
                                    className="relative group"
                                    onMouseEnter={() => setOpenDropdown(item.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button className="text-black hover:text-blue-600">
                                        {item.name}
                                    </button>
                                    <div
                                        className={`absolute left-1/2 transform -translate-x-1/2 top-full w-48 bg-white rounded-md shadow-lg z-50 ${openDropdown === item.name ? 'block' : 'hidden'
                                            }`}
                                    >
                                        {item.dropdown.map((subItem, subIdx) => (
                                            <a
                                                key={subIdx}
                                                href={subItem.link}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="text-black hover:text-blue-600"
                                >
                                    {item.name}
                                </a>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-black focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden w-full flex justify-center">
                    <div className="flex flex-col items-center space-y-2 py-4">
                        {menuItems.map((item, idx) =>
                            item.dropdown ? (
                                <details key={idx} className="group">
                                    <summary className="text-black font-medium cursor-pointer">
                                        {item.name}
                                    </summary>
                                    <div className="mt-1 space-y-1 text-center">
                                        {item.dropdown.map((subItem, subIdx) => (
                                            <a
                                                key={subIdx}
                                                href={subItem.link}
                                                className="block text-sm text-gray-700 hover:underline"
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="text-black hover:text-blue-600"
                                >
                                    {item.name}
                                </a>
                            )
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
