// AboutUs.jsx
import { useState } from "react";
import { FaBook, FaHeart, FaStar, FaLightbulb, FaBullseye, FaHandsHelping, FaCompass,FaSchool,FaUserGraduate} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "./footer";
import FooterDetails from "./footerDetails";
import pris from "../assets/images/pri.jpg";
import wisdom from "../assets/images/wisdom.jpg";


const sections = [
  {
    title: "Wisdom Story",
    icon: <FaBook />,
    content: (
      <>
        <h2 className="text-2xl font-semibold text-blue-700 underline mb-6">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wisdom Schools Rwanda is a family-centered education community dedicated to nurturing learners who grow in knowledge, character, and faith. We believe education is a shared journey between the school, parents, and community, united in shaping responsible and compassionate citizens prepared for the challenges of the modern world.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Founded in 2008 with just five students, Wisdom Schools Rwanda began as a humble seed of faith and vision to transform lives through Kingdom of God–centered education. Through God’s blessings and the continued trust of our community, that small beginning has grown into a chain of thriving schools across the nation, each committed to excellence in academics, character formation, and innovation. Today, as of 2025, Wisdom Schools stands as a testimony of God’s grace and dedication to quality education—a network producing top achievers and responsible citizens.
        </p>
        <h3 className="text-2xl font-semibold text-blue-600 underline mb-3">
          A Legacy of Excellence
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Since our humble beginnings, Wisdom Schools Rwanda has consistently produced the best of the best—students who excel academically and embody strong moral and spiritual values. Over the years, our learners have achieved outstanding results at both national and regional levels, positioning Wisdom Schools among Rwanda’s top-performing institutions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
        In 2019, our student HUMURA ELVIN made us proud by becoming the first in the country, a milestone that inspired our continued pursuit of excellence. Once again, in 2024–2025, we celebrate ARAKAZA LEO VICTOR from Wisdom School Musanze, who became the first in Rwanda with an impressive average score of 99.4% in the Primary Leaving Examination (PLE). These achievements are not just academic triumphs  they are a testimony to our school’s commitment to quality education, disciplined learning, and God-centered success.
        </p>
      </>
    ),
  },
  {
    title: "Principal's Message",
    icon: <FaUserGraduate />,
    content: (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="text-3xl font-bold text-blue-700 underline mb-6 text-center">
          Message from the Principal
        </h2>
  
        {/* Principal Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={pris}
            alt="Principal NDUWAYESU Aime"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-md"
          />
        </div>
  
        {/* Message Content */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>May God bless you Visitors,</p>
  
          <p>
            Welcome to <span className="font-semibold">Wisdom Schools Rwanda</span>, where education goes beyond classrooms — it is a journey of discovery, discipline, and purpose.
          </p>
  
          <p>
            As Principal, I am honored to lead a community that believes in heroism, commitment, and accountability as the foundation of learning. At Wisdom Schools, every child matters. We motivate the weak, support the average, and challenge the gifted — ensuring that each learner reaches their full potential.
          </p>
  
          <p>
            Our hybrid curriculum blends Rwanda’s national framework with international best practices, preparing our students to succeed both locally and globally. From Musanze, our head office, to all our branches across Rwanda, we remain dedicated to providing a holistic education rooted in Christian values and academic excellence.
          </p>
  
          <p>
            Our legacy is seen in generations of learners who have excelled — including top national performers such as <span className="font-semibold">Humura Elvin (2019)</span> and <span className="font-semibold">Arakaza Leo Victor (2024–2025)</span>. These achievements reflect not only hard work but also the spirit of faith that defines our schools.
          </p>
  
          <p>
            As we look to the future, our mission remains clear — to raise God-fearing, innovative, and responsible citizens who will impact the world with wisdom and integrity.
          </p>
  
          <p>
            Thank you for visiting our website and for being part of the <span className="font-semibold">Wisdom Schools Rwanda</span> family.
          </p>
  
          <p className="font-medium italic text-center text-blue-700">
            May God bless you.
          </p>
  
          {/* Signature */}
          <div className="text-center mt-6">
            <p className="font-semibold text-lg text-gray-800">NDUWAYESU Aime</p>
            <p className="text-sm text-gray-600">Principal, Wisdom Schools Rwanda</p>
          </div>
        </div>
      </div>
    ),
  },
  
  {
    title: "Our Philosophy",
    icon: <FaLightbulb />,
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Philosophy</h2>
        {/* <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
          “We believe every learner has potential that deserves to be nurtured. Our teaching philosophy is simple yet powerful:”
        </blockquote> */}
        <p className="text-gray-700 leading-relaxed mb-4">
        We believe every learner has potential that deserves to be nurtured. Our teaching philosophy is simple yet powerful:
        </p>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>To motivate the weak,</li>
          <li>To support the average,</li>
          <li>To challenge the gifted.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4 pt-5">
        Through this approach, we achieve the harmonious development of the physical, mental, and spiritual powers of every learner — shaping strong individuals ready to impact their world positively.
        </p>
      </>
    ),
  },
  {
    title: "Vision,Mission",
    icon: <FaCompass />,
    content: (
        <>
          <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Vision </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
          To become a leading, trusted, and innovative school within the East African Community (EAC)  a beacon of academic and moral excellence inspiring learners to think critically, act responsibly, and lead courageously. 
          </p>
          <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
          Wisdom Schools Rwanda provides a sustainable and holistic education aimed at producing balanced, God-fearing individuals who can thrive academically, socially, and spiritually. We prepare learners to be innovative, disciplined, and globally competent, while remaining rooted in values that honor God and community. 
          </p>
        </>
      ),
    },
  {
    title: "Motto,Educational Approach ",
    icon: <FaHeart />,
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Motto</h2>
        <p className="text-gray-700 text-lg italic font-medium text-blue-800">
          “Fearing God is Knowledge.”
        </p>
        {/* <p className="text-gray-700 leading-relaxed mt-4">
          Our motto reflects our conviction that true education goes beyond academics—it shapes values, inspires integrity, and prepares learners for a purposeful life of service.
        </p> */}
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4 pt-5">Our Educational Approach</h2>
        <p className="text-gray-700 leading-relaxed mt-4">
        At Wisdom Schools Rwanda, we offer a hybrid curriculum  combining the strengths of the Rwandan national curriculum with international best practices to provide a learning experience that is both globally competitive and locally relevant. Our program is rich enough to support students’ holistic growth  intellectually, socially, physically, and spiritually preparing them to succeed in any environment while remaining grounded in their identity and faith.
        </p>
      </>
    ),
  },
  {
    title: "Core Values",
    icon: <FaStar />,
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Core Values </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
        We are guided by values that shape both learning and leadership:
        </p>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li><strong>Heroism: </strong>Courage to lead with truth and excellence.</li>
          <li><strong>Commitment: </strong>Dedication to growth, responsibility, and service.</li>
          <li><strong>Accountability: </strong>Integrity in character, actions, and results. </li>
        </ul>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4 pt-5">Our Slogan   </h2>
        <p className="text-gray-700 text-lg italic font-medium text-blue-800">
          “Our Children, Our Future..”
        </p>
      </>
    ),
  },
  {
    title: "Educational Approach",
    icon: <FaHandsHelping />,
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Educational Approach </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
        At Wisdom Schools Rwanda, we offer a hybrid curriculum  combining the strengths of the Rwandan national curriculum with international best practices to provide a learning experience that is both globally competitive and locally relevant. Our program is rich enough to support students’ holistic growth  intellectually, socially, physically, and spiritually preparing them to succeed in any environment while remaining grounded in their identity and faith. 
        </p>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Impact  </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
        With a strong presence across multiple districts, Wisdom Schools Rwanda continues to make a lasting impact in academic performance, moral development, and community transformation. Our learners consistently demonstrate leadership, creativity, and compassion, proving that when family and school work together under the Kingdom of God, the results are truly life-changing.  
        </p>
      </>
    ),
  },
  {
    title: "Our Goals",
    icon: <FaBullseye />,
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4">Our Goals</h2>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Discipline – The backbone of character and success.</li>
          <li>Time Keeping – Valuing time as a tool of excellence.</li>
          <li>Practice – Learning by doing, growing by consistency.</li>
          <li>Innovation – Every month, a new idea and discovery.</li>
          <li>Participative Spirit – Teamwork and collaboration.</li>
          <li>Competitive Spirit – Striving for progress through healthy competition.</li>
        </ul>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-4 pt-5">Our Final Objective  </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
        To build strong children for a strong Rwanda with individuals who are educated, disciplined, creative, and guided by faith.   
        </p>
      </>
    ),
  },
  {
    title: "Branches",
    icon: <FaSchool />,
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 underline mb-6">Our Branches</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our schools are spread across Rwanda, bringing quality education closer to families in every region. 
          We proudly serve the nation through the following campuses:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Musanze (Head Office)",
            "Rubavu",
            "Nyabihu",
            "Muyumbu",
            "Fumbwe",
            "Kabarore",
            "Kiramuruzi",
            "Nyamasheke",
            "Susa",
            "Burera",
            "Kayonza",
            "Runda",
            "Kanzenze",
            "Ngororero",
            "Rubengera"
          ].map((branch, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaSchool className="text-blue-600 text-3xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800 text-center">{branch}</h3>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navbar />

      {/* 🌄 Hero Section */}
      <section
        className="relative w-full h-[45vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:'`url(${aboutImage})`',
        }}
      >
        <div className="relative h-[50vh] w-full flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <img
          src={wisdom}
          alt="Wisdom Schools Rwanda"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
            About Wisdom Schools Rwanda
          </h1>
          {/* <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto animate-fadeIn delay-200">
            “Educating for Wisdom, Character, and Faith”
          </p> */}
        </div>
      </div>

      </section>

      {/* 🏫 Main Content */}
      <div className="bg-gray-100 px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left Navigation */}
          <div className="space-y-3">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 
                  ${activeIndex === index
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-800 hover:bg-blue-50 border border-gray-200'}
                `}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="text-lg font-medium">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8 animate-fadeIn">
            {sections[activeIndex].content}
          </div>
        </div>
      </div>

      <FooterDetails />
      <Footer />
    </>
  );
};

export default AboutUs;

