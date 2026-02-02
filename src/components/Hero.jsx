import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="hero" className="hero">
            <div className="hero-bg-image" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/hero-visual.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3,
                zIndex: 0,
                filter: 'grayscale(30%) contrast(120%)'
            }}></div>
            <div className="bg-gradient-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, transparent 0%, var(--secondary) 100%)',
                zIndex: 1
            }}></div>

            <div className="floating-shape shape-1" style={{ opacity: 0.2 }}></div>
            <div className="floating-shape shape-2" style={{ opacity: 0.2 }}></div>

            <div className="container hero-content" style={{ zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <span className="hero-badge">
                            The Voice of Youth
                        </span>
                    </div>

                    <h1 className="hero-title">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >VISION</motion.div>
                        <motion.div
                            className="text-outline text-gradient"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >VALUE</motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >VICTORY</motion.div>
                    </h1>

                    <p className="hero-desc">
                        방향을 잃은 듯 막막한 20대.<br />
                        당신의 대학 생활, 진로, 취업에 대한 모든 고민을 <strong className="text-primary">VVV 매거진</strong>이 함께 헤쳐나갑니다.
                    </p>

                    <div className="hero-actions">
                        <Link to="/join" className="btn btn-primary" style={{ textDecoration: 'none', zIndex: 100 }}>
                            START YOUR JOURNEY <ArrowRight size={20} />
                        </Link>
                        <button className="btn btn-outline" onClick={() => {
                            const element = document.getElementById('who-we-are');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            LEARN MORE
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator" style={{ position: 'absolute', bottom: '40px', left: 0, width: '100%', display: 'flex', justifyContent: 'center', opacity: 0.7, zIndex: 10 }}>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ width: '24px', height: '40px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '20px', display: 'flex', justifyContent: 'center', padding: '5px' }}
                >
                    <div style={{ width: '2px', height: '8px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
