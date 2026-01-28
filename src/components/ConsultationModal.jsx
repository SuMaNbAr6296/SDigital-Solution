import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const ConsultationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        service: '',
        country: '',
        requirement: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `New Consultation Request from ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website}
Service: ${formData.service}
Country: ${formData.country}

Requirement:
${formData.requirement}
        `;

        // Construct Gmail Compose URL
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=barsuman96@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open in a new tab - this works reliably as a "redirect" to the mail page
        window.open(gmailLink, '_blank');

        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Gradient Border Top */}
                        <div className="h-1.5 w-full bg-linear-to-r from-primary via-secondary to-accent" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-primary transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold font-display text-gray-900 mb-2">
                                    Book A <span className="text-gradient">Free Consultation</span>
                                </h2>
                                <p className="text-gray-600">
                                    Let's discuss how we can help your business grow.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Name*</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Email*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Phone No*</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 62967 74399"
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Website */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Existing Website</label>
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            placeholder="https://example.com"
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Service Selection */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Select Service*</label>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-purple-100 outline-none transition-all appearance-none bg-white"
                                            >
                                                <option value="">Select Service</option>
                                                <option value="web-dev">Web Development</option>
                                                <option value="app-dev">App Development</option>
                                                <option value="seo">SEO Optimization</option>
                                                <option value="digital-marketing">Digital Marketing</option>
                                                <option value="branding">Branding & Design</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Country Selection */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Country*</label>
                                        <div className="relative">
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-purple-100 outline-none transition-all appearance-none bg-white"
                                            >
                                                <option value="">Select Country</option>
                                                <option value="IN">India</option>
                                                <option value="US">United States</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="CA">Canada</option>
                                                <option value="AU">Australia</option>
                                                <option value="AE">UAE</option>
                                                <option value="OTHER">Other</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Requirement */}
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Share Your Requirement*</label>
                                    <textarea
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        required
                                        rows="3"
                                        placeholder="Tell us about your project..."
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-purple-100 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-3.5 rounded-lg bg-linear-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 group"
                                >
                                    <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    Submit Request
                                </motion.button>
                            </form>
                        </div>

                        {/* Bottom Gradient Line */}
                        <div className="h-1 w-full bg-linear-to-r from-accent via-secondary to-primary opacity-50" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ConsultationModal;
