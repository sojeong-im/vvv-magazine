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
        { label: '함께하는 대학생', value: 50000, suffix: '+', icon: <Users /> },
        { label: '월간 도달 수', value: 500000, suffix: '+', icon: <TrendingUp /> },
        { label: '파트너 기업', value: 120, suffix: '+', icon: <Award /> }
    ];

    const values = [
        {
            icon: <Eye size={40} />,
            title: 'VISION',
            subtitle: '시야',
            description: '막막한 미래? 우리가 길 찾아줄게. 데이터로 검증된 로드맵으로 너의 가능성을 정확히 보여줄게.',
            color: 'rgba(86, 208, 97, 0.2)'
        },
        {
            icon: <Target size={40} />,
            title: 'VALUE',
            subtitle: '가치',
            description: '겉핥기 말고 진짜 쓸모있는 정보만. 선배들이 삽질하면서 배운 노하우, 너한테 다 줄게.',
            color: 'rgba(37, 99, 235, 0.2)'
        },
        {
            icon: <Zap size={40} />,
            title: 'VICTORY',
            subtitle: '성공',
            description: '작게든 크게든, VVV랑 같이한 모든 순간이 너만의 레전드가 될 거야.',
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
                            <Sparkles size={16} /> 우리가 누군지 궁금해
                        </span>

                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '2rem', lineHeight: 1.1 }}>
                            우리는 그냥<br />
                            <span className="text-gradient">매거진이</span><br />
                            아니야
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}
                        >
                            VVV는 <strong style={{ color: 'white' }}>20대의 현실 조언자</strong>이자, 데이터로 검증된 인사이트를 주는 친구야.<br />
                            추상적인 말 대신 <span style={{ color: 'var(--primary)' }}>진짜 써먹을 수 있는</span> 정보만 골라줄게
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
                            숫자로 증명하는 <span className="text-gradient">진심</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            말만 번지르르한 거 아니야, 데이터가 말해주거든
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
                            우리가 중요하게 생각하는 <span className="text-gradient">3가지</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', maxWidth: '600px', margin: '0 auto' }}>
                            VVV가 이름에 담은 의미. 이 세 가지가 우리가 일하는 방식이야.
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
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary)' }}>우리의 꿈</h2>
                        <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: 'white', marginBottom: '2rem' }}>
                            "모든 20대가 <strong>자기만의 길</strong>을 찾고,<br />
                            <strong>데이터로 증명된 선택</strong>을 하면서,<br />
                            <strong>진짜 성장</strong>하는 세상을 만들고 싶어."
                        </p>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                            — VVV 매거진 팀 드림
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
