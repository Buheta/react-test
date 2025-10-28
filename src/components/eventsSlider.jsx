// Events.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import event1 from '../assets/images/activeL.jpg';
import event2 from '../assets/images/activeL.jpg';
import event3 from '../assets/images/grad.jpg';
import Navbar from './Navbar';
import FooterDetails from './footerDetails';
import HomeForPages from './homeForPages';

const eventsData = [
    {
        title: "Annual Science Fair",
        date: "October 25, 2025",
        description: "Join us for a showcase of innovative student science projects, robotics demos, and interactive experiments. Open to students, parents, and the community.",
        image: event1,
    },
    {
        title: "Cultural Day Celebration",
        date: "November 10, 2025",
        description: "Experience the rich diversity of our students through traditional dances, foods, and fashion from various cultures.",
        image: event2,
    },
    {
        title: "Graduation Ceremony",
        date: "December 15, 2025",
        description: "A proud moment to celebrate the achievements of our graduating class. Families and friends are welcome.",
        image: event3,
    },
];

const EventsSlider = () => {
    return (
        <>
            {/* <Navbar />
            <HomeForPages title="Our Events" /> */}

            <div className="bg-gray-100 py-12 px-6 md:px-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Upcoming Events</h2>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {eventsData.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                                    {event.image && (
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-64 object-cover"
                                        />
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* <FooterDetails />
            <Footer /> */}
        </>
    );
};

export default EventsSlider;
