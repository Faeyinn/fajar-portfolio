import pic from '../assets/pic.jpeg';

export default function About() {
    return (
        <div id="about" className="hero bg-base-100 min-h-screen relative">
            <div className="container hero-content flex-col lg:flex-row-reverse">
                <img
                    src={pic}
                    data-aos="fade-left"
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="Fajar Profile"
                />
                <div className="max-w-xl">
                    <h1 data-aos="fade-right" className="text-4xl md:text-5xl font-bold">About Me</h1>
                    <p data-aos="fade-right" className="py-4 text-base md:text-lg text-gray-600">
                        I'm <span className="text-primary font-semibold">Fajar</span>, a frontend developer who loves building beautiful, responsive, and accessible user interfaces using modern web technologies like React.js, Tailwind CSS, and more.
                    </p>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col sm:flex-row gap-4">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
