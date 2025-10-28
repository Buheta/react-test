import img1 from "../assets/images/galleryHome.jpg";
import img2 from "../assets/images/gallery13.jpg";
import img3 from "../assets/images/gallery25.jpg";
import img4 from "../assets/images/gallery31.jpg";

export default function InfoWithAlbum() {
    return (
        <div className="bg-white w-full">
            <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left - Description */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                        Explore Our <span className="text-blue-600">Campus</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Discover what makes our campus special. From state-of-the-art facilities to a vibrant student life,
                        we create an environment where students thrive both academically and socially.
                    </p>
                    <a
                        href="/gallery/photo"
                        className="inline-block px-5 py-2 text-white text-sm font-semibold bg-blue-600 hover:bg-white hover:text-gray-400 border border-blue-400 transition"
                    >
                        View Full Gallery
                    </a>
                </div>

                {/* Right - Video + Album */}
                <div className="flex flex-col gap-6">
                    {/* Video */}
                    <video
                        className="w-full aspect-video rounded-xl shadow-lg"
                        controls
                    >
                        <source src="video/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Image Album */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={img1}
                            alt="Campus 1"
                            className="w-full h-48 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                            loading="lazy"
                        />
                        <img
                            src={img2}
                            alt="Campus 2"
                            className="w-full h-40 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                            loading="lazy"
                        />
                        <img
                            src={img3}
                            alt="Campus 3"
                            className="w-full h-44 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                            loading="lazy"
                        />
                        <img
                            src={img4}
                            alt="Campus 4"
                            className="w-full h-48 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </div>

    );
}
