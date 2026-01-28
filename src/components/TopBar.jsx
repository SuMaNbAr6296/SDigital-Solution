import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const TopBar = () => {
    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-white py-2 px-4 shadow-sm relative z-50"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-sm font-medium">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="tel:+916296774399"
                        className="flex items-center gap-2 hover:text-pink-200 transition-colors"
                    >
                        <Phone size={14} className="animate-pulse" />
                        <span>+91 62967 74399</span>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=barsuman96@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-pink-200 transition-colors"
                    >
                        <Mail size={14} />
                        <span>barsuman96@gmail.com</span>
                    </motion.a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <span className="opacity-80">Follow Us:</span>
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/suman.bar.9843" className="hover:scale-110 transition-transform"><Facebook size={16} /></a>
                        <a href="#" className="hover:scale-110 transition-transform"><Instagram size={16} /></a>
                        <a href="https://www.linkedin.com/in/suman-bar-6296sb721232/" className="hover:scale-110 transition-transform"><Linkedin size={16} /></a>
                        <a href="#" className="hover:scale-110 transition-transform"><Twitter size={16} /></a>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default TopBar;
