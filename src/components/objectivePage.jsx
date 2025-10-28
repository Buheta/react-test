import React, { useState, useEffect } from "react";

// Example images
import img1 from "../assets/gallery/gallery1.jpg";
import img2 from "../assets/gallery/gallery2.jpg";
import img3 from "../assets/gallery/gallery3.jpg";

const images = [img1, img2, img3];

export default function TextImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Full page background
    <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center">
      {/* Centered container */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 gap-8 w-full">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Objective
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
            To build strong children for a strong Rwanda with individuals who are educated, disciplined, creative, and guided by faith.
          </p>
        </div>

        {/* Right: Image Slider */}
        <div className="md:w-1/2 relative w-full h-56 sm:h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`
                w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out
                ${index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute top-0 left-0"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
