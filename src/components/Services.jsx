import React from 'react';
import { BarChart, Globe, Palette, Megaphone, Search, Smartphone, Award, Layout, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Import assets
import SeoImg from '../assets/SEO.jpg';
import SocialImg from '../assets/Social Media Marketing.jpg';
import ContentImg from '../assets/Contant Marketing.jpg';
import GoogleAdsImg from '../assets/GoogleAds.jpg';
import WebDesignImg from '../assets/WebDesign.jpg';
import ReputationImg from '../assets/OnlineReputation.jpg';
// Note: WebDevelopment.ai is not supported on the web. Using icon for now.

const services = [
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        image: SeoImg,
        title: 'SEO Services',
        description: 'Rank higher on Google with our data-driven SEO strategies.'
    },
    {
        icon: <Megaphone className="w-8 h-8 text-pink-500" />,
        image: SocialImg,
        title: 'Social Media Marketing',
        description: 'Engage your audience across Facebook, Instagram, and LinkedIn.'
    },
    {
        icon: <Layout className="w-8 h-8 text-blue-500" />,
        image: ContentImg,
        title: 'Content Marketing',
        description: 'High-quality content that drives traffic, leads, and conversions.'
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        image: GoogleAdsImg,
        title: 'Google Ads (PPC)',
        description: 'Instant visibility and ROI-focused paid advertising campaigns.'
    },
    {
        icon: <Globe className="w-8 h-8 text-green-500" />,
        image: WebDesignImg, // No valid image provided
        title: 'Web Design & Dev',
        description: 'Stunning, responsive websites optimized for conversions.'
    },
    {
        icon: <BarChart className="w-8 h-8 text-indigo-500" />,
        image: ReputationImg,
        title: 'Online Reputation',
        description: 'Build and protect your brand authority online.'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section className="py-12 md:py-24 bg-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg"
                    >
                        We provide end-to-end digital marketing solutions to grow your business online.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            variants={item}
                            key={index}
                            whileHover={{ y: -10 }}
                            className="relative h-full group"
                        >
                            <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-transparent via-primary/50 to-primary opacity-75 blur-sm transition-all duration-500 group-hover:duration-200 animate-tilt"></div>

                            <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                                {/* Snake Animation Layer */}
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#a100a1_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content Background */}
                                <div className="absolute inset-0.5 bg-white rounded-2xl z-10" />

                                {/* Content Container */}
                                <div className="relative z-20 h-full flex flex-col p-8">
                                    <div className="mb-6 h-48 w-full overflow-hidden rounded-xl bg-gray-100 relative">
                                        {service.image ? (
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-purple-50 group-hover:bg-primary/10 transition-colors">
                                                {service.icon}
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>


        </section>
    );
};

export default Services;
