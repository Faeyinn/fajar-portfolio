import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div id="hero" className="hero min-h-screen bg-base-200 text-primary relative">
            <div className="text-center hero-content flex-col">
                <h1 className="text-5xl font-bold">Hi! I'm Fajar</h1>
                <p className="py-6 text-xl max-w-xl">
                    A creative frontend developer who crafts responsive, clean, and delightful user interfaces for the modern web.
                </p>

                <div className="flex gap-4 mb-16">
                    <a
                        href="#about"
                        data-aos="fade-right"
                        className="px-6 py-3 rounded-lg border border-primary text-primary bg-white hover:bg-primary hover:text-white shadow-md transition duration-300"
                    >
                        About Me
                    </a>
                    <a
                        href="#projects"
                        data-aos="fade-left"
                        className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-focus shadow-md transition duration-300"
                    >
                        See My Work
                    </a>
                </div>
            </div>

            {/* Ikon dropdown yang bisa dipencet */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary-focus text-3xl animate-bounce cursor-pointer z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                aria-label="Scroll down"
            >
                <FaArrowDown />
            </button>
        </div>
    );
}