export default function Hero() {
    return (
        <div id="hero" className="hero min-h-screen bg-base-200 text-primary">
            <div className="text-center hero-content flex-col">
                <h1 className="text-5xl font-bold">Hi! I'm Fajar</h1>
                <p className="py-6 text-xl max-w-xl">
                    A creative frontend developer who crafts responsive, clean, and delightful user interfaces for the modern web.
                </p>

                <div className="flex gap-4">
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
        </div>
    );
}
