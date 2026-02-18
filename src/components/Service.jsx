import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();

    return (
        <section id="our-service" className="section" style={{ background: '#000', color: '#fff', borderTop: '4px solid #fff', borderBottom: '4px solid #fff', padding: '100px 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'left', marginBottom: '4rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                        fontFamily: 'var(--font-main)',
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
                        }}>담는 이야기.</span>
                    </h2>

                    <p style={{
                        maxWidth: '430px',
                        fontSize: '1.2rem',
                        lineHeight: 1.6,
                        fontWeight: 600,
                        borderLeft: '4px solid var(--primary)',
                        paddingLeft: '1.2rem',
                        opacity: 0.9
                    }}>
                        <b>교과서</b>엔 없는 내용만 담습니다. <br />
                        전공 강의실 뒷문으로 빠져나와 <br />
                        진짜 <b>대학 생활의 낭만과 현실</b>을 기록합니다.
                    </p>
                </div>

                <div className="grid-cols-3" style={{ gap: '0' }}>
                    {[
                        {
                            icon: <Users size={36} />,
                            num: '01',
                            title: "대학생 에디터",
                            engTitle: "OUR VOICE",
                            desc: "100명의 대학생 에디터가 직접 기획하고 씁니다. 우리 시선으로 본 캠퍼스는 어떤 모습일까요?"
                        },
                        {
                            icon: <BookOpen size={36} />,
                            num: '02',
                            title: "전공별 생생 후기",
                            engTitle: "MAJOR STORY",
                            desc: "학점 잘 받는 법부터 교수님 뒷담화까지. 어디서도 못 듣는 선배들의 리얼한 전공 썰."
                        },
                        {
                            icon: <Sparkles size={36} />,
                            num: '03',
                            title: "트렌드 큐레이션",
                            engTitle: "TREND & CULTURE",
                            desc: "요즘 대학생들은 뭐 하고 놀까? 팝업스토어, 핫플, 대외활동까지 가장 힙한 정보를 모았습니다."
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
                                marginTop: '-2px',
                                marginLeft: idx > 0 ? '-2px' : '0',
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
                                더 읽어보기 <ArrowRight size={18} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
