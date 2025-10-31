// ContactUs.jsx
import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            {/* <HomeForPages title="Contact Us" /> */}
            <div className=" bg-gray-300 flex items-center justify-center p-8">
                <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-8 flex flex-col md:flex-row gap-8">
                    {/* Left side: Contact Form */}
                    <div className="w-full md:w-1/2">
                        {/* <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2> */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right side: Contact Details */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">CONTACT DETAILS</h3>
                        {/* <p className="text-gray-700 mb-4">:</p> */}
                        <ul className="text-gray-700 space-y-4">
                            <li>
                                <strong>Address:</strong><br />
                                Musanze, Rwanda
                            </li>
                            <li>
                                <strong>Phone:</strong><br />
                                <p className="mb-1">Phone: <a href="tel:+250788478469" className="hover:underline">+250-788-478469,<br></br>+250-788-76880, +250-782-406217</a></p>
                            </li>
                            <li>
                                <strong>Email:</strong><br />
                                <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@wisdomschoolrwanda.com</a>
                            </li>
                            <li>
                                <strong>Our schedule:</strong><br />
                                Mon - Fri: 9am - 6pm
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
