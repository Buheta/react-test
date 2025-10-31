import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Main nursery image (hero)
import nurseryMain from "../assets/images/gallery38.jpg";

// Additional gallery images (add your own)
import nursery1 from "../assets/images/gallery45.jpg";
import nursery2 from "../assets/images/gallery34.jpg";
import nursery3 from "../assets/images/gallery39.jpg";
import nursery4 from "../assets/images/gallery41.jpg";

export default function NurserySection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <section className="w-full bg-gradient-to-b from-pink-50 to-yellow-50 py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* LEFT: TEXT CONTENT */}
        <div className="w-full md:w-2/3 text-gray-800" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
            Wisdom School Nursery Section
          </h2>

          <p className="text-base leading-relaxed mb-6">
            At Wisdom School, our Nursery Section marks the beginning of an exciting educational journey 
            a place where every child’s curiosity is nurtured, creativity is celebrated, and confidence is built. 
            We believe that early childhood is the foundation for lifelong learning, and our program is carefully designed 
            to inspire young learners to explore, discover, and grow in a warm and stimulating environment.
          </p>

          <p className="text-base leading-relaxed mb-6">
            We follow the rich National Curriculum of Rwanda, guided by the National Examination and School Inspection Authority (NESA). 
            This ensures that our pupils acquire essential knowledge, skills, and values in line with the Early Childhood Development (ECD) framework, 
            helping them build a solid foundation for primary education and beyond.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
            Subjects We Study in the Nursery Section
          </h3>

          <p className="text-base leading-relaxed mb-6">
            In accordance with NESA recommendations, our Nursery Section offers a variety of integrated learning areas 
            that foster holistic development. These include:
          </p>

          <ul className="list-disc list-inside space-y-2 text-base mb-6">
            <li>
              <strong>Pre-Literacy (Early Reading and Writing):</strong> Building communication and language skills through storytelling, songs, phonics, and interactive speaking activities.
            </li>
            <li>
              <strong>Pre-Numeracy (Early Mathematics):</strong> Introducing counting, shapes, measurements, and logical thinking through hands-on play and practical experiences.
            </li>
            <li>
              <strong>English:</strong> Developing strong listening, speaking, and vocabulary skills as a foundation for global communication.
            </li>
            <li>
              <strong>Creative Arts and Music:</strong> Nurturing imagination and self-expression through drawing, painting, rhythm, and movement.
            </li>
            <li>
              <strong>Environmental and Science Awareness:</strong> Helping children explore the natural world while developing curiosity and care for the environment.
            </li>
            <li>
              <strong>Religious and Moral Education:</strong> Instilling values such as kindness, respect, honesty, responsibility, and love for God and others.
            </li>
            <li>
              <strong>Physical and Health Education:</strong> Encouraging physical coordination, hygiene, safety, and overall well-being through structured play and activities.
            </li>
            <li>
              <strong>Social and Emotional Learning:</strong> Supporting emotional intelligence, confidence, cooperation, and problem-solving among peers.
            </li>
          </ul>

          <p className="text-base leading-relaxed mb-6">
            Beyond the national curriculum, Wisdom School integrates modern global teaching practices to enrich learning. 
            Inspired by Montessori and Early Years Foundation Stage (EYFS) approaches, our teachers use creative, child-centered methods 
            that encourage independence, exploration, and critical thinking.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Classrooms are vibrant spaces of discovery where children learn by doing — engaging in projects, experiments, and play-based lessons 
            that make learning enjoyable and meaningful. Teachers act as facilitators, guiding learners to think independently and express their ideas confidently.
          </p>

          <p className="text-base leading-relaxed mb-6">
            At Wisdom School, we prepare our learners to meet the demands of a changing world. Our curriculum embraces cross-cutting issues emphasized 
            in Rwanda’s Competence-Based Curriculum, including environmental protection, gender equality, peace education, digital literacy, and cultural diversity.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Through these themes, our pupils develop awareness of global challenges, empathy toward others, and the courage to become responsible young citizens.
          </p>

          <p className="text-base leading-relaxed mb-6">
            At Wisdom School Nursery, we don’t just teach — we nurture hearts and minds. Our mission is to raise engaged, confident, and well-rounded pupils 
            ready to meet the world with curiosity, creativity, and character.
          </p>

          <blockquote className="border-l-4 border-blue-700 pl-4 italic text-blue-700 text-lg">
            “At Wisdom School, every child begins their journey of wisdom — learning with joy, growing with love, and shining with purpose.”
          </blockquote>
        </div>

        {/* RIGHT: MAIN IMAGE */}
        <div className="w-full md:w-1/3 relative aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-xl" data-aos="fade-left">
          <img
            src={nurseryMain}
            alt="Wisdom School Nursery Section"
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
          Moments from Our Nursery Section
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[nursery1, nursery2, nursery3, nursery4].map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={img}
                alt={`Nursery Activity ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
