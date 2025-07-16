import pic from '../assets/pic.jpeg';

export default function About() {
    return (
        <div id="about" className="hero bg-base-100 min-h-screen relative py-16 sm:py-20">
            <div className="container hero-content flex-col lg:flex-row-reverse px-4 sm:px-6">
                <img
                    src={pic}
                    data-aos="fade-left"
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-2xl mb-8 lg:mb-0"
                    alt="Fajar Profile"
                />
                <div className="max-w-xl lg:max-w-2xl text-center lg:text-left">
                    <h1 data-aos="fade-right" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        About Me
                    </h1>
                    <p data-aos="fade-right" className="py-4 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                        I'm <span className="text-primary font-semibold">Fajar</span>, a frontend developer who loves building beautiful, responsive, and accessible user interfaces using modern web technologies like React.js, Tailwind CSS, and more.
                    </p>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}