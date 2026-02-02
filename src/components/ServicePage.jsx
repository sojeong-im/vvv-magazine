import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Database, Users, TrendingUp, BarChart3, Target, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div style={{ background: 'var(--secondary)', minHeight: '100vh', paddingTop: '80px', color: 'white' }}>
            {/* Header Section */}
            <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden', textAlign: 'center' }}>
                <div className="bg-grid"></div>
                <div className="floating-shape shape-1" style={{ top: '-10%', left: '-10%', opacity: 0.1 }}></div>
                <div className="floating-shape shape-3" style={{ bottom: '10%', right: '-5%', opacity: 0.1 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-badge"
                    >
                        VVV SOLUTIONS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="hero-title"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        DATA-DRIVEN <br />
                        <span className="text-gradient">IMPACT</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-desc"
                        style={{ maxWidth: '700px', margin: '0 auto' }}
                    >
                        20대의 목소리를 가장 정확하게 데이터로 포착하여,<br />
                        기업에게는 확실한 성과를, 청년에게는 실질적인 기회를 제공합니다.
                    </motion.p>
                </div>
            </section>

            {/* Service 1: Community & Content */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <motion.div {...fadeInUp}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                                <Users size={20} />
                                <span>COMMUNITY & CONTENT</span>
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                20대의 트렌드가<br />시작되는 <span className="text-gradient">플랫폼</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                VVV 매거진은 단순한 읽을거리가 아닙니다. <br />
                                대학생 에디터들이 직접 발굴한 캠퍼스 내의 리얼한 트렌드와 이슈를 다룹니다.
                                인스타그램, 뉴스레터, 웹진을 통해 20대와 매일 소통하며 강력한 팬덤을 구축했습니다.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {['대학생 에디터 100+명 활동 중', '월간 도달률 500,000+ (Social Media)', '캠퍼스 내 마이크로 트렌드 리포트 발행'].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <CheckCircle2 color="var(--primary)" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="glass-panel"
                            style={{
                                height: '400px',
                                background: 'url(/service-visual.png) center/cover',
                                position: 'relative',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(16,18,39,0.8), transparent)' }}></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service 2: Data Intelligence */}
            <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <motion.div
                            {...fadeInUp}
                            style={{ order: 1 }} // Mobile friendly ordering if needed, but for desktop 1fr 1fr handles visual
                        >
                            <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.5 }}>
                                    <BarChart3 size={100} color="white" strokeWidth={1} />
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Real-time Polling</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                    매주 20대 1,000명 대상 소비/인식 조사 진행
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                                            <span>Career Concerns</span>
                                            <span style={{ color: 'var(--primary)' }}>72%</span>
                                        </div>
                                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                                            <div style={{ width: '72%', height: '100%', background: 'var(--primary)', borderRadius: '3px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                                            <span>Relationship</span>
                                            <span style={{ color: 'var(--primary)' }}>48%</span>
                                        </div>
                                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                                            <div style={{ width: '48%', height: '100%', background: 'var(--primary)', borderRadius: '3px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                                <Database size={20} />
                                <span>DATA INTELLIGENCE</span>
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                감(感)이 아닌<br />데이터로 증명하는 <span className="text-gradient">인사이트</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                20대의 생각은 시시각각 변합니다. VVV는 자체 보유한 패널과 서베이 시스템을 통해 가장 빠르고 정확하게 20대의 인식을 데이터화합니다.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--primary)" size={20} />
                                    <span>커스텀 타겟 서베이 설계 및 분석</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--primary)" size={20} />
                                    <span>FGI (Focus Group Interview) 모집 및 운영</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--primary)" size={20} />
                                    <span>대학생 진로/취업 데이터 통계 제공</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service 3: Solution Agency */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                            <Zap size={20} />
                            <span>VVV AGENCY</span>
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Target Marketing & <span className="text-gradient">Consulting</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            20대에게 가장 효과적으로 다가가는 방법을 제안합니다.<br />
                            단순 광고 집행이 아닌, 브랜드가 20대의 문화 속에 스며들 수 있는 캠페인을 기획합니다.
                        </p>
                    </div>

                    <div className="grid-cols-3">
                        {[
                            { title: 'Brand Campaign', desc: '온/오프라인 통합 브랜드 캠페인 기획 및 운영', icon: <Target /> },
                            { title: 'Univ. Attack', desc: '전국 주요 대학 캠퍼스 팝업 및 샘플링 이벤트', icon: <Zap /> },
                            { title: 'Content Collab', desc: '브랜드 메세지를 담은 시리즈 콘텐츠 제작', icon: <TrendingUp /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel"
                                style={{ padding: '2rem', textAlign: 'center', transition: 'all 0.3s' }}
                                whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                            >
                                <div style={{
                                    width: '60px', height: '60px', background: 'rgba(86, 208, 97, 0.1)',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 1.5rem', color: 'var(--primary)'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '80px 0', textAlign: 'center', background: 'linear-gradient(to top, rgba(86, 208, 97, 0.05), transparent)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                        Ready to make an <span className="text-gradient">IMPACT?</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        지금 VVV의 솔루션을 통해 타겟 고객을 확실한 팬으로 만들어보세요.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('/contact')}
                        >
                            PARTNERSHIP INQUIRY <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
