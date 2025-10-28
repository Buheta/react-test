import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  BuildingLibraryIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import Footer from './Footer';

const academicSections = [
  {
    name: "Programs",
    icon: BookOpenIcon,
    description:
      "Explore our diverse undergraduate and graduate programs designed to prepare students for real-world challenges.",
    link: "/academics/programs",
  },
  {
    name: "Faculties",
    icon: BuildingLibraryIcon,
    description:
      "Meet our expert faculty members who are leaders in teaching, research, and innovation across disciplines.",
    link: "#",
  },
  {
    name: "Research",
    icon: BeakerIcon,
    description:
      "Discover groundbreaking research initiatives that drive innovation and solve global problems.",
    link: "#",
  },
];

const AcademicsPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics at Our School</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We are committed to academic excellence through innovative programs, passionate faculty, and real-world learning.
        </p>
      </div>

      {/* Academic Sections */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Explore Academic Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {academicSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1 w-full max-w-sm"
            >
              <section.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{section.name}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <Link
                to={section.link}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Overview Section */}
      <div className="bg-gray-100  pt-[20px] pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Curriculum Overview</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            Our curriculum is designed to foster intellectual growth, creativity, and practical skills. Each level builds a strong foundation for the next, ensuring students are well-prepared for their academic and professional journeys.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Early Childhood",
                description: "Focuses on foundational skills, play-based learning, and social development for young learners.",
              },
              {
                title: "Primary School",
                description: "Covers core subjects including math, science, literacy, and social studies with engaging activities.",
              },
              {
                title: "Secondary School",
                description: "Introduces specialized subjects and critical thinking to prepare students for exams and future study.",
              },
              {
                title: "High School",
                description: "Advanced curriculum including elective options, career guidance, and preparation for university.",
              },
              {
                title: "Extracurricular Learning",
                description: "Includes clubs, community service, and enrichment programs for holistic development.",
              },
              {
                title: "Assessment & Support",
                description: "Continuous assessment with individualized academic support to help every student succeed.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AcademicsPage;
