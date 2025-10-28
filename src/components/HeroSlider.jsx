import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    return (
        <div className="relative w-screen h-[90vh] overflow-hidden mt-16">
            {/* 🎥 Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute w-full h-full object-cover"
            >
                <source src="video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 🕶 Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

            {/* 🌫️ Fade-in Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 animate-fade-in">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Welcome to Wisdom School
                </h1>
                <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md">
                    Nurturing young minds with knowledge, compassion, and purpose.
                </p>
                <Link
                    to="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                >
                    Learn More
                </Link>
            </div>

            {/* ⬇️ Scroll Down Arrow */}
            <div className="absolute bottom-8 w-full flex justify-center z-20">
                <div className="animate-bounce text-white text-3xl">↓</div>
            </div>
        </div>
    );
};

export default HeroSlider;
