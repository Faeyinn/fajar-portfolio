export default function Navbar() {
    return (
        <div data-aos="fade-down" className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-50">
            <div className="navbar bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg px-4 text-gray-800">

                {/* Kiri: Logo */}
                <div className="flex-1">
                    <a href="#hero" className="text-xl font-bold hover:cursor-pointer">Fajar | Portfolio</a>
                </div>

                {/* Menu Desktop */}
                <div className="hidden lg:flex space-x-4">
                    <a href="#hero" className="btn btn-ghost">Home</a>
                    <a href="#about" className="btn btn-ghost">About</a>
                    <a href="#contact" className="btn btn-ghost">Contact</a>
                </div>

                {/* Menu Mobile (Dropdown) */}
                <div className="lg:hidden dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white/20 backdrop-blur-md rounded-box w-52 border border-white/30">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}