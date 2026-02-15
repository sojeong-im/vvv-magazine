import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();

    return (
        <section id="our-service" className="section" style={{ background: '#000', color: '#fff', borderTop: '4px solid #fff', borderBottom: '4px solid #fff', padding: '100px 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'left', marginBottom: '4rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                        fontFamily: 'var(--font-main)', // Use Pretendard for Korean title
                        fontWeight: 900,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        wordBreak: 'keep-all'
                    }}>
                        우리가<br />
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #fff',
                            display: 'inline-block'
                        }}>하는 것들.</span>
                    </h2>

                    <p style={{
                        maxWidth: '400px',
                        fontSize: '1.2rem',
                        lineHeight: 1.6,
                        fontWeight: 600,
                        borderLeft: '4px solid var(--primary)',
                        paddingLeft: '1.2rem'
                    }}>
                        <b>뇌피셜</b>은 사절합니다. <br />
                        오직 <b>데이터</b>로 검증된 이야기만.<br />
                        그게 우리의 방식입니다.
                    </p>
                </div>

                <div className="grid-cols-3" style={{ gap: '0' }}>
                    {[
                        {
                            icon: <Users size={36} />,
                            num: '01',
                            title: "대학생 리얼 보이스",
                            engTitle: "YOUTH PLATFORM",
                            desc: "대학생 에디터 100명이 직접 취재한 캠퍼스 이야기. '진짜' 대학 생활을 보여줍니다."
                        },
                        {
                            icon: <Database size={36} />,
                            num: '02',
                            title: "데이터 팩트 체크",
                            engTitle: "DATA INSIGHT",
                            desc: "전공별 취업률, 연봉, 현실 스펙. 카더라 통신 말고 확실한 데이터를 분석합니다."
                        },
                        {
                            icon: <TrendingUp size={36} />,
                            num: '03',
                            title: "확실한 성과 증명",
                            engTitle: "PERFORMANCE",
                            desc: "정확한 타겟팅으로 결과물이 다릅니다. 기업과 대학생을 잇는 가장 확실한 다리."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="service-card-brutal"
                            style={{
                                padding: '3rem 2rem',
                                border: '2px solid #fff',
                                // Responsive border logic handled by CSS grid usually, but here inline needs care. 
                                // We'll keep full borders to be safe on mobile wrapping as well.
                                marginTop: '-2px', // Collapse borders vertically if stacked
                                marginLeft: idx > 0 ? '-2px' : '0', // Collapse borders horizontally if side-by-side (tricky with inline styles)
                                // Simplified approach: let borders double up or just use margin gap 0.
                                background: '#000',
                                color: '#fff',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '380px',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                        >
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-serif)', opacity: 0.5, marginBottom: '1.5rem', border: '1px solid #777', display: 'inline-block', padding: '2px 8px', borderRadius: '20px' }}>{item.engTitle}</div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', wordBreak: 'keep-all' }}>{item.title}</h3>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 400, opacity: 0.9, wordBreak: 'keep-all' }}>
                                    {item.desc}
                                </p>
                            </div>
                            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }} onClick={() => navigate('/service')}>
                                자세히 보기 <ArrowRight size={18} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
