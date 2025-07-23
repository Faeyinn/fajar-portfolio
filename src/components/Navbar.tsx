export default function Navbar() {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-2 sm:top-4 left-2 right-2 sm:left-4 sm:right-4 z-50"
    >
      <nav className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 min-h-[56px] sm:min-h-[64px] text-gray-800">
        
        {/* Kiri: Logo */}
        <div className="flex-1 truncate">
          <a
            href="#hero"
            className="text-base sm:text-lg lg:text-xl font-bold hover:cursor-pointer"
          >
            Fajar | Portfolio
          </a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-3 lg:space-x-5">
          <a href="#hero" className="btn btn-ghost btn-sm lg:btn-md">Home</a>
          <a href="#about" className="btn btn-ghost btn-sm lg:btn-md">About</a>
          <a href="#projects" className="btn btn-ghost btn-sm lg:btn-md">Projects</a>
          <a href="#contact" className="btn btn-ghost btn-sm lg:btn-md">Contact</a>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow-xl bg-white/20 backdrop-blur-md rounded-box w-44 border border-white/30 z-[1]"
          >
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
