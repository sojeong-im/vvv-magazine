import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#56d061] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#56d061] rounded-full blur-[150px] opacity-10"></div>
            </div>

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 border border-[#56d061] rounded-full text-[#56d061] text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                        The Voice of Youth
                    </span>

                    <h1 className="text-6xl md:text-9xl font-black leading-none mb-2 tracking-tighter text-white">
                        VISION
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#56d061] to-white">
                            VALUE
                        </span>
                        VICTORY
                    </h1>

                    <p className="mt-8 text-lg max-w-2xl mx-auto text-gray-400 leading-relaxed font-light">
                        방향을 잃은 듯 막막한 20대.
                        <br className="hidden md:block" />
                        당신의 대학 생활, 진로, 취업에 대한 모든 고민을 <strong className="text-white">VVV 매거진</strong>이 함께 헤쳐나갑니다.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="group relative px-8 py-4 bg-[#56d061] text-[#101227] font-bold rounded-full overflow-hidden transition-all hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                START YOUR JOURNEY <ArrowRight size={20} />
                            </span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-full transition-all">
                            LEARN MORE
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce opacity-50">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
