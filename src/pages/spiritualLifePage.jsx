import React from "react";

const spiritualPractices = [
  {
    id: 1,
    title: "Meditation",
    description: "Calm your mind and connect with your inner self through guided meditation.",
    image: "https://source.unsplash.com/600x400/?meditation,peace",
  },
  {
    id: 2,
    title: "Prayer",
    description: "Speak to your higher power and nurture your spiritual connection.",
    image: "https://source.unsplash.com/600x400/?prayer,spiritual",
  },
  {
    id: 3,
    title: "Gratitude",
    description: "Practice appreciation for the people and things in your life.",
    image: "https://source.unsplash.com/600x400/?gratitude,nature",
  },
  {
    id: 4,
    title: "Journaling",
    description: "Reflect on your thoughts, feelings, and spiritual growth.",
    image: "https://source.unsplash.com/600x400/?journal,writing",
  },
  {
    id: 5,
    title: "Silence & Stillness",
    description: "Disconnect from distractions and embrace the power of stillness.",
    image: "https://source.unsplash.com/600x400/?silence,forest",
  },
];

const SpiritualPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-purple-100 py-12 px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Nurture Your <span className="text-purple-600">Spirit</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover practices and inspirations that bring you closer to inner peace, purpose, and mindfulness.
        </p>
      </div>

      {/* Inspirational Quote */}
      <div className="max-w-3xl mx-auto mb-12 bg-white rounded-xl shadow p-6">
        <p className="italic text-lg text-gray-700">
          “The soul always knows what to do to heal itself. The challenge is to silence the mind.”
        </p>
        <p className="mt-2 text-right text-sm text-gray-500">– Caroline Myss</p>
      </div>

      {/* Practice Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {spiritualPractices.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualPage;
