import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div id="hero" className="min-h-screen flex items-center justify-center bg-base-200 text-primary relative pt-20 sm:pt-24">
            <div className="text-center flex-col px-4 sm:px-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Hi! I'm Fajar
                </h1>
                <p className="py-4 sm:py-6 text-lg sm:text-xl max-w-xl leading-relaxed">
                    A creative frontend developer who crafts responsive, clean, and delightful user interfaces for the modern web.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center items-center">
                    <a
                        href="#about"
                        data-aos="fade-right"
                        className="px-6 py-3 rounded-lg border border-primary text-primary bg-white hover:bg-primary hover:text-white shadow-md transition duration-300 text-center min-w-[120px]"
                    >
                        About Me
                    </a>
                    <a
                        href="#projects"
                        data-aos="fade-left"
                        className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-focus shadow-md transition duration-300 text-center min-w-[120px]"
                    >
                        See My Work
                    </a>
                </div>
            </div>

            {/* Ikon dropdown yang bisa dipencet */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-primary-focus text-2xl sm:text-3xl animate-bounce cursor-pointer z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                aria-label="Scroll down"
            >
                <FaArrowDown />
            </button>
        </div>
    );
}