import slide from "../assets/images/wisdom.jpg";

export default function HomeForPages({ title = "Page Title", image = slide }) {
    return (
        <div
            className="relative w-screen h-[50vh] bg-cover bg-center mt-16"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pt-70">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
                    {title}
                </h1>
            </div>
        </div>
    );
}

