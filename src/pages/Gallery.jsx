import React from "react";
import Navbar from "../components/Navbar";

// Import images
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";
import gallery13 from "../assets/gallery/gallery13.jpg";
import gallery14 from "../assets/gallery/gallery14.jpg";
import gallery15 from "../assets/gallery/gallery15.jpg";
import gallery16 from "../assets/gallery/gallery16.jpg";
import gallery17 from "../assets/gallery/gallery17.jpg";
import gallery18 from "../assets/gallery/gallery18.jpg";
import gallery19 from "../assets/gallery/gallery19.jpg";
import gallery20 from "../assets/gallery/gallery20.jpg";
import gallery21 from "../assets/gallery/gallery21.jpg";
import gallery22 from "../assets/gallery/gallery22.jpg";
import gallery23 from "../assets/gallery/gallery23.jpg";
import gallery24 from "../assets/gallery/gallery24.jpg";
import gallery25 from "../assets/gallery/gallery25.jpg";
import gallery26 from "../assets/gallery/gallery26.jpg";
import gallery27 from "../assets/gallery/gallery27.jpg";
import gallery28 from "../assets/gallery/gallery28.jpg";
import gallery29 from "../assets/gallery/gallery29.jpg";
import gallery30 from "../assets/gallery/gallery30.jpg";
import FooterDetails from "../components/footerDetails";

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
      <FooterDetails />
    </>
  );
}
