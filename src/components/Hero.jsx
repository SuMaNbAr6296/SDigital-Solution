import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';



const Hero = ({ onOpenModal }) => {
    return (
        <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white" id="home">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/40 to-white/90" />
            </div>

            {/* Background Decor (Optional - kept for extra flair) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] mix-blend-multiply"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50/80 border border-purple-100 mb-8 hover:bg-purple-100 transition-colors cursor-pointer shadow-sm backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Top Digital Marketing Agency</span>
                </motion.div>

                {/* Headline - TeamDeos Style */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight mb-6 text-gray-900"
                >
                    {["Top", "Digital", "Marketing"].map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block mr-2 md:mr-3"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                    <br className="hidden md:block" />
                    {["Company", "In"].map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block mr-2 md:mr-3"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                    <motion.span
                        className="text-gradient inline-block"
                        variants={{
                            hidden: { opacity: 0, y: 20, scale: 0.9 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.6, ease: "easeOut" }
                            }
                        }}
                    >
                        Kolkata
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.5
                            }
                        }
                    }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
                >
                    {/* We are India's best digital agency, crafting stunning websites and effective marketing campaigns that drive growth. */}
                    {"We are India's best digital agency, crafting stunning websites and effective marketing campaigns that drive growth.".split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block mr-1.5"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onOpenModal}
                        className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-gray-200 hover:bg-white/80 transition-all text-gray-700 hover:text-primary group bg-white/50 backdrop-blur-sm shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 fill-current text-primary ml-0.5" />
                        </div>
                        <span className="font-semibold">View Process</span>
                    </button>
                </motion.div>


            </div>
        </section>
    );
};

export default Hero;

