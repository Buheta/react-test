import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Main image and gallery photos (replace with your real images)
import primaryMain from "../assets/images/primary.JPG";
import primary1 from "../assets/images/primary1.JPG";
import primary2 from "../assets/images/primary2.JPG";
import primary3 from "../assets/images/primary3.JPG";
import primary4 from "../assets/images/gallery3.JPG";

export default function PrimarySection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* LEFT: TEXT */}
        <div className="w-full md:w-2/3 text-gray-800" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
            Wisdom School Primary Section: <br /> Building Competence, Character, and Confidence
          </h2>

          <p className="text-base leading-relaxed mb-6">
            At Wisdom School, our Primary Section is where learning takes shape and purpose is born. 
            It is a vibrant community of young learners guided by wisdom, faith, and excellence — a place where curiosity grows into understanding, 
            and understanding blossoms into confidence.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Rooted in the National Curriculum of Rwanda and guided by the National Examination and School Inspection Authority (NESA), 
            we follow the Competence-Based Curriculum (CBC) designed to nurture the knowledge, skills, and values every learner needs to succeed 
            in life and contribute meaningfully to society.
          </p>

          <p className="text-base leading-relaxed mb-6">
            We proudly uphold our slogan — <strong>“Our Children, Our Future,”</strong> and our motto — <strong>“Fearing God is Knowledge.”</strong> 
            These define who we are: a school that believes true education combines academic excellence, moral integrity, and faith in God.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
            Subjects We Study in the Primary Section
          </h3>

          <p className="text-base leading-relaxed mb-6">
            To ensure a balanced and holistic learning experience, our curriculum is divided into Core Subjects and Complementary Subjects, 
            following NESA recommendations and enhanced with international exposure.
          </p>

          <h4 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Core Subjects</h4>
          <p className="text-base leading-relaxed mb-6">
            These subjects form the academic backbone of learning at Wisdom School and are central to the development of key competencies:
          </p>

          <ul className="list-disc list-inside space-y-2 text-base mb-6 pl-15">
            <li><strong>English:</strong> Strengthening communication, comprehension, and writing skills for confident global expression.</li>
            <li><strong>Kinyarwanda:</strong> Fostering national identity, unity, and appreciation of Rwanda’s cultural heritage.</li>
            <li><strong>Mathematics:</strong> Enhancing logical reasoning, accuracy, and problem-solving through real-life applications.</li>
            <li><strong>Science and Elementary Technology (SET):</strong> Inspiring curiosity, creativity, and innovation through exploration and discovery.</li>
            <li><strong>Social and Religious Studies:</strong> Promoting citizenship, moral integrity, leadership, and the fear of God as the foundation of wisdom.</li>
          </ul>

          <h4 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Complementary Subjects</h4>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            These subjects enrich the learning experience, nurturing creativity, digital competence, and global understanding:
          </p>

          <ul className="list-disc list-inside space-y-2 text-base mb-6 pl-15">
            <li><strong>French:</strong> Expanding linguistic horizons through an additional international language.</li>
            <li><strong>Chinese (Mandarin):</strong> Introducing learners to one of the world’s most spoken languages and cultures, broadening global awareness.</li>
            <li><strong>ICT (Information and Communication Technology):</strong> Building digital literacy and preparing pupils for a technology-driven world.</li>
            <li><strong>Creative Arts and Music:</strong> Encouraging imagination, self-expression, and appreciation of beauty through art, music, and performance.</li>
            <li><strong>Physical and Health Education:</strong> Promoting teamwork, discipline, sportsmanship, hygiene, and overall physical well-being.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
            Wisdom’s Learning Approach
          </h3>

          <p className="text-base leading-relaxed mb-6">
            At Wisdom School, learning is active, engaging, and meaningful. Our classrooms are hubs of discovery, creativity, and collaboration. 
            We combine Rwanda’s Competence-Based Curriculum with global best practices, ensuring learners not only remember knowledge but also apply it in real-life situations.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Our methods include project-based learning, group discussions, storytelling, digital exploration, and practical demonstrations — 
            all designed to strengthen the Four Cs of 21st-century learning: Communication, Collaboration, Creativity, and Critical Thinking.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Our teachers are mentors who guide, inspire, and model the values we teach — discipline, respect, curiosity, and excellence.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
            Instilling Values and Cross-Cutting Competencies
          </h3>

          <p className="text-base leading-relaxed mb-6">
            Beyond academics, Wisdom School integrates cross-cutting issues across all learning areas. 
            These include: Peace and values education, gender equality, financial literacy, environmental protection, digital awareness, child rights, and health education.
          </p>

          <p className="text-base leading-relaxed mb-6">
            This approach ensures that our pupils grow into responsible, compassionate, and visionary individuals who understand the world and their purpose in it.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
            A Place Where Excellence Meets Purpose
          </h3>

          <p className="text-base leading-relaxed mb-6">
            The Wisdom School Primary Section is where education becomes transformation. 
            We mold not just intelligent learners but purposeful citizens who lead with humility, serve with love, and live by faith.
          </p>

          <blockquote className="border-l-4 border-blue-700 pl-4 italic text-blue-700 text-lg">
            “Our Children, Our Future — and truly, Fearing God is Knowledge.”
          </blockquote>
        </div>

        {/* RIGHT: MAIN IMAGE */}
        <div className="w-full md:w-1/3 relative aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-xl" data-aos="fade-left">
          <img
            src={primaryMain}
            alt="Wisdom School Primary Section"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3
          className="text-2xl font-semibold text-center text-blue-700 mb-8"
          data-aos="fade-up"
        >
          Moments from Our Primary Section
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[primary1, primary2, primary3, primary4].map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={img}
                alt={`Primary Activity ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
