import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import coun from "../assets/images/highSchool.JPG";
import caree from "../assets/gallery/gallery4.JPG";
import tut from "../assets/gallery/gallery23.JPG";
import Footer from '../components/footer';


const programs = [
  {
    title: "STEM (Science, Technology, Engineering & Math)",
    description:
      "Explore physics, biology, computer science, and more to drive innovation and solve global challenges.",
  },
  {
    title: "Humanities & Social Sciences",
    description:
      "Understand culture, history, and human behavior through literature, philosophy, psychology, and more.",
  },
  {
    title: "Business & Economics",
    description:
      "Gain skills in entrepreneurship, finance, marketing, and management to lead in the business world.",
  },
  {
    title: "Arts & Design",
    description:
      "Develop creative expression through visual arts, design, media, and performance.",
  },
  {
    title: "Health Sciences",
    description:
      "Prepare for careers in healthcare, public health, and life sciences with hands-on training and research.",
  },
  {
    title: "Technical & Vocational Education",
    description:
      "Learn practical skills in trades, IT, mechanics, and other applied fields to enter the workforce directly.",
  },
];

const ProgramsOfferedPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs Offered</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover a diverse set of academic pathways that prepare students for meaningful careers and lifelong learning.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-700">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      {/* Academic Calendar */}
<div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-1">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Academic Calendar</h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-10">
      Stay informed about key academic dates, including semester start/end dates, holidays, and exam periods.
    </p>

    {/* Calendar Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 text-left">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 border">Term</th>
            <th className="px-4 py-3 border">Start Date</th>
            <th className="px-4 py-3 border">End Date</th>
            <th className="px-4 py-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {[
            {
              term: "Semester 1",
              start: "September 2, 2025",
              end: "December 13, 2025",
              notes: "Includes midterm break in October",
            },
            {
              term: "Semester 2",
              start: "January 6, 2026",
              end: "April 18, 2026",
              notes: "Final exams in early April",
            },
            {
              term: "Summer Term",
              start: "May 5, 2026",
              end: "July 15, 2026",
              notes: "Optional for catch-up and special courses",
            },
          ].map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-3 border">{row.term}</td>
              <td className="px-4 py-3 border">{row.start}</td>
              <td className="px-4 py-3 border">{row.end}</td>
              <td className="px-4 py-3 border">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Optional PDF Download */}
    <div className="mt-8">
      <a
        href="/files/calendar.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-sm font-medium transition"
      >
        Download Full Calendar (PDF)
      </a>
    </div>
  </div>
</div>
{/* Student Support */}
<div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Student Support</h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-10">
      We’re committed to supporting every student throughout their academic journey. Our support services empower learners to thrive both inside and outside the classroom.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {/* Card 1 */}
      <div className="bg-gray-50 rounded-lg shadow hover:shadow-md transition overflow-hidden">
        <img
          src={coun}
          alt="Counseling and Academic Advising"
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Counseling & Academic Advising</h3>
          <p className="text-gray-600">
            Professional counselors and advisors help students set academic goals, manage stress, and plan their education pathways.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 rounded-lg shadow hover:shadow-md transition overflow-hidden">
        <img
          src={tut}
          alt="Tutoring or Intervention"
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Tutoring & Intervention Programs</h3>
          <p className="text-gray-600">
            We offer peer tutoring, learning labs, and academic intervention programs to support students needing extra help.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 rounded-lg shadow hover:shadow-md transition overflow-hidden">
        <img
          src={caree}
          alt="College & Career Readiness"
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">College & Career Readiness</h3>
          <p className="text-gray-600">
            Resources such as career counseling, workshops, and application assistance prepare students for life after graduation.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Academic Policies */}
<div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Academic Policies</h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-10">
      Our academic policies ensure fairness, consistency, and a supportive learning environment. All students are expected to be familiar with and adhere to these standards.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {/* Policy 1 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Attendance Policy</h3>
        <p className="text-gray-600">
          Regular attendance is required in all classes. Excessive absences may affect grades and academic standing.
        </p>
      </div>

      {/* Policy 2 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Grading System</h3>
        <p className="text-gray-600">
          Grades are awarded based on coursework, participation, exams, and projects, according to clearly defined criteria.
        </p>
      </div>

      {/* Policy 3 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Code of Conduct</h3>
        <p className="text-gray-600">
          Students are expected to behave respectfully and uphold the values of the institution both in and outside the classroom.
        </p>
      </div>

      {/* Policy 4 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Academic Integrity</h3>
        <p className="text-gray-600">
          Plagiarism, cheating, and any form of dishonesty are strictly prohibited and subject to disciplinary action.
        </p>
      </div>

      {/* Policy 5 */}
      <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Assessment & Exam Regulations</h3>
        <p className="text-gray-600">
          Students must follow all guidelines during assessments and final exams, including punctuality and use of authorized materials only.
        </p>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </>
  );
};

export default ProgramsOfferedPage;
