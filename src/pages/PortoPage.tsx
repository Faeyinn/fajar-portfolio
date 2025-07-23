import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function PortoPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    });

        return (
            <>
                <div data-aos="fade-up">
                    <Hero />
                </div>

                <div data-aos="fade-up">
                    <About />
                </div>

                <div data-aos="fade-up">
                    <Skills />
                </div>

                <div data-aos="fade-up">
                    <Projects />
                </div>

                <div data-aos="fade-up">
                    <Contact />
                </div>
            </>
        )
    }