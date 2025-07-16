import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div
            id="hero"
            className="w-full min-h-screen bg-base-200 text-primary relative flex items-center justify-center pt-20 sm:pt-24 px-4"
        >
            <div className="w-full max-w-screen-md text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Hi! I'm Fajar
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-center leading-relaxed text-primary-content">
                    A creative frontend developer who crafts responsive, clean, and delightful user interfaces for the modern web.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center items-center">
                    <a
                        href="#about"
                        data-aos="fade-right"
                        className="px-6 py-3 rounded-lg border border-primary text-primary bg-white hover:bg-primary hover:text-white shadow-md transition duration-300 min-w-[130px] text-center"
                    >
                        About Me
                    </a>
                    <a
                        href="#projects"
                        data-aos="fade-left"
                        className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-focus shadow-md transition duration-300 min-w-[130px] text-center"
                    >
                        See My Work
                    </a>
                </div>
            </div>

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
