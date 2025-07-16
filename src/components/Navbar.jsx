export default function Navbar() {
    return (
        <div data-aos="fade-down" className="fixed top-2 sm:top-4 left-2 right-2 sm:left-4 sm:right-4 z-50">
            <div className="navbar bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg px-2 sm:px-4 text-gray-800 w-full max-w-6xl mx-auto min-h-[60px]">

                {/* Kiri: Logo */}
                <div className="flex-1 min-w-0">
                    <a href="#hero" className="text-base sm:text-lg lg:text-xl font-bold hover:cursor-pointer truncate">
                        Fajar | Portfolio
                    </a>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-2 lg:space-x-4 flex-shrink-0">
                    <a href="#hero" className="btn btn-ghost btn-sm lg:btn-md">Home</a>
                    <a href="#about" className="btn btn-ghost btn-sm lg:btn-md">About</a>
                    <a href="#contact" className="btn btn-ghost btn-sm lg:btn-md">Contact</a>
                </div>

                {/* Menu Mobile (Dropdown) */}
                <div className="md:hidden dropdown dropdown-end flex-shrink-0">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white/20 backdrop-blur-md rounded-box w-48 border border-white/30">
                        <li><a href="#hero" className="text-sm">Home</a></li>
                        <li><a href="#about" className="text-sm">About</a></li>
                        <li><a href="#contact" className="text-sm">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}