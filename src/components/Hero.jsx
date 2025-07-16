import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-base-200 flex flex-col items-center justify-center relative px-4 overflow-x-hidden"
    >
      <div className="max-w-screen-md w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-4">
          Hi! I'm Fajar
        </h1>
        <p className="text-base sm:text-lg text-primary leading-relaxed max-w-2xl mx-auto mb-8">
          A creative frontend developer who crafts responsive, clean, and delightful user interfaces for the modern web.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 rounded-lg border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 shadow-md min-w-[130px] text-center"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-focus transition-all duration-300 shadow-md min-w-[130px] text-center"
          >
            See My Work
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-focus text-2xl animate-bounce p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <FaArrowDown />
      </button>
    </section>
  );
}
