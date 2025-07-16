import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" data-aos="zoom-in" className="bg-base-200 py-16">
            <div className="max-w-xl mx-auto text-center px-4">
                <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
                <p className="text-gray-600 mb-6">
                    I'd love to connect! Feel free to reach out via email or find me on social media.
                </p>

                <div className="flex flex-col items-center gap-4">
                    {/* Email */}
                    <a
                        href="mailto:fajar.saputra2907@gmail.com"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary transition"
                    >
                        <FaEnvelope className="text-xl" />
                        fajar.saputra2907@gmail.com
                    </a>

                    {/* Socials */}
                    <div className="flex gap-6 mt-4 text-2xl justify-center">
                        <a
                            href="https://github.com/Faeyinn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/rahmat-fajar-saputra-90690a287/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com/jaaeyia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://wa.me/62895600077007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
