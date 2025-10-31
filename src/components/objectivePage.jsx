import React, { useState, useEffect } from "react";

// Example images
import img1 from "../assets/images/dir3.jpg";
import img2 from "../assets/images/dir2.jpeg";

const images = [img1, img2];

export default function TextImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12 sm:py-16 gap-8 w-full">

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Our Director and operations manager with the Minister of Education
          </p>
        </div>

        {/* Right: Image Slider */}
        <div className="w-full md:w-1/2 relative aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`
                absolute inset-0 w-full h-full  transition-opacity duration-700 ease-in-out
                ${index === currentIndex ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
