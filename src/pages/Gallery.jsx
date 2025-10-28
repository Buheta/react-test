import React from "react";
import Navbar from "../components/Navbar";

// Import images
import gallery1 from "../assets/gallery/gallery1.JPG";
import gallery2 from "../assets/gallery/gallery2.JPG";
import gallery3 from "../assets/gallery/gallery3.JPG";
import gallery4 from "../assets/gallery/gallery4.JPG";
import gallery5 from "../assets/gallery/gallery5.JPG";
import gallery6 from "../assets/gallery/gallery6.JPG";
import gallery7 from "../assets/gallery/gallery7.JPG";
import gallery8 from "../assets/gallery/gallery8.JPG";
import gallery9 from "../assets/gallery/gallery9.JPG";
import gallery10 from "../assets/gallery/gallery10.JPG";
import gallery11 from "../assets/gallery/gallery11.JPG";
import gallery12 from "../assets/gallery/gallery12.JPG";
import gallery13 from "../assets/gallery/gallery13.JPG";
import gallery14 from "../assets/gallery/gallery14.JPG";
import gallery15 from "../assets/gallery/gallery15.JPG";
import gallery16 from "../assets/gallery/gallery16.JPG";
import gallery17 from "../assets/gallery/gallery17.JPG";
import gallery18 from "../assets/gallery/gallery18.JPG";
import gallery19 from "../assets/gallery/gallery19.JPG";
import gallery20 from "../assets/gallery/gallery20.JPG";
import gallery21 from "../assets/gallery/gallery21.JPG";
import gallery22 from "../assets/gallery/gallery22.JPG";
import gallery23 from "../assets/gallery/gallery23.JPG";
import gallery24 from "../assets/gallery/gallery24.JPG";
import gallery25 from "../assets/gallery/gallery25.JPG";
import gallery26 from "../assets/gallery/gallery26.JPG";
import gallery27 from "../assets/gallery/gallery27.JPG";
import gallery28 from "../assets/gallery/gallery28.JPG";
import gallery29 from "../assets/gallery/gallery29.JPG";
import gallery30 from "../assets/gallery/gallery30.JPG";
import Footer from "../components/footer";

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10,
  gallery11, gallery12, gallery13, gallery14, gallery15,
  gallery16, gallery17, gallery18, gallery19, gallery20,
  gallery21, gallery22, gallery23, gallery24, gallery25,
  gallery26, gallery27, gallery28, gallery29, gallery30,
];

export default function Gallery() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Gallery Section */}
      <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10 text-center">
          Our Gallery
        </h1>

        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-4 
          sm:gap-6 
          max-w-7xl 
          w-full 
          justify-items-center
        ">
          {images.map((src, index) => (
            <div key={index} className="w-full relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
