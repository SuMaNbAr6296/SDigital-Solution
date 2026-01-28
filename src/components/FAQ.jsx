import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What services does NovaDigital provide?",
        answer: "We offer a full spectrum of digital services including custom web development, UI/UX design, SEO optimization, social media marketing, and data analytics. Our goal is to provide end-to-end solutions for your digital presence."
    },
    {
        question: "How long does it take to build a website?",
        answer: "The timeline depends on the project's complexity. A standard 5-page website typically takes 2-4 weeks, while more complex e-commerce platforms or custom applications can take 8-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes, we believe in long-term partnerships. We offer various maintenance packages that include security updates, content updates, performance monitoring, and priority support to keep your digital assets running smoothly."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer both project-based pricing and monthly retainer models, depending on your needs. Our packages typically start from $999 for basic websites. Check out our Pricing section for more details."
    },
    {
        question: "Can you help with rebranding my business?",
        answer: "Absolutely! Our design team specializes in brand identity creation, including logo design, color palette development, typography selection, and brand guidelines to ensure a cohesive and impactful market presence."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="faq">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-purple-100 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16 text-gray-900">
                    Frequently asked <span className="text-gradient">Questions</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white border-primary/30 shadow-lg' : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-medium ${openIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
