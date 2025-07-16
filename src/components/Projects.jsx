import porto from '../assets/porto.png';
import capsneo from '../assets/capsneo.png';
import renyhijab from '../assets/renyhijab.png';

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'A sleek and modern developer portfolio built with React and Tailwind CSS, featuring smooth scroll animations, responsive design, and clean UI. Showcases projects, contact info, and frontend skill highlights using AOS and DaisyUI components.',
    image: porto,
    tech: ['React', 'Tailwind', 'DaisyUI', 'AOS'],
    demo: 'https://fajar-portfolio.netlify.app/',
  },
  {
    title: 'Simple Scholarship Website',
    description:
      'A scholarship listing website that helps students discover and apply for opportunities. Built with React and Tailwind CSS, it includes role-based navigation (user/admin), bookmark feature, and a clean responsive UI for easy access on any device.',
    image: capsneo,
    tech: ['React', 'Tailwind', 'DaisyUI'],
    demo: 'https://capstone-neo-fajar.netlify.app/',
  },
  {
    title: 'Reny Hijab Transaction Management',
    description:
      'An efficient transaction and inventory management system developed using native PHP, tailored for a hijab retail store. Features include admin login, CRUD for products, order tracking, and daily transaction history – all optimized without any framework.',
    image: renyhijab,
    tech: ['PHP native'],
    demo: '/renyhijab',
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}