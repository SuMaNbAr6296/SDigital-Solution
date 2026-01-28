import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSendMessage = () => {
        const { name, email, subject, message } = formData;

        // Form validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }

        const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
        const phoneNumber = "+916296774399";

        // Basic detection for mobile devices to decide between sms: and potentially other handlers if needed, 
        // but sms: is standard.
        window.location.href = `sms:${phoneNumber}?body=${text}`;
    };

    return (
        <section className="py-12 md:py-24 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
                            Let's Create Something <span className="text-gradient">Amazing</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-12">
                            Ready to take your digital presence to the next level? Get in touch with us today for a free consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email Us</h4>
                                    <p className="text-gray-600">barsuman96@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Call Us</h4>
                                    <p className="text-gray-600">+91 62967 74399</p>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Kolkata+Airport+3no.+Gate,+Dum+Dum,+Kolkata+-+700081"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-200 transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Visit Us</h4>
                                    <p className="text-gray-600"> Airport 3no. Gate, Dum Dum, Kolkata - 700081</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-purple-900/5">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={handleSendMessage}
                                className="w-full py-4 bg-linear-to-r from-primary to-secondary rounded-lg font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
