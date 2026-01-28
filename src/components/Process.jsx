import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <Search className="w-6 h-6 text-white" />,
        title: 'Discovery',
        description: 'We start by understanding your business goals, target audience, and competitive landscape.',
        color: 'bg-blue-500'
    },
    {
        icon: <PenTool className="w-6 h-6 text-white" />,
        title: 'Strategy & Design',
        description: 'Our team creates a tailored roadmap and visual prototypes to align with your vision.',
        color: 'bg-pink-500'
    },
    {
        icon: <Code className="w-6 h-6 text-white" />,
        title: 'Development',
        description: 'We bring designs to life with clean, efficient code and robust functionality.',
        color: 'bg-violet-500'
    },
    {
        icon: <Rocket className="w-6 h-6 text-white" />,
        title: 'Launch & Grow',
        description: 'We launch your project and continuously optimize for maximum performance and ROI.',
        color: 'bg-green-500'
    }
];

const Process = () => {
    return (
        <section className="py-12 md:py-24 bg-white relative" id="process">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
                        Our Working <span className="text-gradient">Process</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A seamless journey from concept to reality.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative h-full group"
                            >
                                <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-transparent via-primary/50 to-primary opacity-75 blur-sm transition-all duration-500 group-hover:duration-200 animate-tilt"></div>

                                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                                    {/* Snake Animation Layer */}
                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#a100a1_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content Background */}
                                    <div className="absolute inset-0.5 bg-white rounded-2xl z-10" />

                                    {/* Content Container */}
                                    <div className="relative z-20 p-6 text-center h-full">
                                        <div className={`w-16 h-16 mx-auto rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
