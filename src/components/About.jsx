import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Send } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Target size={32} />,
            title: "VISION",
            desc: "Vision을 잡고,",
            bgColor: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)"
        },
        {
            icon: <Lightbulb size={32} />,
            title: "VALUE",
            desc: "Value를 만들어,",
            bgColor: "linear-gradient(135deg, #56d061 0%, #22c55e 100%)"
        },
        {
            icon: <Send size={32} />,
            title: "VENTURE",
            desc: "Venture하라",
            bgColor: "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)"
        }
    ];

    return (
        <section id="who-we-are" className="section">
            <div className="container">
                <div className="about-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                            WHO <span className="text-primary">WE ARE</span>
                        </h2>
                        <div className="about-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <p>
                                VVV 매거진은 20대 대학생 기자단이 직접 발로 뛰며 <strong style={{ color: 'white' }}>현실적인 이야기</strong>를 제공합니다.
                            </p>
                            <p>
                                캠퍼스의 숨겨진 꿀팁부터, 현직자들의 솔직하고 생생한 인터뷰,
                                그리고 취업 시장의 최신 트렌드와 현실적인 준비 가이드까지.
                            </p>
                            <p className="highlight-box">
                                "오직 같은 시대를 살아가는 20대가 가장 공감하고 필요로 하는 '진짜' 이야기만을 필터 없이 전달합니다."
                            </p>
                            <p>
                                나만 뒤처지는 것 같아 불안한가요? 혹은 어떤 길로 가야 할지 막막한가요?
                                이제 혼자 방황하지 마세요. 진짜 이야기가 진짜 힘이 됩니다.
                            </p>
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                marginBottom: '2rem',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <img src="/about-visual.png" alt="VVV Vision" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </motion.div>

                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="feature-card"
                                style={{ padding: '1.5rem' }}
                            >
                                <div className="feature-icon" style={{ background: card.bgColor, width: '40px', height: '40px', fontSize: '0.9rem' }}>
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '0.2rem' }}>{card.title}</h3>
                                    <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{card.desc}</p>
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
