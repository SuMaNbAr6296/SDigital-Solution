import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './components/Home';
import EmailPage from './components/EmailPage';
import Footer from './components/Footer';
import BackgroundBubbles from './components/BackgroundBubbles';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home on page reload
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
      navigate("/");
      window.scrollTo(0, 0);
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Auto-open modal after 25 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 25000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [navigate]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen text-gray-900 selection:bg-pink-200 selection:text-pink-900 cursor-default font-body relative overflow-x-hidden">
      <BackgroundBubbles />
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="fixed top-0 left-0 w-full z-50">
        <TopBar />
        <Navbar onOpenModal={openModal} />
      </div>

      <Routes>
        <Route path="/" element={<Home onOpenModal={openModal} />} />
        <Route path="/email" element={<EmailPage />} />
      </Routes>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
