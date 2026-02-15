import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Users, Target, TrendingUp, Eye, Award, Zap, ArrowDown } from 'lucide-react';

const AboutPage = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Counter Animation Hook
    const useCounter = (end, duration = 2000) => {
        // ... (Counter logic same as before, simplifying for brevity if needed but keeping logic)
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
        { label: '함께하는 대학생', value: 50000, suffix: '+', icon: <Users /> },
        { label: '월간 도달 수', value: 500000, suffix: '+', icon: <TrendingUp /> },
        { label: '제휴 파트너', value: 120, suffix: '+', icon: <Award /> }
    ];

    const values = [
        {
            icon: <Eye size={60} strokeWidth={1.5} />,
            title: '꿰뚫다', // Vision -> 꿰뚫다
            engTitle: 'VISION',
            subtitle: '통찰력',
            description: '데이터는 거짓말을 하지 않습니다. 표면 아래 숨겨진 진짜 트렌드를 데이터로 꿰뚫어 봅니다.',
            color: '#000',
            bg: '#fff'
        },
        {
            icon: <Target size={60} strokeWidth={1.5} />,
            title: '증명하다', // Value -> 증명하다
            engTitle: 'VALUE',
            subtitle: '실력',
            description: '단순한 정보 전달을 넘어, 실질적인 가치를 창출하고 결과를 숫자로 증명합니다.',
            color: '#fff',
            bg: '#000'
        },
        {
            icon: <Zap size={60} strokeWidth={1.5} />,
            title: '이루다', // Victory -> 이루다
            engTitle: 'VICTORY',
            subtitle: '성취',
            description: 'VVV와 함께하는 모든 순간이 당신의 커리어에 확실한 승리의 기록으로 남습니다.',
            color: '#000',
            bg: 'var(--primary)'
        }
    ];

    return (
        <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 'var(--nav-height)', color: '#000' }}>
            <Helmet>
                <title>소개 | VVV 매거진</title>
                <meta name="description" content="VVV 매거진은 20대 대학생 기자단이 만드는 트렌드 매거진입니다. 진짜 20대의 목소리를 데이터 기반의 인사이트로 전달합니다." />
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
                        20대의<br />
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '3px #000',
                            fontStyle: 'normal' // Korean fonts don't always look good italicized in titles
                        }}>목소리</span>
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
                            <b>VVV 매거진</b>은 대학생 기자단이 직접 만드는 <strong>리얼 보이스 플랫폼</strong>입니다. <br />
                            우리는 기성세대의 시선이 아닌, 우리만의 언어로 세상을 이야기합니다. <br />
                            가짜뉴스와 뇌피셜은 거부합니다. 팩트만 담았습니다.
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
