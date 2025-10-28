import React from "react";
import apartImg from "../assets/images/apartImg.jpg";
import labo from "../assets/images/labo.jpg";
import activeL from "../assets/images/activeL.jpg";


export default function WhatSetsUsApart() {
    return (
        <section className="bg-gray-100 py-20">
            {/* Section Title */}
            <div className="text-center text-5xl font-bold text-gray-800 mb-16">
                What Sets Us Apart?
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
                {/* Left - Image */}
                <div className="relative z-20">
                    <img
                        src={apartImg}
                        alt="What sets us apart"
                        className="w-full h-auto object-cover shadow-xl"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="bg-white p-8 h-95 shadow-lg md:-ml-30 relative z-10 pl-25 -mt-8 md:mt-15">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">
                        Learner-Centered
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        At our institution, we believe education is more than just academics.
                        We provide hands-on learning, a nurturing community, and resources that empower our students
                        to thrive personally and professionally. Our unique blend of innovation, tradition, and diversity
                        helps shape future leaders who are ready to make an impact.
                    </p>

                    {/* Learn More Button */}
                    <a
                        href="#learn-more"
                        className="inline-block px-5 py-2 text-white text-sm font-semibold bg-blue-600 hover:bg-white hover:text-gray-600 border border-blue-400 transition"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-center relative pt-10">
                {/* Left - Text Content */}
                <div className="bg-white p-8 shadow-lg relative z-10 md:mt-30 h-90 pr-25">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">
                        Active Learning
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        At our institution, we believe education is more than just academics.
                        We provide hands-on learning, a nurturing community, and resources that empower our students
                        to thrive personally and professionally. Our unique blend of innovation, tradition, and diversity
                        helps shape future leaders who are ready to make an impact.
                    </p>

                    {/* Learn More Button */}
                    <a
                        href="#learn-more"
                        className="inline-block px-5 py-2 text-white text-sm font-semibold bg-blue-600 hover:bg-white hover:text-gray-400 border border-blue-600 transition"
                    >
                        LEARN MORE
                    </a>
                </div>

                {/* Right - Image */}
                <div className="relative z-20 md:-ml-15">
                    <img
                        src={labo}
                        alt="What sets us apart"
                        className="w-full h-90 object-cover shadow-xl"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative pt-10">
                {/* Left - Image */}
                <div className="relative z-20">
                    <img
                        src={activeL}
                        alt="What sets us apart"
                        className="w-full h-100 object-cover shadow-xl"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="bg-white p-8 h-95 shadow-lg md:-ml-30 relative z-10 pl-25 -mt-8 md:mt-30">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">
                        Flexible & Accelerated Pacing
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        At our institution, we believe education is more than just academics.
                        We provide hands-on learning, a nurturing community, and resources that empower our students
                        to thrive personally and professionally. Our unique blend of innovation, tradition, and diversity
                        helps shape future leaders who are ready to make an impact.
                    </p>

                    {/* Learn More Button */}
                    <a
                        href="#learn-more"
                        className="inline-block px-5 py-2 text-white text-sm font-semibold bg-blue-600 hover:bg-white hover:text-gray-400 border border-blue-400 transition"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
}
