import React from "react";
import newsImg from "../assets/images/donate.png";
import cleaning from "../assets/images/cleaning.jpg";
import robots from "../assets/images/robots.jpeg";
import innovation from "../assets/images/innovationHub.jpg";


export default function NewsFeature() {
    return (
        <section className="bg-gray-50 py-16">
            {/* Section Title */}
            <div className="text-center text-5xl font-bold text-gray-800 mb-16">
                In The News
            </div>

            {/* Responsive Container aligned with other sections */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start gap-0">
                    {/* Image */}
                    <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0 mb-6 md:mb-0">
                        <img
                            src={innovation}
                            alt="News highlight"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 flex flex-col md:pl-6">
                        <a
                            href="#news-article"
                            className="text-3xl font-bold text-gray-400 mb-2 block underline underline-offset-4 decoration-gray-400 transition"
                        >
                            School Launches Innovation Hub
                        </a>
                        <p className="text-gray-600 text-sm">February 7, 2025</p>
                        <p className="text-1xl text-gray-600 leading-snug">
                            Our institution proudly announces the opening of a new Innovation Hub that will serve as
                            a center for research, development, and student-led projects. The space is designed to foster
                            creativity and collaboration across disciplines.
                        </p>

                        {/* Line that starts where image ends */}
                        <div className="hidden md:block h-[2px] bg-gray-300 w-full mt-10 ml-1 " />
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 pt-15">
                <div className="flex flex-col md:flex-row items-start gap-0">
                    {/* Image */}
                    <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0 mb-6 md:mb-0">
                        <img
                            src={robots}
                            alt="News highlight"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 flex flex-col md:pl-6">
                        <a
                            href="#news-article"
                            className="text-3xl font-bold text-gray-400 mb-2 block underline underline-offset-4 decoration-gray-400 transition"
                        >
                            What Are Educational Robots?
                        </a>
                        <p className="text-gray-600 text-sm">February 7, 2025</p>
                        <p className="text-1xl text-gray-600 leading-snug">
                            Educational robots are specially designed machines that help students learn various subjects, including math, science, coding, and languages. They come in many forms—some are humanoid, others are simple kits students can build and program themselves.
                        </p>

                        {/* Line that starts where image ends */}
                        <div className="hidden md:block h-[2px] bg-gray-300 w-full mt-10 ml-1 " />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-15">
                <div className="flex flex-col md:flex-row items-start gap-0">
                    {/* Image */}
                    <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0 mb-6 md:mb-0">
                        <img
                            src={cleaning}
                            alt="News highlight"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 flex flex-col md:pl-6">
                        <a
                            href="#news-article"
                            className="text-2xl font-bold text-gray-400 mb-2 block underline underline-offset-4 decoration-gray-400 transition"
                        >
                            General cleaning means doing regular tasks to keep places like homes, schools, neat.
                        </a>
                        <p className="text-gray-600 text-sm">February 7, 2025</p>
                        <p className="text-1xl text-gray-600 leading-snug">
                            General cleaning involves routine cleaning tasks that remove dirt, dust, germs, and clutter. Unlike deep cleaning, which targets hidden grime, general cleaning focuses on surface-level upkeep
                            Cleanliness is essential not just for appearance, but for health, safety, and comfort. General cleaning refers to the regular cleaning tasks that keep homes, offices, schools, and other spaces neat, hygienic, and well-maintained. Whether it's dusting, sweeping, or disinfecting, general cleaning is a vital habit in both personal and public environments.
                        </p>

                        {/* Line that starts where image ends */}
                        <div className="hidden md:block h-[2px] bg-gray-300 w-full mt-5 ml-1 " />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-15">
                <div className="flex flex-col md:flex-row items-start gap-0">
                    {/* Image */}
                    <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0 mb-6 md:mb-0">
                        <img
                            src={newsImg}
                            alt="News highlight"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 flex flex-col md:pl-6">
                        <a
                            href="#news-article"
                            className="text-2xl font-bold text-gray-400 mb-2 block underline underline-offset-4 decoration-gray-400 transition"
                        >
                            Teaching kids why helping others matters and how they can be kind and helpful in daily life.
                        </a>
                        <p className="text-gray-600 text-sm">February 7, 2025</p>
                        <p className="text-1xl text-gray-600 leading-snug">
                            Helping others means doing kind and useful things to support people around us, whether it’s friends, family, or even strangers. When we help, we make their lives easier or happier, and we also feel good ourselves because kindness creates a positive connection. Learning to help others teaches us to be caring, responsible, and part of a community where everyone looks out for one another. Simple acts like sharing, listening, or offering a hand can make a big difference in someone’s day and help build a friendlier, stronger world.
                        </p>

                        {/* Line that starts where image ends */}
                        <div className="hidden md:block h-[2px] bg-gray-300 w-full mt-5 ml-1 " />
                    </div>
                </div>
            </div>
        </section>
    );
}
