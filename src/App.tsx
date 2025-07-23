import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowUp } from 'react-icons/fa';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortoPage from './pages/PortoPage'
import NotFound from './pages/NotFound'

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-base-100 text-base-content overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<PortoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-focus transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
