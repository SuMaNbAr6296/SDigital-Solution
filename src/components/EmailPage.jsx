import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmailPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
            <div className="max-w-2xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 md:p-12 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Thank You for Subscribing!
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                        You've successfully joined our newsletter. We're excited to share our latest updates and insights with you.
                    </p>

                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-lg text-white font-semibold hover:bg-[#8b008b] transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default EmailPage;
