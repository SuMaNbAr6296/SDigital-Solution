/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Offset by TopBar height (roughly 40px)
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="shrink-0 flex items-center gap-2 cursor-pointer no-underline group">
            <div className="p-2 bg-linear-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-primary/30 transition-all">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-gray-900 group-hover:text-primary transition-colors">
              SDigital<span className="text-primary">Solutions</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-6 py-2.5 rounded-full bg-linear-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full p-6 flex flex-col gap-4 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-primary py-2 border-b border-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenModal();
            }}
            className="w-full mt-2 px-5 py-3 rounded-lg bg-linear-to-r from-primary to-secondary text-white font-semibold text-center shadow-lg"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

