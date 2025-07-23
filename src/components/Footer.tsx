import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-base-300 text-base-content">
            <div className="footer p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-primary">Rahmat Fajar Saputra</h4>
                    <p className="text-sm text-gray-500">Web Developer & UI Enthusiast</p>
                    <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved</p>
                </div>

                <div className="flex gap-5 text-2xl">
                    <a href="https://github.com/Faeyinn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/rahmat-fajar-saputra-90690a287/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/jaaeyia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/62895600077007" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </footer>
    );
}
