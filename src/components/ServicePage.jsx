import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Database, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ background: '#fff', color: '#000', minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
            <Helmet>
                <title>SERVICES | VVV MAGAZINE</title>
                <meta name="description" content="데이터 기반 트렌드 분석, 대학생 타겟 마케팅, Z세대 인사이트 리포트. VVV 매거진만의 독보적인 솔루션을 만나보세요." />
                <meta name="keywords" content="대학생마케팅, Z세대트렌드, 데이터분석, 인사이트리포트, VVV솔루션" />
            </Helmet>

            {/* Brutalist Header */}
            <header style={{
                padding: '10vh 0',
                borderBottom: '4px solid #000',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-10%',
                    fontSize: '20rem',
                    fontWeight: 900,
                    color: 'rgba(0,0,0,0.03)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap'
                }}>
                    SERVICES
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 800,
                        lineHeight: 0.9,
                        marginBottom: '2rem',
                        letterSpacing: '-0.04em'
                    }}>
                        OUR <br />
                        <span style={{
                            color: '#fff',
                            WebkitTextStroke: '3px #000',
                            position: 'relative',
                            display: 'inline-block'
                        }}>SOLUTIONS</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        border: '2px solid #000',
                        padding: '1.5rem',
                        background: '#fff',
                        boxShadow: '6px 6px 0px #000'
                    }}>
                        감과 추측은 버리세요. <br />
                        우리는 오직 <strong>데이터</strong>로 증명합니다.
                    </p>
                </div>
            </header>

            {/* Services Grid */}
            <section className="section" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>

                        {/* Service Item 1 */}
                        <div style={{ border: '3px solid #000', padding: '3rem 2rem', background: '#fff', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '20px', background: '#000', color: '#fff', padding: '5px 15px', fontWeight: 700 }}>01</div>
                            <Users size={48} style={{ marginBottom: '2rem' }} strokeWidth={1.5} />
                            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', fontWeight: 800, marginBottom: '1rem' }}>YOUTH PLATFORM</h3>
                            <p style={{ marginBottom: '2rem', lineHeight: 1.6, color: '#333' }}>
                                대학생 에디터 100+명이 직접 만드는 리얼 보이스. <br />
                                가장 빠르고 정확한 캠퍼스 트렌드 발신지.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {['대학생 에디터 네트워크', '월간 50만 도달 (SNS)', '캠퍼스 앰배서더 프로그램'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                                        <CheckCircle2 size={16} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service Item 2 */}
                        <div style={{ border: '3px solid #000', padding: '3rem 2rem', background: '#000', color: '#fff', position: 'relative', transform: 'translateY(-20px)' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '20px', background: '#fff', color: '#000', border: '3px solid #000', padding: '5px 15px', fontWeight: 700 }}>02</div>
                            <Database size={48} style={{ marginBottom: '2rem', color: 'var(--primary)' }} strokeWidth={1.5} />
                            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', fontWeight: 800, marginBottom: '1rem' }}>DATA INSIGHT</h3>
                            <p style={{ marginBottom: '2rem', lineHeight: 1.6, opacity: 0.9 }}>
                                표면적인 유행이 아닌, 그 이면의 데이터를 읽습니다. <br />
                                Z세대 소비 패턴과 라이프스타일 심층 분석.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {['소비 데이터 트래킹', '키워드 분석 리포트', '타겟 심층 인터뷰 (FGI)'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                                        <CheckCircle2 size={16} color="var(--primary)" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service Item 3 */}
                        <div style={{ border: '3px solid #000', padding: '3rem 2rem', background: '#fff', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '20px', background: '#000', color: '#fff', padding: '5px 15px', fontWeight: 700 }}>03</div>
                            <TrendingUp size={48} style={{ marginBottom: '2rem' }} strokeWidth={1.5} />
                            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', fontWeight: 800, marginBottom: '1rem' }}>PERFORMANCE</h3>
                            <p style={{ marginBottom: '2rem', lineHeight: 1.6, color: '#333' }}>
                                정확한 타겟팅으로 브랜드 가치를 높입니다. <br />
                                데이터 기반 퍼포먼스 마케팅 솔루션.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {['타겟 맞춤형 콘텐츠 제작', 'SNS 퍼포먼스 마케팅', '온/오프라인 캠페인 기획'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                                        <CheckCircle2 size={16} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: 'var(--primary)', padding: '6rem 0', borderTop: '4px solid #000', borderBottom: '4px solid #000' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: 'var(--font-serif)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1 }}>
                        WANT <span style={{ textDecoration: 'underline' }}>REAL</span> IMPACT?
                    </h2>
                    <button
                        onClick={() => navigate('/contact')}
                        style={{
                            background: '#000',
                            color: '#fff',
                            border: 'none',
                            padding: '20px 60px',
                            fontSize: '1.2rem',
                            fontWeight: 900,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '8px 8px 0px #fff'
                        }}
                    >
                        PARTNER WITH US <ArrowRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
