import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Starter',
        price: { monthly: 999, yearly: 9990 },
        description: 'Perfect for small businesses starting their digital journey.',
        features: ['5 Page Website', 'Basic SEO Setup', 'Social Media Integration', 'Content Management System', '1 Month Support']
    },
    {
        name: 'Growth',
        price: { monthly: 1999, yearly: 19990 },
        description: 'Ideal for growing brands that need more power and flexibility.',
        popular: true,
        features: ['10 Page Website', 'Advanced SEO & Analytics', 'Social Media Strategy', 'E-commerce Integration', 'Priority Support', 'Blog Setup']
    },
    {
        name: 'Enterprise',
        price: { monthly: 3999, yearly: 39990 },
        description: 'Full-scale digital transformation for large organizations.',
        features: ['Unlimited Pages', 'Custom Web Applications', 'Full Marketing Suite', '24/7 Dedicated Support', 'Quarterly Strategy Reviews', 'Custom Integrations']
    }
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-12 md:py-24 bg-white" id="pricing">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
                        Simple, Transparent <span className="text-gradient">Pricing</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Choose the perfect plan for your business needs. No hidden fees.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 rounded-full bg-gray-200 p-1 relative transition-colors hover:bg-gray-300"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-6 h-6 rounded-full bg-primary shadow-md"
                            />
                        </button>
                        <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                            Yearly <span className="text-xs text-green-600 font-bold ml-1">SAVE 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            {plan.popular ? (
                                // Previous "Growth" Box Styling
                                <div className="relative p-8 rounded-2xl border bg-white border-primary shadow-2xl shadow-purple-500/20 flex flex-col h-full group">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-primary to-secondary rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-md">
                                        Most Popular
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                                        <p className="text-sm text-gray-500 mb-6 h-10">{plan.description}</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold font-display text-gray-900">
                                                ₹{isYearly ? plan.price.yearly : plan.price.monthly}
                                            </span>
                                            <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                                <div className="p-0.5 rounded-full bg-green-100 text-green-600">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full py-3 rounded-xl font-bold transition-all bg-gray-100 text-gray-900 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
                                        Get Started
                                    </button>
                                </div>
                            ) : (
                                // Snake Animation Styling for other boxes
                                <div className="relative h-full group">
                                    <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-transparent via-primary/50 to-primary opacity-75 blur-sm transition-all duration-500 group-hover:duration-200 animate-tilt"></div>

                                    <div className="relative h-full rounded-2xl overflow-hidden flex flex-col shadow-lg">

                                        {/* Snake Animation Layer */}
                                        <div className="absolute inset-0 z-0">
                                            <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#a100a1_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Content Background */}
                                        <div className="absolute inset-0.5 bg-white rounded-2xl z-10" />

                                        {/* Content Container */}
                                        <div className="relative z-20 p-8 flex flex-col h-full bg-white rounded-2xl m-0.5">
                                            <div className="mb-8">
                                                <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                                                <p className="text-sm text-gray-500 mb-6 h-10">{plan.description}</p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-4xl font-bold font-display text-gray-900">
                                                        ₹{isYearly ? plan.price.yearly : plan.price.monthly}
                                                    </span>
                                                    <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                                                </div>
                                            </div>

                                            <ul className="space-y-4 mb-8 flex-1">
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                                        <div className="p-0.5 rounded-full bg-green-100 text-green-600">
                                                            <Check className="w-3 h-3" />
                                                        </div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <button className="w-full py-3 rounded-xl font-bold transition-all bg-gray-100 text-gray-900 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
