import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, PenTool, Briefcase, GraduationCap, Target, CheckCircle2, TrendingUp, Users, Lightbulb } from 'lucide-react';

const MajorGuidePage = () => {
    const [selectedMajor, setSelectedMajor] = useState('tech');

    const majors = {
        tech: {
            id: 'tech',
            icon: <Code size={40} />,
            title: '공학 및 IT',
            color: '#56d061',
            description: '미래를 설계하는 기술의 최전선. 논리적 사고와 문제 해결 능력으로 세상을 바꿉니다.',
            recommendedFor: [
                '논리적이고 체계적인 사고를 선호하는 분',
                '새로운 기술과 트렌드에 관심이 많은 분',
                '문제를 분석하고 해결하는 과정을 즐기는 분',
                '끊임없이 배우고 성장하려는 의지가 있는 분'
            ],
            requiredSkills: [
                { skill: '논리적 사고력', level: 90 },
                { skill: '문제 해결 능력', level: 95 },
                { skill: '수학적 기초', level: 80 },
                { skill: '창의력', level: 75 }
            ],
            careers: [
                '소프트웨어 엔지니어',
                '데이터 사이언티스트',
                '인공지능 연구원',
                'DevOps 엔지니어',
                '보안 전문가',
                'IT 컨설턴트'
            ],
            roadmap: [
                { stage: '1학년', focus: '프로그래밍 기초, 자료구조, 알고리즘' },
                { stage: '2학년', focus: '운영체제, 데이터베이스, 네트워크' },
                { stage: '3학년', focus: '전공 심화, 프로젝트 경험, 인턴십' },
                { stage: '4학년', focus: '포트폴리오 완성, 취업 준비, 논문' }
            ],
            industries: ['IT/소프트웨어', '금융IT', '제조/자동차', '스타트업', '연구소', '대기업']
        },
        arts: {
            id: 'arts',
            icon: <PenTool size={40} />,
            title: '예체능계열',
            color: '#ec4899',
            description: '창의력과 감성으로 세상에 영감을 주는 크리에이터. 예술과 디자인으로 새로운 가치를 창출합니다.',
            recommendedFor: [
                '창의적 표현과 예술적 감각이 뛰어난 분',
                '시각적/청각적 감수성이 풍부한 분',
                '트렌드에 민감하고 새로운 시도를 즐기는 분',
                '자신만의 스타일을 만들어가고 싶은 분'
            ],
            requiredSkills: [
                { skill: '창의력', level: 95 },
                { skill: '미적 감각', level: 90 },
                { skill: '표현력', level: 85 },
                { skill: '트렌드 감각', level: 80 }
            ],
            careers: [
                'UX/UI 디자이너',
                '브랜드 디자이너',
                '영상 크리에이터',
                '패션 디자이너',
                '아트 디렉터',
                '공연 기획자'
            ],
            roadmap: [
                { stage: '1학년', focus: '기초 조형, 드로잉, 디자인 이론' },
                { stage: '2학년', focus: '전공 도구 활용, 포트폴리오 시작' },
                { stage: '3학년', focus: '실전 프로젝트, 공모전, 인턴' },
                { stage: '4학년', focus: '졸업 작품, 포트폴리오 완성, 전시' }
            ],
            industries: ['디자인 에이전시', '광고/마케팅', '엔터테인먼트', '게임', '패션', '스타트업']
        },
        business: {
            id: 'business',
            icon: <Briefcase size={40} />,
            title: '상경계열',
            color: '#3b82f6',
            description: '비즈니스의 중심에서 전략을 세우고 실행하는 리더. 경제와 경영으로 조직을 성장시킵니다.',
            recommendedFor: [
                '리더십과 조직 관리에 관심이 많은 분',
                '경제 흐름과 시장 변화에 민감한 분',
                '의사결정과 전략 수립을 즐기는 분',
                '숫자와 데이터 분석에 거부감이 없는 분'
            ],
            requiredSkills: [
                { skill: '분석적 사고', level: 85 },
                { skill: '의사소통 능력', level: 90 },
                { skill: '리더십', level: 80 },
                { skill: '협상력', level: 75 }
            ],
            careers: [
                '경영 컨설턴트',
                '마케팅 전문가',
                '재무 분석가',
                '투자 심사역',
                '전략 기획자',
                '스타트업 창업자'
            ],
            roadmap: [
                { stage: '1학년', focus: '경영/경제 기초, 회계 원리' },
                { stage: '2학년', focus: '마케팅, 재무, 조직 이론' },
                { stage: '3학년', focus: '전략, 데이터 분석, 인턴십' },
                { stage: '4학년', focus: '케이스 스터디, 자격증, 취업' }
            ],
            industries: ['대기업', '컨설팅', '금융', '스타트업', '마케팅 에이전시', '유통/리테일']
        },
        humanities: {
            id: 'humanities',
            icon: <GraduationCap size={40} />,
            title: '인문사회계열',
            color: '#8b5cf6',
            description: '인간과 사회를 깊이 이해하고 통찰하는 사색가. 비판적 사고로 세상을 읽어냅니다.',
            recommendedFor: [
                '책 읽기와 글쓰기를 좋아하는 분',
                '사회 문제와 인간에 대한 관심이 깊은 분',
                '분석적이고 비판적으로 사고하는 분',
                '언어 감각과 표현력이 뛰어난 분'
            ],
            requiredSkills: [
                { skill: '비판적 사고', level: 90 },
                { skill: '언어 능력', level: 95 },
                { skill: '공감 능력', level: 85 },
                { skill: '통찰력', level: 88 }
            ],
            careers: [
                '기자/에디터',
                '법률 전문가',
                '정책 연구원',
                '교사/교수',
                '콘텐츠 크리에이터',
                'HR 전문가'
            ],
            roadmap: [
                { stage: '1학년', focus: '전공 기초, 글쓰기, 외국어' },
                { stage: '2학년', focus: '이론 심화, 세미나, 토론' },
                { stage: '3학년', focus: '논문 작성, 현장 경험, 공모전' },
                { stage: '4학년', focus: '학술 활동, 자격증, 진로 탐색' }
            ],
            industries: ['언론/미디어', '출판', '교육', '공공기관', '법률', '문화예술']
        }
    };

    const current = majors[selectedMajor];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--secondary)', paddingTop: '100px', paddingBottom: '5rem', color: 'white' }}>
            <div className="bg-grid"></div>

            {/* Header */}
            <section className="section" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-title"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        전공 <span className="text-gradient">가이드</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}
                    >
                        나에게 맞는 전공은? 각 계열의 특징과 진로를 탐색해보세요
                    </motion.p>
                </div>
            </section>

            {/* Major Selection */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                        {Object.values(majors).map((major, idx) => (
                            <motion.div
                                key={major.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedMajor(major.id)}
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    border: selectedMajor === major.id ? `2px solid ${major.color}` : '1px solid rgba(255,255,255,0.1)',
                                    background: selectedMajor === major.id ? `${major.color}15` : 'rgba(255,255,255,0.05)',
                                    transition: 'all 0.3s',
                                    textAlign: 'center'
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <div style={{ color: major.color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    {major.icon}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{major.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Major Detail Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedMajor}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Overview */}
                            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '2rem', borderLeft: `4px solid ${current.color}` }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: current.color }}>{current.title}</h2>
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{current.description}</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem' }}>
                                {/* Recommended For */}
                                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                        <Target size={24} color={current.color} />
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>이런 분께 추천해요</h3>
                                    </div>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {current.recommendedFor.map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <CheckCircle2 size={20} color={current.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span style={{ color: 'white', lineHeight: 1.6 }}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Required Skills */}
                                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                        <Lightbulb size={24} color={current.color} />
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>필요한 역량</h3>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {current.requiredSkills.map((item, idx) => (
                                            <div key={idx}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                    <span style={{ color: 'white', fontWeight: '500' }}>{item.skill}</span>
                                                    <span style={{ color: current.color, fontWeight: 'bold' }}>{item.level}%</span>
                                                </div>
                                                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${item.level}%` }}
                                                        transition={{ duration: 1, delay: idx * 0.1 }}
                                                        style={{ height: '100%', background: current.color, borderRadius: '4px' }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Careers */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    <TrendingUp size={24} color={current.color} />
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>주요 진로</h3>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                                    {current.careers.map((career, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            style={{
                                                padding: '1rem',
                                                background: `${current.color}20`,
                                                border: `1px solid ${current.color}40`,
                                                borderRadius: '0.5rem',
                                                textAlign: 'center',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {career}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Roadmap */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                                    <Users size={24} color={current.color} />
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>학년별 로드맵</h3>
                                </div>
                                <div style={{ display: 'grid', gap: '1.5rem' }}>
                                    {current.roadmap.map((stage, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                            <div style={{
                                                minWidth: '80px',
                                                padding: '0.5rem 1rem',
                                                background: current.color,
                                                color: '#101227',
                                                borderRadius: '0.5rem',
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}>
                                                {stage.stage}
                                            </div>
                                            <p style={{ color: 'white', lineHeight: 1.6, paddingTop: '0.5rem' }}>{stage.focus}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Industries */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>관련 산업 분야</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {current.industries.map((industry, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '2rem',
                                                fontSize: '0.9rem',
                                                color: 'white'
                                            }}
                                        >
                                            {industry}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default MajorGuidePage;
