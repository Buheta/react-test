import React, { useState, useEffect } from "react";

// === IMAGES ===
import chinese1 from "../assets/images/chine1.jpeg";
import chinese2 from "../assets/images/chine2.jpeg";
import chinese3 from "../assets/images/chine5.jpeg";
import chinese4 from "../assets/images/chine3.jpeg";
import chinese5 from "../assets/images/chine4.jpeg";
import chinese6 from "../assets/images/chine7.jpeg";
import chinese7 from "../assets/images/chine6.jpeg";

import spelling1 from "../assets/images/spell1.jpg"; 
import spelling2 from "../assets/images/spell2.jpg";
import spelling3 from "../assets/images/spell3.jpg";
import spelling4 from "../assets/images/spell4.jpg";
import spelling5 from "../assets/images/spell5.jpg";

export default function ClubsPage() {
  // State for both sliders
  const [chineseIndex, setChineseIndex] = useState(0);
  const [spellingIndex, setSpellingIndex] = useState(0);

  const chineseImages = [chinese1, chinese2, chinese3, chinese4, chinese5, chinese6, chinese7];
  const spellingImages = [spelling1, spelling2,spelling3,spelling4,spelling5];

  // Auto slide for both carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setChineseIndex((prev) => (prev + 1) % chineseImages.length);
      setSpellingIndex((prev) => (prev + 1) % spellingImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [chineseImages.length, spellingImages.length]);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100">
      {/* ===================== Chinese Club Section ===================== */}
      <section className="py-12 sm:py-15 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          {/* Text */}
          <div className="w-full md:w-2/3 text-gray-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Wisdom School Chinese Club: <br /> Bridging Cultures, Building Global Minds
            </h2>

            <p className="text-base leading-relaxed mb-6">
              At Wisdom School, we believe that language is not just a means of communication
              it is a bridge that connects people, cultures, and opportunities. 
              Our Chinese Club stands as a shining example of this belief, promoting intercultural understanding,
              global competence, and academic excellence through the study and celebration of the Chinese language and culture.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              A Journey of Excellence and Discovery
            </h3>
            <p className="text-base leading-relaxed mb-6">
             Since its formation, the Wisdom School Chinese Club has grown into one of the most vibrant and inspiring student communities on campus. 
             Through hard work, discipline, and enthusiasm, our learners have embraced Mandarin Chinese not merely as a subject, but as a window to the world one that connects them to innovation, culture, and opportunity. 
            </p>
            <p className="text-base leading-relaxed mb-6">
              Over the years, the club has taken part in numerous national Chinese language competitions, consistently demonstrating excellence in speech, calligraphy, music, and cultural performance categories.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Our learners have proudly emerged among the best performers at national level, earning recognition for their mastery of the language and their dedication to cultural exchange.
            </p>
            <p className="text-base leading-relaxed mb-6">
             A highlight of our journey came in the 2024–2025 academic year, when two of our outstanding pupils Shema Bienheureux Achille Pitie and Keza Ndoli Sandra  were selected to represent both Wisdom School and Rwanda in the International Chinese Competitions held in China. 
             Their participation on the global stage marked a historic milestone for our school, showcasing the commitment, talent, and excellence that define Wisdom learners. 
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              Partnership with the Confucius Institute Rwanda
            </h3>
            <p className="text-base leading-relaxed mb-6">
              The success of the Chinese Club has been greatly strengthened by our partnership with the Embassy of China in Rwanda together with the Confucius Institute Rwanda, which provides us with guidance, mentorship, and professional support in teaching and learning the Chinese language. 
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              Through this collaboration, our students and teachers benefit from: 
            </h3>
            <ul className="list-disc list-inside text-base space-y-2 mb-6 pl-15">
              <li>Training and mentorship from qualified Chinese instructors.</li>
              <li>Access to authentic Chinese learning materials and cultural resources. </li>
              <li>Opportunities to participate in national and international competitions. </li>
              <li>Cultural exchange programs that deepen understanding between Rwandan and Chinese students. </li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              Learning Beyond the Classroom 
            </h3>
            <p className="text-base leading-relaxed mb-6">
              The Chinese Club at Wisdom School is a space for creativity, exploration, and expression. 
              Members engage in a variety of enriching activities, including: 
            </p>
            <ul className="list-disc list-inside text-base space-y-2 mb-6 pl-15">
              <li>Chinese calligraphy and painting workshops — blending art and language learning. </li>
              <li>Traditional Chinese music and dance performances — celebrating cultural harmony.</li>
              <li>Speech and storytelling competitions — enhancing pronunciation, tone, and confidence.</li>
              <li>Cultural exhibitions and film viewings — promoting global awareness and empathy.</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Through these activities, students build confidence, teamwork, and communication skills all essential tools for success in a multicultural world. 
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              Preparing Global Citizens
            </h3>
            <p className="text-base leading-relaxed mb-6">
              At Wisdom School, we understand that mastering Mandarin Chinese means more than learning a new language  it means gaining access to global opportunities. 
              As China continues to play a vital role in global development, trade, and technology, our learners are positioning themselves for a future without borders. 
            </p>
            <p className="text-base leading-relaxed mb-6">
              The Wisdom School Chinese Club continues to grow each year, inspiring curiosity, discipline, and pride in every learner who joins its journey. 
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              A Future Without Borders 
            </h3>
            <p className="text-base leading-relaxed mb-6">
              The achievements of the Chinese Club  from national victories to international representation remind us that education is a bridge that connects people and cultures. 
              We celebrate the success of Shema Bienheureux Achille Pitie and Keza Ndoli Sandra, whose
            </p>
            <blockquote className="border-l-4 border-blue-700 pl-4 italic text-blue-700 text-lg">
              “When we learn a new language, we open a new window to the world.”
              <br />
              <span className="font-semibold">— Wisdom School Chinese Club</span>
            </blockquote>
          </div>

          {/* Image Slider */}
          <div className="w-full md:w-1/3 relative aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
            {chineseImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Chinese Club ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === chineseIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {chineseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setChineseIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === chineseIndex ? "bg-red-600 scale-110" : "bg-gray-300"
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Spelling Bee Club Section ===================== */}
      <section className="py-12 sm:py-15 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center md:flex-row-reverse">
          {/* Text */}
          <div className="w-full md:w-2/3 text-gray-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Wisdom School Spelling Bee Club
            </h2>

            <p className="text-base leading-relaxed mb-6">
              At Wisdom School, we believe that the mastery of language is the foundation of knowledge, confidence, and leadership. 
              Our Spelling Bee Club stands as a pillar of linguistic excellence promoting vocabulary development, pronunciation precision, 
              and communication skills across multiple languages.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              A Hub for Language Mastery
            </h3>
            <p className="text-base leading-relaxed mb-6">
              The Wisdom School Spelling Bee Club is dedicated to helping learners sharpen their spelling,reading, and speaking skills across the languages taught in Wisdom Schools 
              namely:
            <ul className="list-disc list-inside text-base sm:text-lg space-y-2 mb-6 pl-10 pt-5">
                <li>English</li>
                <li>Kiswahili</li>
                <li>Chinese (Mandarin)</li>
                <li>French</li>
              </ul>
            </p>
            <p className="text-base leading-relaxed mb-6">
              Through fun, challenging, and intellectually engaging competitions, the club fosters curiosity and linguistic confidence among learners from lower to upper grades. 
            </p>
            <p className="text-base leading-relaxed mb-6">
              The Spelling Bee program is not just about remembering letters it’s about developing focus, courage, and clarity in communication. Learners are trained to think quickly, speak accurately, and appreciate the beauty and power of words. 
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              A Record of Global Achievement
            </h3>
            <p className="text-base leading-relaxed mb-6">
              The Wisdom School Spelling Bee Club has built a strong record of excellence both locally and internationally.
            </p>
            <p className="text-base leading-relaxed mb-6">
             In 2021, our school proudly participated in the International Spelling Competition held in Dubai, a prestigious event that brought together over 10 schools from around the world. 
             It was a moment of great pride for Wisdom School when our learners displayed outstanding mastery and won all the trophies from the junior to the senior categories.
            </p>
            <p className="text-base leading-relaxed mb-6">
              This victory was not only a triumph for our students but also a reflection of Wisdom School’s commitment to nurturing confident communicators and globally competent learners. 
            </p>
            <p className="text-base leading-relaxed mb-6">
              This victory reflects our commitment to nurturing confident communicators and globally competent learners 
              values that continue to define the DNA of Wisdom Schools Rwanda.
            </p>
            <p className="text-base leading-relaxed mb-6">
              The competition strengthened the spirit of teamwork, discipline, and determination among our pupils  values that continue to define the DNA of Wisdom Schools Rwanda. 
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-3">
              How the Club Works
            </h3>
            <p className="text-base leading-relaxed mb-2">
              The Spelling Bee Club operates throughout the academic year, organizing: 
            </p>
            <ul className="list-disc list-inside text-base space-y-2 mb-6 pl-10">
              <li>Weekly spelling challenges and practice sessions</li>
              <li>Inter-class and inter-branch spelling contests</li>
              <li>Public speaking and reading enrichment workshops</li>
              <li>Language appreciation sessions with native speakers</li>
            </ul>

            <p className="text-base leading-relaxed mb-6">
              Learners from Nursery to High School are encouraged to participate, ensuring that language learning remains both fun and competitive. 
            </p>
            <blockquote className="border-l-4 border-blue-700 pl-4 italic text-blue-700 text-lg">
              “Words are the wings of thought — and we teach our learners to soar.”
              <br />
              <span className="font-semibold">— Wisdom School Spelling Bee Club</span>
            </blockquote>
          </div>

          {/* Image Slider */}
          <div className="w-full md:w-1/3 relative aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
            {spellingImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Spelling Club ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === spellingIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {spellingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSpellingIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === spellingIndex ? "bg-yellow-600 scale-110" : "bg-gray-300"
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
