import React from "react";
import bgImage from "../assets/images/wisdom.jpg"; // background image
import sampleImage from "../assets/images/principal.jpg"; // left image

const DirectorMessage = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-8 md:space-y-0 md:space-x-10 text-white">
        
        {/* Left image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <img
            src={sampleImage}
            alt="Director"
            className="rounded-lg shadow-2xl object-cover w-64 h-80 md:w-72 md:h-96"
          />
        </div>

        {/* Right text */}
        <div className="w-full md:w-2/3 text-left backdrop-blur-sm bg-black/30 p-6 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-300">
            Message from the Director
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Dear Parents, Students, Staff, and Friends of Wisdom Schools Rwanda,
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            It gives me great joy to welcome you to the official website of Wisdom Schools Rwanda — a family-centered education community dedicated to nurturing learners who grow in knowledge, character, and faith.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Since our humble beginning in 2008 with only five students, God’s grace and the trust of our community have enabled us to grow into a nationwide network of thriving schools. Each of our campuses stands as a beacon of excellence — committed to transforming lives through personal discovery and self-awareness strategies that help our students and pupils understand their potential and purpose in life.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            At Wisdom Schools, our vision is not only to educate but to build strong children for a strong Rwanda. We believe that true education shapes both the mind and the heart, producing individuals who are academically competent, morally upright, and spiritually grounded.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Our achievements — from consistent top national results to inspiring stories of transformation — are a reflection of teamwork among teachers, parents, and students who share one purpose: to serve God and build a better future for our nation.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            As we continue to grow and innovate, our commitment remains unwavering — to provide holistic, value-based education that inspires young minds to think critically, act responsibly, and lead courageously.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Welcome to Wisdom Schools Rwanda — where faith meets excellence and learning transforms lives.
          </p>
          <p className="text-lg md:text-xl font-semibold mt-6 text-yellow-300">
            May God bless you.
          </p>
          <p className="text-lg md:text-xl mt-2 font-medium">
            NDUWAYESU Elie <br /> Director, Wisdom Schools Rwanda
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
