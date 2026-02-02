import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Users, Target, TrendingUp, Eye, Award, Zap } from 'lucide-react';

const AboutPage = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

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
        { label: 'Active Students', value: 50000, suffix: '+', icon: <Users /> },
        { label: 'Monthly Reach', value: 500000, suffix: '+', icon: <TrendingUp /> },
        { label: 'Partner Companies', value: 120, suffix: '+', icon: <Award /> }
    ];

    const values = [
        {
            icon: <Eye size={40} />,
            title: 'VISION',
            subtitle: '명확한 시야',
            description: '20대의 막연한 미래를 선명한 로드맵으로 만듭니다. 데이터 기반 인사이트로 당신의 가능성을 정확히 진단합니다.',
            color: 'rgba(86, 208, 97, 0.2)'
        },
        {
            icon: <Target size={40} />,
            title: 'VALUE',
            subtitle: '실질적 가치',
            description: '피상적인 조언이 아닌, 검증된 실전 노하우를 제공합니다. 선배들의 실패와 성공 경험이 당신의 자산이 됩니다.',
            color: 'rgba(37, 99, 235, 0.2)'
        },
        {
            icon: <Zap size={40} />,
            title: 'VICTORY',
            subtitle: '성취의 순간',
            description: '작은 성공부터 큰 도약까지, VVV와 함께한 모든 여정이 당신만의 승리 스토리가 됩니다.',
            color: 'rgba(124, 58, 237, 0.2)'
        }
    ];

    return (
        <div style={{ background: 'var(--secondary)', minHeight: '100vh', paddingTop: '80px', color: 'white', overflow: 'hidden' }}>

            {/* Hero Section with Parallax */}
            <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div className="bg-grid"></div>
                <motion.div
                    className="floating-shape shape-1"
                    style={{ opacity: 0.15, y }}
                ></motion.div>
                <motion.div
                    className="floating-shape shape-3"
                    style={{ opacity: 0.15, y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                ></motion.div>

                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-badge" style={{ marginBottom: '2rem' }}>
                            <Sparkles size={16} /> WHO WE ARE
                        </span>

                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '2rem', lineHeight: 1.1 }}>
                            WE ARE<br />
                            <span className="text-gradient">NOT JUST</span><br />
                            A MAGAZINE
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}
                        >
                            VVV는 20대 대학생의 <strong style={{ color: 'white' }}>길잡이이자, 데이터 분석가이며, 커리어 파트너</strong>입니다.<br />
                            우리는 막연한 조언 대신 <span style={{ color: 'var(--primary)' }}>구체적인 액션 플랜</span>을 제시합니다.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <div style={{ width: '24px', height: '40px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '20px', display: 'flex', justifyContent: 'center', padding: '5px' }}>
                        <div style={{ width: '2px', height: '8px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                    </div>
                </motion.div>
            </section>

            {/* Animated Stats Section */}
            <section id="stats-section" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)', position: 'relative' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            NUMBERS DON'T <span className="text-gradient">LIE</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            데이터로 증명하는 VVV의 영향력
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                        {stats.map((stat, idx) => (
                            <StatCard key={idx} stat={stat} index={idx} useCounter={useCounter} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3V Values with Interactive Cards */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
                            THE <span className="text-gradient">3V PHILOSOPHY</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', maxWidth: '600px', margin: '0 auto' }}>
                            VVV의 이름에 담긴 철학. 우리는 이 세 가지 가치를 통해 20대의 성장을 지원합니다.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {values.map((value, idx) => (
                            <ValueCard key={idx} value={value} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section style={{ padding: '100px 0', background: 'linear-gradient(to bottom, transparent, rgba(86, 208, 97, 0.05))' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '4rem', textAlign: 'center', border: '1px solid rgba(86, 208, 97, 0.2)' }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary)' }}>OUR MISSION</h2>
                        <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: 'white', marginBottom: '2rem' }}>
                            "모든 20대가 <strong>자신만의 길</strong>을 찾고,<br />
                            <strong>데이터로 검증된 선택</strong>을 하며,<br />
                            <strong>실질적인 성장</strong>을 이루는 세상을 만듭니다."
                        </p>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                            — VVV Magazine Team
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

// Stat Card Component with Hover Effect
const StatCard = ({ stat, index, useCounter }) => {
    const count = useCounter(stat.value);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="glass-panel"
            style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                borderColor: isHovered ? 'var(--primary)' : 'rgba(255,255,255,0.1)'
            }}
        >
            <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'inline-block' }}
            >
                {stat.icon}
            </motion.div>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                {count.toLocaleString()}{stat.suffix}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {stat.label}
            </div>
        </motion.div>
    );
};

// Value Card Component with 3D Tilt Effect
const ValueCard = ({ value, index }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!isHovered) return;
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        setRotate({ x: rotateX, y: rotateY });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setRotate({ x: 0, y: 0 });
            }}
            className="glass-panel"
            style={{
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s',
                transform: isHovered ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)` : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
                borderColor: isHovered ? 'var(--primary)' : 'rgba(255,255,255,0.1)'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: value.color,
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: isHovered ? 1 : 0.5,
                transition: 'opacity 0.3s'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}
                >
                    {value.icon}
                </motion.div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{value.title}</h3>
                <div style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                    {value.subtitle}
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {value.description}
                </p>
            </div>
        </motion.div>
    );
};

export default AboutPage;
