import React from "react";
import photo from '../assets/images/photo.jpg';
import robotics from '../assets/images/robotics.avif';
import music from '../assets/images/music.jpeg';

const clubs = [
  {
    id: 1,
    name: "Photography Club",
    description: "Capture moments and tell stories through the lens.",
    image: photo,
  },
  {
    id: 2,
    name: "Robotics Club",
    description: "Build, code, and compete with innovative robots.",
    image: robotics,
  },
  // {
  //   id: 3,
  //   name: "Drama Club",
  //   description: "Express yourself through acting, theater, and performance.",
  //   image: "https://source.unsplash.com/600x400/?drama,theater",
  // },
  // {
  //   id: 4,
  //   name: "Chess Club",
  //   description: "Challenge your mind with strategy and logic.",
  //   image: "https://source.unsplash.com/600x400/?chess,game",
  // },
  {
    id: 5,
    name: "Music Club",
    description: "Collaborate, perform, and grow your musical talent.",
    image: music,
  },
  // {
  //   id: 6,
  //   name: "Music Club",
  //   description: "Collaborate, perform, and grow your musical talent.",
  //   image: "https://source.unsplash.com/600x400/?music,concert",
  // },
];

const ClubsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-12">
          Explore Our <span className="text-blue-600">Explore Our Clubs</span>
        </h1> */}

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {club.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{club.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:shadow-lg transition">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubsPage;
