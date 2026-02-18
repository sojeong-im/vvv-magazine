import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Users, Target, TrendingUp, Eye, Award, Zap, ArrowDown, PenTool, MessageCircle, Heart } from 'lucide-react';

const AboutPage = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Counter Animation Hook
    const useCounter = (end, duration = 2000) => {
        const [count, setCount] = useState(0);
        const [hasAnimated, setHasAnimated] = useState(false);

        useEffect(() => {
            if (hasAnimated) return;
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setHasAnimated(true);
                        let startTime;
                        const animate = (currentTime) => {
                            if (!startTime) startTime = currentTime;
                            const progress = Math.min((currentTime - startTime) / duration, 1);
                            setCount(Math.floor(progress * end));
                            if (progress < 1) requestAnimationFrame(animate);
                        };
                        requestAnimationFrame(animate);
                        observer.disconnect();
                    }
                },
                { threshold: 0.5 }
            );
            const element = document.getElementById('stats-section');
            if (element) observer.observe(element);
            return () => observer.disconnect();
        }, [end, duration, hasAnimated]);
        return count;
    };

    const stats = [
        { label: '에디터 지원', value: 5000, suffix: '+', icon: <Users /> },
        { label: '발행 콘텐츠', value: 1200, suffix: '+', icon: <PenTool /> },
        { label: '독자 댓글', value: 8500, suffix: '+', icon: <MessageCircle /> }
    ];

    const values = [
        {
            icon: <Eye size={60} strokeWidth={1.5} />,
            title: '발견하다', // Vision -> 발견하다
            engTitle: 'DISCOVER',
            subtitle: '발견',
            description: '누구나 자신만의 멋진 색깔을 가지고 있습니다. 우리는 당신조차 몰랐던 당신의 매력을 찾아내고 조명합니다.',
            color: '#000',
            bg: '#fff'
        },
        {
            icon: <PenTool size={60} strokeWidth={1.5} />,
            title: '기록하다', // Value -> 기록하다
            engTitle: 'RECORD',
            subtitle: '기록',
            description: '성공의 순간뿐만 아니라 실패와 방황의 시간도 소중합니다. 대학 생활의 모든 찰나를 진솔하게 기록합니다.',
            color: '#fff',
            bg: '#000'
        },
        {
            icon: <Heart size={60} strokeWidth={1.5} />,
            title: '연결하다', // Victory -> 연결하다
            engTitle: 'CONNECT',
            subtitle: '연결',
            description: '혼자 고민하지 마세요. VVV 매거진은 비슷한 고민을 가진 대학생들을 이야기로 연결합니다.',
            color: '#000',
            bg: 'var(--primary)'
        }
    ];

    return (
        <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 'var(--nav-height)', color: '#000' }}>
            <Helmet>
                <title>소개 | VVV 매거진</title>
                <meta name="description" content="VVV 매거진은 대학생들의 생생한 이야기를 담는 콘텐츠 플랫폼입니다. 전공, 진로, 캠퍼스 라이프를 기록합니다." />
            </Helmet>

            {/* Brutalist Hero Section - KOREAN */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderBottom: '4px solid #000',
                background: '#fff'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{
                        border: '2px solid #000',
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        fontWeight: 700,
                        marginBottom: '2rem',
                        letterSpacing: '0.05em',
                        fontFamily: 'var(--font-main)'
                    }}>
                        우리는 누구인가
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 11vw, 9rem)',
                        fontFamily: 'var(--font-main)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '2rem',
                        letterSpacing: '-0.03em',
                        wordBreak: 'keep-all'
                    }}>
                        청춘의<br />
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '3px #000',
                            fontStyle: 'normal'
                        }}>페이지</span>
                    </h1>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        maxWidth: '800px',
                        borderTop: '2px solid #000',
                        paddingTop: '2rem',
                        marginTop: '2rem'
                    }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.6, flex: 1, wordBreak: 'keep-all' }}>
                            <b>VVV 매거진</b>은 대학생 에디터들이 직접 만드는 <strong>콘텐츠 플랫폼</strong>입니다. <br />
                            우리는 숫자와 스펙 대신, 낭만과 경험을 이야기합니다. <br />
                            지금 가장 빛나는 당신의 이야기를 들려주세요.
                        </p>
                    </div>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem',
                    border: '2px solid #000',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'spin 10s linear infinite'
                }}>
                    <ArrowDown size={40} />
                </div>
            </section>

            {/* Stats Section with Brutal Grid */}
            <section id="stats-section" style={{ borderBottom: '4px solid #000' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {stats.map((stat, idx) => (
                        <div key={idx} style={{
                            padding: '3rem 1.5rem',
                            borderRight: '1px solid #000',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                                {stat.value.toLocaleString()}{stat.suffix}
                            </div>
                            <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.8rem', wordBreak: 'keep-all', opacity: 0.8 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section style={{ padding: '0' }}>
                {values.map((value, idx) => (
                    <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        background: value.bg,
                        color: value.color,
                        borderBottom: '4px solid #000',
                        minHeight: '50vh'
                    }}>
                        <div className="container" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '4rem 0',
                            textAlign: 'center',
                            gap: '2rem'
                        }}>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>{value.icon}</div>
                                <h2 style={{
                                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                                    fontFamily: 'var(--font-main)',
                                    fontWeight: 900,
                                    lineHeight: 1,
                                    marginBottom: '1rem',
                                    wordBreak: 'keep-all'
                                }}>{value.title}</h2>
                                <span style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    marginTop: '0.5rem',
                                    display: 'block',
                                    fontFamily: 'var(--font-serif)',
                                    opacity: 0.6
                                }}>{value.engTitle}</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.5, maxWidth: '600px', wordBreak: 'keep-all' }}>
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AboutPage;
