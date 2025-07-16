import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiFramer,
    SiDaisyui,
    SiMysql
} from 'react-icons/si';
import { MdAnimation } from 'react-icons/md';

export default function Skills() {
    const skills = [
        { name: 'HTML', icon: <SiHtml5 className="text-black" /> },
        { name: 'CSS', icon: <SiCss3 className="text-black" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-black" /> },
        { name: 'React.js', icon: <SiReact className="text-black" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-black" /> },
        { name: 'AOS', icon: <MdAnimation className="text-black" /> },
        { name: 'Framer Motion', icon: <SiFramer className="text-black" /> },
        { name: 'DaisyUI', icon: <SiDaisyui className="text-black" /> },
        { name: 'MySQL', icon: <SiMysql className="text-black" /> },
    ];

    return (
        <section id="skills" className="bg-base-200 py-16">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-primary">My Skills</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-10 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} data-aos="zoom-out-up" className="flex flex-col items-center text-center w-24">
                        <div className="text-5xl mb-2 hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                        <span className="text-sm text-gray-700">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
