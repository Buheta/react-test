import React from "react";
import spo1  from "../assets/images/spo1.jpg";
import spo2  from "../assets/images/spo2.jpg";
import bask  from "../assets/images/bask.jpg";
import tenis  from "../assets/images/tenis.jpeg";
import swim  from "../assets/images/swi.jpeg";
import crick  from "../assets/images/crick.jpeg";


const sports = [
  {
    id: 1,
    name: "Football",
    // description: "Team sport played on a rectangular field with a goal at each end.",
    image: spo1,
  },
  {
    id: 2,
    name: "Basketball",
    // description: "Fast-paced indoor game played with a ball and hoop.",
    image: bask,
  },
  {
    id: 3,
    name: "Tennis",
    // description: "Racket sport that can be played individually or in doubles.",
    image: tenis,
  },
  {
    id: 4,
    name: "Swimming",
    // description: "Competitive and recreational sport done in water.",
    image: swim,
  },
  {
    id: 5,
    name: "Cricket",
    // description: "Popular bat-and-ball game played between two teams.",
    image: crick,
  },
  {
    id: 6,
    name: "Volleyball",
    // description: "Team sport played with a ball over a high net.",
    image: spo2,
  },
];

const SportsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Explore <span className="text-blue-600">Sports</span>
        </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {sport.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{sport.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:shadow-lg transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
