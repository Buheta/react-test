// SchoolLevels.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import prim1 from '../assets/images/gallery38.jpg';
import prim2 from "../assets/images/primary.JPG";
import prim4 from "../assets/images/galleryHome.JPG";

const schoolLevels = [
    {
        title: "Nursery School",
        image: prim1,
        link: "/academics/nursery",
    },
    {
        title: "Primary School",
        image: prim2,
        link: "/academics/primary",
    },
    {
        title: "High School",
        image: prim4,
        link: "/academics/highSchool",
    },
];

const SchoolLevels = () => {
    return (
        <section className="bg-gray-100 py-12 px-4 md:px-16 pt-30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Our School Levels</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {schoolLevels.map((level, index) => (
                        <div
                            key={index}
                            className="group relative rounded-xl shadow-lg overflow-hidden h-72 flex flex-col justify-end bg-white"
                        >
                            {/* Zooming image */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={level.image}
                                    alt={level.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2"
                                />
                                {/* Optional dark overlay */}
                                {/* <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div> */}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-5 text-white">
                                <h3 className="text-xl font-semibold mb-3">{level.title}</h3>
                                <Link
                                    to={level.link}
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default SchoolLevels;
