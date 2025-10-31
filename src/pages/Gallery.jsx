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
import highSchool from "../assets/images/highSchool.JPG";
import galleryHome from "../assets/images/galleryHome.JPG";
import gallery33 from "../assets/images/gallery33.jpg";
import gallery34 from "../assets/images/gallery34.jpg";
import gallery35 from "../assets/images/gallery35.jpg";
import gallery36 from "../assets/images/gallery36.jpg";
import gallery37 from "../assets/images/gallery37.jpg";
import gallery38 from "../assets/images/gallery38.jpg";
import gallery39 from "../assets/images/gallery39.jpg";
import gallery40 from "../assets/images/gallery40.jpg";
import gallery41 from "../assets/images/gallery41.jpg";
import gallery42 from "../assets/images/gallery42.jpg";
import gallery43 from "../assets/images/gallery43.jpg";
import gallery44 from "../assets/images/gallery44.jpg";
import gallery45 from "../assets/images/gallery45.jpg";
import gallery46 from "../assets/images/gallery46.jpg";
import gallery47 from "../assets/images/gallery47.jpg";
import gallery48 from "../assets/images/gallery48.jpg";
import gallery49 from "../assets/images/gallery49.jpg";
import gallery50 from "../assets/images/gallery50.jpg";
import gallery51 from "../assets/images/gallery51.jpg";  
import gallery52 from "../assets/images/gallery52.jpg";
import gallery53 from "../assets/images/gallery53.jpg";
import gallery54 from "../assets/images/gallery54.jpg";
import gallery55 from "../assets/images/gallery55.jpg";
import gallery56 from "../assets/images/gallery56.jpg";
import gallery57 from "../assets/images/gallery57.jpg";
import gallery58 from "../assets/images/gallery58.jpg";
import gallery59 from "../assets/images/gallery59.jpg";
import gallery60 from "../assets/images/gallery60.jpg";  

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10,
  gallery11, gallery12, gallery13, gallery14, gallery15,
  gallery16, gallery17, gallery18, gallery19, gallery20,
  gallery21, gallery22, gallery23, gallery24, gallery25,
  gallery26, gallery27, gallery28, gallery29, gallery30,
  highSchool,galleryHome,gallery33,gallery34,gallery35,
  gallery36,gallery37,gallery38,gallery39, gallery40, 
  gallery41, gallery42, gallery43, gallery44,
  gallery45, gallery46, gallery47, gallery48, 
  gallery49, gallery50,gallery51, gallery52, 
  gallery53, gallery54, gallery55, gallery56,
  gallery57, gallery58, gallery59, gallery60
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
    </>
  );
}
