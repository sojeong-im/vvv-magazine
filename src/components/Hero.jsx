import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" className="hero" style={{ background: '#fff', color: '#000', overflow: 'hidden', position: 'relative' }}>
            {/* Background Texture */}
            <div className="hero-bg-image" style={{
                opacity: 0.08,
                filter: 'contrast(1.2) grayscale(100%)',
                backgroundSize: 'cover'
            }}></div>

            {/* Grid Lines */}
            <div style={{ position: 'absolute', top: 0, left: '33%', width: '1px', height: '100%', background: '#000', opacity: 0.1 }}></div>
            <div style={{ position: 'absolute', top: 0, right: '33%', width: '1px', height: '100%', background: '#000', opacity: 0.1 }}></div>

            <div className="container hero-content" style={{ zIndex: 10, position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '0' }}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        border: '2px solid #000',
                        display: 'inline-block',
                        padding: '0.6rem 1.2rem',
                        fontWeight: 700,
                        marginBottom: '2.5rem',
                        background: '#fff',
                        boxShadow: '4px 4px 0 #000',
                        fontSize: '0.9rem',
                        letterSpacing: '0.05em'
                    }}>
                        대학생 전공 & 라이프스타일 웹진
                    </div>

                    <h1 className="hero-title" style={{
                        fontSize: 'clamp(3.5rem, 11vw, 8rem)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em',
                        marginBottom: '2rem',
                        fontFamily: 'var(--font-main)',
                        fontWeight: 800,
                        color: '#000',
                        wordBreak: 'keep-all'
                    }}>
                        전공이<br />
                        <span style={{
                            background: 'var(--primary)',
                            padding: '0 10px',
                            display: 'inline-block',
                            transform: 'skewX(-10deg)'
                        }}>밥 먹여줍니다.</span><br />
                        <span style={{
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            fontWeight: 900,
                            WebkitTextStroke: '2px #000',
                            color: 'transparent'
                        }}>REAL STORY</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                        fontWeight: 500,
                        marginTop: '1rem',
                        maxWidth: '520px',
                        lineHeight: 1.6,
                        color: '#333',
                        background: '#fff',
                        borderLeft: '4px solid #000',
                        paddingLeft: '1.5rem',
                        marginBottom: '2rem'
                    }}>
                        딱딱한 이론은 강의실에 두고 오세요. <br />
                        우리가 겪은 <b>진짜 캠퍼스 이야기</b>와 <br />
                        선배들의 생생한 경험담을 기록합니다.
                    </p>

                    <div style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <Link to="/major-guide" style={{
                            background: '#000',
                            color: '#fff',
                            padding: '18px 40px',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            border: '3px solid #000',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.2s',
                            boxShadow: '6px 6px 0 rgba(0,0,0,0.2)'
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 rgba(0,0,0,0.3)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '6px 6px 0 rgba(0,0,0,0.2)'; }}
                        >
                            전공 꿀팁 보기 <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" style={{
                            background: '#fff',
                            color: '#000',
                            padding: '18px 40px',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            border: '3px solid #000',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.2s'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#f0f0f0'}
                            onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
                        >
                            우리가누구게?
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Marquee removed as per user request */}
        </section>
    );
};

export default Hero;
