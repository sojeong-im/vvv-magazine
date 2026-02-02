import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();

    return (
        <section id="our-service" className="section" style={{ background: '#0d0f20' }}>
            <div className="service-bg" style={{
                background: 'url(/service-visual.png) no-repeat center right',
                backgroundSize: 'contain',
                opacity: 0.1,
                width: '60%',
                height: '80%',
                top: '10%'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="hero-title"
                        style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
                    >
                        Our <span className="text-gradient">Service</span>
                    </motion.h2>
                    <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        VVV 매거진은 단순한 콘텐츠를 넘어, 20대의 살아있는 목소리를 데이터로 연결합니다.
                    </p>
                </div>

                <div className="grid-cols-3">
                    {[
                        {
                            icon: <Users size={40} />,
                            title: "Youth Platform",
                            desc: "가장 트렌디하고 살아있는 20대 청년의 목소리를 담는 플랫폼입니다. 대학생 기자단이 생산하고 20대 독자들이 열렬히 소비합니다."
                        },
                        {
                            icon: <Database size={40} />,
                            title: "Data Intelligence",
                            desc: "가장 정확한 20대 소비 행태, 진로 변화, 라이프스타일 데이터로 축적하여 파트너 기업에 독보적인 인사이트를 제공합니다."
                        },
                        {
                            icon: <TrendingUp size={40} />,
                            title: "Target Marketing",
                            desc: "20대 타겟 마케팅, 이제 감(感)이 아닌 데이터입니다. 기업 및 기관들과 정책 수립 및 마케팅 전략에 실질적인 도움을 드립니다."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="service-card glass-panel"
                            style={{ background: 'rgba(26, 30, 59, 0.4)' }}
                        >
                            <div className="service-icon">
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: '#a0a0a0', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '5rem', padding: '4rem', borderRadius: '2rem', background: 'linear-gradient(90deg, #56d061 0%, #258d30 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url(/hero-visual.png) center/cover', opacity: 0.1, mixBlendMode: 'overlay' }}></div>
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#101227', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            PARTNER WITH VVV
                        </h3>
                        <p style={{ color: '#101227', maxWidth: '700px', margin: '0 auto 2.5rem', fontWeight: 600, fontSize: '1.1rem' }}>
                            가장 젊고, 뜨거우며, 살아있는 20대 청년의 목소리를 콘텐츠와 데이터로 포착하고 싶은 기업이라면 지금 바로 문의하세요.
                        </p>
                        <button
                            className="btn"
                            style={{ background: '#101227', color: 'white', padding: '16px 48px', fontSize: '1rem', cursor: 'pointer' }}
                            onClick={() => navigate('/contact')}
                        >
                            CONTACT FOR PARTNERSHIP
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
