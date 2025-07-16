import porto from '../assets/porto.png';
import comingsoon from '../assets/comingsoon.jpeg';

const projects = [
    {
        title: 'Personal Portfolio',
        description: 'A modern responsive portfolio built with React and Tailwind CSS.',
        image: porto,
        tech: ['React', 'Tailwind', 'DaisyUI'],
        demo: '#',
        code: '#'
    },
    {
        title: 'Todo App',
        description: 'Simple todo list app with local storage and clean UI.',
        image: comingsoon,
        tech: ['HTML', 'CSS', 'JavaScript'],
        demo: '#',
        code: '#'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="bg-base-100 py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-primary mb-12">My Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} data-aos="flip-left" className="bg-base-200 rounded-lg shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="badge badge-outline">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.demo} target="_blank" className="btn btn-sm btn-primary">Live Demo</a>
                                    <a href={project.code} target="_blank" className="btn btn-sm btn-outline">Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}