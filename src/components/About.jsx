import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Send } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Target size={28} />,
            title: "VISION",
            desc: "Vision을 잡고,",
            bgColor: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)"
        },
        {
            icon: <Lightbulb size={28} />,
            title: "VALUE",
            desc: "Value를 만들어,",
            bgColor: "linear-gradient(135deg, #56d061 0%, #22c55e 100%)"
        },
        {
            icon: <Send size={28} />,
            title: "VENTURE",
            desc: "Venture하라",
            bgColor: "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)"
        }
    ];

    return (
        <section id="who-we-are" className="section" style={{ background: 'var(--bg-cream)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Image Element */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40%',
                height: '100%',
                backgroundImage: "url('/feature_bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                maskImage: 'linear-gradient(to left, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="about-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                            marginBottom: '2rem',
                            fontFamily: 'var(--font-serif)',
                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            color: 'var(--text-dark)'
                        }}>
                            WHO <span style={{ fontStyle: 'italic', fontWeight: 400 }}>WE ARE</span>
                        </h2>
                        <div className="about-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                                <strong style={{ color: 'var(--text-dark)', textDecoration: 'underline', textDecorationColor: 'var(--primary)', textDecorationThickness: '3px' }}>VVV 매거진</strong>은 20대 대학생 기자단이 직접 큐레이션한 <br />가장 현실적이고 트렌디한 이야기를 전합니다.
                            </p>
                            <p className="highlight-box" style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)', border: '1px solid var(--border-color)', borderRadius: '1rem', padding: '1.5rem' }}>
                                "오직 같은 시대를 살아가는 20대가 공감할 수 있는 <br />'진짜' 이야기만을 필터 없이 전달합니다."
                            </p>
                            <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>
                                나만 뒤처지는 것 같아 불안한가요? <br />
                                이제 혼자 방황하지 마세요. 진짜 이야기가 진짜 힘이 됩니다.
                            </p>
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="feature-card"
                                style={{
                                    padding: '2rem',
                                    background: 'rgba(255,255,255,0.8)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.5)',
                                    borderRadius: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                                }}
                            >
                                <div className="feature-icon" style={{
                                    background: card.bgColor,
                                    width: '60px',
                                    height: '60px',
                                    fontSize: '1rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                                }}>
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, fontStyle: 'italic', marginBottom: '0.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)' }}>{card.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
