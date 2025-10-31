import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace these imports with your real image paths
import highMain from "../assets/images/high1.jpg";
import high1 from "../assets/images/gallery19.jpg";
import high2 from "../assets/images/high2.jpg";
import high3 from "../assets/images/gallery7.jpg";
import high4 from "../assets/images/galleryHome.jpg";

export default function HighSchoolSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* LEFT: TEXT */}
        <div className="w-full md:w-2/3 text-gray-800" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-md">
            Wisdom High School
          </h2>

          <div className="mb-6">
            <p className="text-lg font-semibold text-blue-800">
              <span className="text-gray-700">Slogan:</span>{" "}
             <blockquote className="border-l-4 border-blue-600 pl-4 italic text-blue-800 text-lg font-medium bg-blue-50/50 py-2 px-3 rounded-md shadow-sm">Our Children, Our Future</blockquote>
            </p>
            <p className="text-lg font-semibold text-blue-800">
              <span className="text-gray-700">Motto:</span>{" "}
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-blue-800 text-lg font-medium bg-blue-50/50 py-2 px-3 rounded-md shadow-sm">Fearing God is Knowledge</blockquote>
            </p>
          </div>

          <p className="text-base leading-relaxed mb-6">
            At <strong>Wisdom High School</strong>, education moves beyond classrooms — it becomes a
            life-shaping experience. We are committed to nurturing disciplined, skilled, and visionary
            learners who are prepared to contribute meaningfully to society and compete confidently in the global world.
          </p>

          <p className="text-base leading-relaxed mb-6">
            As part of the <strong>Wisdom Schools Rwanda Network</strong>, our High School follows the National Curriculum of Rwanda, 
            under the guidance of the <strong>National Examination and School Inspection Authority (NESA)</strong>. 
            We proudly uphold our slogan — <em>‘Our Children, Our Future’</em> and our motto — <em>‘Fearing God is Knowledge.’</em> 
            These guide our mission to cultivate both the mind and the heart, blending academic rigor with moral excellence.
          </p>

          {/* Section Divider */}
          <div className="w-24 h-1 bg-blue-500 rounded-full mb-8"></div>

          <h3 className="text-2xl font-bold text-blue-700 mb-4 uppercase tracking-wide">
            Curriculum Overview
          </h3>
          <p className="text-base leading-relaxed mb-6">
            Wisdom High School offers a well-structured curriculum that develops academic mastery, leadership skills, 
            and professional readiness. We emphasize Science and Technology while providing a strong foundation in Business, ICT, 
            and Health-related fields.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Our curriculum aligns fully with NESA recommendations for O’ Level (S1–S3) and A’ Level (S4–S6), 
            ensuring learners gain competencies that meet both national and international standards.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-4 uppercase tracking-wide">
            Subjects Offered at Ordinary Level (O’ Level: S1–S3)
          </h3>

          <div className="bg-white/60 p-4 rounded-xl shadow-sm border border-blue-100 mb-6">
            <h4 className="font-semibold text-blue-600 mb-2">Core Subjects (as per NESA framework):</h4>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>English</li>
              <li>Kinyarwanda</li>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Geography</li>
              <li>History</li>
              <li>Entrepreneurship</li>
              <li>Computer Science / ICT</li>
              <li>French</li>
              <li>Kiswahili</li>
              <li>Creative Arts (Fine Art / Music)</li>
              <li>Physical and Health Education</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-4 uppercase tracking-wide">
            A-Level (S4–S6)
          </h3>

          <h4 className="text-xl font-semibold text-blue-600 mb-2">
            1. Pathways and Streams at Advanced Level (S4–S6)
          </h4>

          <p className="text-base leading-relaxed mb-6">
            From Senior Four (S4) onwards, students follow specialized pathways as directed by NESA. 
            These are designed to prepare learners for higher education, professional training, and the labor market.
          </p>

          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg border-l-4 border-blue-600 shadow-sm mb-6">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">
              Mathematics and Sciences Pathway
            </h4>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>
                <strong>Stream 1:</strong> Mathematics, Physics, Chemistry, and Biology (MPCB) — ideal for learners aspiring to careers in medicine, laboratory science, and engineering.
              </li>
              <li>
                <strong>Stream 2:</strong> Mathematics, Economics, Geography, and Physics (MEGP) — tailored for learners interested in engineering, architecture, and applied economics.
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-l-4 border-green-600 shadow-sm mb-6">
            <h4 className="text-xl font-semibold text-green-700 mb-2">
              2. Professional and Technical Programs (Wisdom Extensions)
            </h4>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li><strong>Accounting:</strong> Providing financial literacy, auditing, and business analysis skills.</li>
              <li><strong>Software Development:</strong> Equipping learners with programming, web design, and system development skills.</li>
              <li><strong>Associate Nursing Program:</strong> Offering foundational medical knowledge and practical healthcare competencies.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-500 shadow-sm mb-6">
            <h4 className="text-xl font-semibold text-yellow-700 mb-2">
              3. Other Science Combinations Recognized by NESA
            </h4>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>PCM – Physics, Chemistry, Mathematics</li>
              <li>PCB – Physics, Chemistry, Biology</li>
              <li>MCB – Mathematics, Chemistry, Biology</li>
              <li>MPC – Mathematics, Physics, Computer Science</li>
              <li>MEG – Mathematics, Economics, Geography</li>
              <li>MEC – Mathematics, Economics, Computer Science</li>
              <li>MPG – Mathematics, Physics, Geography</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-4 uppercase tracking-wide">
            Teaching Approach and Learning Environment
          </h3>

          <p className="text-base leading-relaxed mb-6">
            Learning at Wisdom High School is interactive, practical, and purpose-driven. 
            Modern science laboratories, computer labs, and digital classrooms support experiential learning.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-4 uppercase tracking-wide">
            Values and Holistic Education
          </h3>

          <p className="text-base leading-relaxed mb-6">
            We integrate cross-cutting themes recommended by NESA, including peace and values education, 
            financial literacy, gender equality, environmental conservation, health, and digital awareness. 
            The Wisdom High School graduate is confident, competent, and compassionate — equipped with both knowledge and character.
          </p>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-blue-800 text-lg font-medium bg-blue-50/50 py-2 px-3 rounded-md shadow-sm">
            “Our Children, Our Future — and indeed, Fearing God is Knowledge.”
          </blockquote>
        </div>

        {/* RIGHT: MAIN IMAGE */}
        <div
          className="w-full md:w-1/3 relative aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
          data-aos="fade-left"
        >
          <img
            src={highMain}
            alt="Wisdom High School"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* GALLERY */}
      <div className="max-w-7xl mx-auto mt-16">
        <h3
          className="text-3xl font-bold text-center text-blue-700 mb-10 uppercase tracking-wide"
          data-aos="fade-up"
        >
          Highlights from Wisdom High School
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[high1, high2, high3, high4].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 bg-white"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={img}
                alt={`High School Activity ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}