import React from "react";

export default function Application() {
    return (
        <section className="bg-white-900 py-16 px-6 md:px-12 max-w-4xl mx-auto text-center">
            {/* Header */}
            <h2 className="text3xl md:text-3xl font-bold text-gray-500 mb-4">
                Accepting Applications for the 2025–26 School Year
            </h2>

            {/* Call-to-action Button */}
            <a
                href="#apply-now"
                className="inline-block px-10 py-3 text-white text-sm font-semibold bg-blue-600 hover:bg-white hover:text-gray-400 border border-blue-400 transition"
            >
                Apply Now
            </a>

            {/* Paragraph */}
            <p className="text-gray-700 text-lg leading-relaxed pt-10">
                Our school is known for its warm hospitality and welcoming environment, where every student feels
                safe, respected, and valued. We believe that learning happens best in a friendly atmosphere, so we treat
                every visitor and member of our school community with kindness and care.
            </p>
        </section>
    );
}
