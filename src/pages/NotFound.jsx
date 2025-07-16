import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section
      className="min-h-screen w-full bg-base-200 flex flex-col items-center justify-center px-4 overflow-x-hidden text-center"
    >
      <div className="max-w-screen-md">
        <h1 className="text-6xl sm:text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl text-primary font-semibold mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-primary mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="px-6 py-3 rounded-lg border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 shadow-md min-w-[150px] inline-block"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
