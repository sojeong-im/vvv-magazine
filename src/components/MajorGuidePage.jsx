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
            subMajors: [
                '컴퓨터공학', '소프트웨어학과', '전자공학', '정보통신공학',
                '인공지능학과', '데이터사이언스', '사이버보안학과', '기계공학'
            ],
            employmentRate: '75%',
            avgSalary: '3,500만원 ~ 6,000만원',
            jobProspect: '매우 높음 (AI, 클라우드, 보안 등 신규 수요 지속 증가)',
            recommendedFor: [
                '논리적이고 체계적인 사고를 선호하는 분',
                '새로운 기술과 트렌드에 관심이 많은 분',
                '문제를 분석하고 해결하는 과정을 즐기는 분',
                '끊임없이 배우고 성장하려는 의지가 있는 분',
                '수학과 과학에 흥미가 있는 분'
            ],
            requiredSkills: [
                { skill: '논리적 사고력', level: 90 },
                { skill: '문제 해결 능력', level: 95 },
                { skill: '수학적 기초', level: 80 },
                { skill: '창의력', level: 75 }
            ],
            careers: [
                { job: '소프트웨어 엔지니어', salary: '4,000~8,000만원' },
                { job: '데이터 사이언티스트', salary: '4,500~9,000만원' },
                { job: '인공지능 연구원', salary: '5,000~1억원+' },
                { job: 'DevOps 엔지니어', salary: '4,000~7,000만원' },
                { job: '보안 전문가', salary: '4,500~8,000만원' },
                { job: 'IT 컨설턴트', salary: '4,000~7,000만원' },
                { job: '클라우드 아키텍트', salary: '5,000~9,000만원' },
                { job: '게임 개발자', salary: '3,500~7,000만원' }
            ],
            certifications: [
                '정보처리기사', 'SQLD/SQLP', 'AWS/Azure 자격증',
                'CKAD/CKA (Kubernetes)', '네트워크관리사', 'OCP (Oracle Certified Professional)'
            ],
            essentialCourses: [
                '자료구조', '알고리즘', '운영체제', '데이터베이스',
                '컴퓨터 네트워크', '소프트웨어 공학', '인공지능', '클라우드 컴퓨팅'
            ],
            activities: [
                { type: '동아리', examples: '알고리즘 스터디, 해커톤 동아리, 개발 커뮤니티' },
                { type: '공모전', examples: 'ICT 어워드, 앱 개발 공모전, AI 해커톤' },
                { type: '대외활동', examples: 'IT 기업 인턴, 오픈소스 컨트리뷰션, 부트캠프' }
            ],
            insiderTips: [
                '1학년부터 꾸준히 코딩하는 습관이 가장 중요합니다',
                '포트폴리오는 GitHub에 체계적으로 관리하세요',
                '최신 기술 트렌드를 놓치지 말고 따라가세요',
                '프로젝트 경험이 이론보다 중요합니다',
                '개발자 커뮤니티에서 활발히 활동하세요'
            ],
            roadmap: [
                { stage: '1학년', focus: '프로그래밍 기초 (C, Python, Java), 자료구조, 알고리즘, 수학 기초' },
                { stage: '2학년', focus: '운영체제, 데이터베이스, 네트워크, 웹 개발 기초, 첫 프로젝트' },
                { stage: '3학년', focus: '전공 심화 (AI, 보안, 클라우드), 팀 프로젝트, 인턴십, 포트폴리오 구축' },
                { stage: '4학년', focus: '포트폴리오 완성, 오픈소스 기여, 코딩테스트 준비, 취업/대학원' }
            ],
            industries: ['IT/소프트웨어', '금융IT', '제조/자동차', '스타트업', '연구소', '대기업', '게임', 'AI/빅데이터']
        },
        arts: {
            id: 'arts',
            icon: <PenTool size={40} />,
            title: '예체능계열',
            color: '#ec4899',
            description: '창의력과 감성으로 세상에 영감을 주는 크리에이터. 예술과 디자인으로 새로운 가치를 창출합니다.',
            subMajors: [
                '시각디자인', 'UI/UX 디자인', '산업디자인', '패션디자인',
                '영상/영화', '광고홍보', '음악', '체육학과'
            ],
            employmentRate: '65%',
            avgSalary: '2,800만원 ~ 5,000만원 (프리랜서 변동 큼)',
            jobProspect: '높음 (디지털 콘텐츠, 메타버스 등 새로운 시장 형성)',
            recommendedFor: [
                '창의적 표현과 예술적 감각이 뛰어난 분',
                '시각적/청각적 감수성이 풍부한 분',
                '트렌드에 민감하고 새로운 시도를 즐기는 분',
                '자신만의 스타일을 만들어가고 싶은 분',
                '끈기 있게 작업에 몰두할 수 있는 분'
            ],
            requiredSkills: [
                { skill: '창의력', level: 95 },
                { skill: '미적 감각', level: 90 },
                { skill: '표현력', level: 85 },
                { skill: '트렌드 감각', level: 80 }
            ],
            careers: [
                { job: 'UX/UI 디자이너', salary: '3,500~7,000만원' },
                { job: '브랜드 디자이너', salary: '3,000~6,000만원' },
                { job: '영상 크리에이터', salary: '3,000~8,000만원 (프리랜서)' },
                { job: '패션 디자이너', salary: '2,800~6,000만원' },
                { job: '아트 디렉터', salary: '4,000~8,000만원' },
                { job: '공연 기획자', salary: '3,000~5,500만원' },
                { job: '게임 아티스트', salary: '3,500~6,500만원' },
                { job: '광고 크리에이터', salary: '3,500~7,000만원' }
            ],
            certifications: [
                'GTQ (그래픽)', 'ACA (Adobe Certified Associate)',
                '컬러리스트', '웹디자인기능사', '시각디자인산업기사', '멀티미디어콘텐츠제작전문가'
            ],
            essentialCourses: [
                '기초 조형', '드로잉', '타이포그래피', '색채학',
                '디지털 디자인', '브랜딩', '영상 편집', '3D 모델링'
            ],
            activities: [
                { type: '공모전', examples: '디자인 공모전, 광고 대상, 영상 페스티벌' },
                { type: '전시/발표', examples: '개인전, 그룹전, 졸업 전시회, 포트폴리오 리뷰' },
                { type: '인턴', examples: '광고 대행사, 디자인 스튜디오, 방송국 인턴' }
            ],
            insiderTips: [
                '포트폴리오가 곧 실력입니다. 퀄리티를 최우선으로!',
                'Adobe 툴 (Photoshop, Illustrator, Premiere) 능숙하게 다루기',
                '개인 브랜딩과 SNS 활용이 중요합니다',
                '트렌드를 따라가되, 자신만의 스타일을 만드세요',
                '공모전과 전시는 적극적으로 참여하세요'
            ],
            roadmap: [
                { stage: '1학년', focus: '기초 조형, 드로잉, 디자인 툴 익히기, 색채학, 타이포그래피' },
                { stage: '2학년', focus: '전공 도구 활용 심화, 개인 작업 시작, 포트폴리오 기초 구축' },
                { stage: '3학년', focus: '실전 프로젝트, 공모전 참여, 인턴십, 개인 브랜딩' },
                { stage: '4학년', focus: '졸업 작품 제작, 포트폴리오 완성, 전시회, 취업/프리랜서' }
            ],
            industries: ['디자인 에이전시', '광고/마케팅', '엔터테인먼트', '게임', '패션', '스타트업', '방송/영상', '출판']
        },
        business: {
            id: 'business',
            icon: <Briefcase size={40} />,
            title: '상경계열',
            color: '#3b82f6',
            description: '비즈니스의 중심에서 전략을 세우고 실행하는 리더. 경제와 경영으로 조직을 성장시킵니다.',
            subMajors: [
                '경영학과', '경제학과', '회계학과', '금융학과',
                '마케팅', '국제통상', '경영정보학', '세무학과'
            ],
            employmentRate: '70%',
            avgSalary: '3,200만원 ~ 5,500만원',
            jobProspect: '높음 (전통 산업 외 스타트업, 컨설팅 등 다양화)',
            recommendedFor: [
                '리더십과 조직 관리에 관심이 많은 분',
                '경제 흐름과 시장 변화에 민감한 분',
                '의사결정과 전략 수립을 즐기는 분',
                '숫자와 데이터 분석에 거부감이 없는 분',
                '소통과 협업을 중요하게 생각하는 분'
            ],
            requiredSkills: [
                { skill: '분석적 사고', level: 85 },
                { skill: '의사소통 능력', level: 90 },
                { skill: '리더십', level: 80 },
                { skill: '협상력', level: 75 }
            ],
            careers: [
                { job: '경영 컨설턴트', salary: '4,500~1억원+' },
                { job: '마케팅 전문가', salary: '3,500~7,000만원' },
                { job: '재무 분석가', salary: '4,000~8,000만원' },
                { job: '투자 심사역', salary: '4,500~1억원+' },
                { job: '전략 기획자', salary: '4,000~7,500만원' },
                { job: '회계사', salary: '5,000~1억원+' },
                { job: '증권 애널리스트', salary: '4,500~9,000만원' },
                { job: 'HR 매니저', salary: '3,500~6,500만원' }
            ],
            certifications: [
                'CPA (공인회계사)', 'CFA (재무분석사)', 'FRM (금융위험관리사)',
                '펀드투자권유자문인력', '증권투자권유자문인력', 'AFPK', 'ERP 정보관리사'
            ],
            essentialCourses: [
                '재무관리', '마케팅원론', '회계원리', '경제학',
                '경영전략', '조직행동론', '투자론', '데이터 분석'
            ],
            activities: [
                { type: '동아리', examples: '투자 동아리, 마케팅 동아리, 창업 동아리' },
                { type: '공모전', examples: '마케팅 공모전, 경영전략 케이스 경진대회, 창업 아이디어 대회' },
                { type: '인턴/대외활동', examples: '대기업 인턴, 컨설팅펌 인턴, 금융권 인턴' }
            ],
            insiderTips: [
                '회계와 재무는 필수! 탄탄한 기초를 다지세요',
                'Excel, PowerPoint는 고급 스킬까지 익히세요',
                '케이스 스터디를 많이 풀어보세요',
                '인턴 경험이 매우 중요합니다',
                '네트워킹과 인적 자본을 쌓으세요'
            ],
            roadmap: [
                { stage: '1학년', focus: '경영/경제 기초, 회계 원리, Excel 기초, 영어 회화' },
                { stage: '2학년', focus: '마케팅, 재무, 조직 이론, 데이터 분석, 공모전 참여' },
                { stage: '3학년', focus: '전략, 심화 과목, 인턴십, 자격증 준비, 케이스 경진대회' },
                { stage: '4학년', focus: '케이스 스터디 마스터, 인턴/계약직 경험, 자격증 취득, 취업' }
            ],
            industries: ['대기업', '컨설팅', '금융', '스타트업', '마케팅 에이전시', '유통/리테일', '회계법인', 'VC/PE']
        },
        humanities: {
            id: 'humanities',
            icon: <GraduationCap size={40} />,
            title: '인문사회계열',
            color: '#8b5cf6',
            description: '인간과 사회를 깊이 이해하고 통찰하는 사색가. 비판적 사고로 세상을 읽어냅니다.',
            subMajors: [
                '국어국문학', '영어영문학', '사회학', '심리학',
                '행정학', '정치외교학', '법학', '교육학'
            ],
            employmentRate: '62%',
            avgSalary: '3,000만원 ~ 4,800만원',
            jobProspect: '보통 (전통 진로 외 콘텐츠, 에듀테크 등 신규 분야 증가)',
            recommendedFor: [
                '책 읽기와 글쓰기를 좋아하는 분',
                '사회 문제와 인간에 대한 관심이 깊은 분',
                '분석적이고 비판적으로 사고하는 분',
                '언어 감각과 표현력이 뛰어난 분',
                '연구와 학술 활동에 흥미가 있는 분'
            ],
            requiredSkills: [
                { skill: '비판적 사고', level: 90 },
                { skill: '언어 능력', level: 95 },
                { skill: '공감 능력', level: 85 },
                { skill: '통찰력', level: 88 }
            ],
            careers: [
                { job: '기자/에디터', salary: '3,200~6,000만원' },
                { job: '변호사', salary: '5,000~2억원+' },
                { job: '정책 연구원', salary: '3,500~6,500만원' },
                { job: '교사/교수', salary: '3,500~7,000만원' },
                { job: '콘텐츠 크리에이터', salary: '3,000~8,000만원 (변동)' },
                { job: 'HR 전문가', salary: '3,500~6,500만원' },
                { job: '출판 기획자', salary: '2,800~5,000만원' },
                { job: '상담사/심리전문가', salary: '3,000~6,000만원' }
            ],
            certifications: [
                '한국사능력검정시험', '토익/토스', '논술지도사',
                '심리상담사', '사회조사분석사', '평생교육사', '청소년상담사'
            ],
            essentialCourses: [
                '사회학 개론', '심리학 개론', '문학 이론', '철학',
                '문화 연구', '사회 조사 방법', '글쓰기', '외국어'
            ],
            activities: [
                { type: '동아리', examples: '학술 동아리, 독서 토론, 문창과, 교지 편집부' },
                { type: '공모전', examples: '논문 공모전, 에세이 대회, 정책 제안 공모전' },
                { type: '대외활동', examples: '언론사 인턴, NGO 활동, 교육 봉사, 연구 보조' }
            ],
            insiderTips: [
                '글쓰기 실력은 모든 분야에서 경쟁력입니다',
                '외국어 능력을 꾸준히 키우세요 (영어, 제2외국어)',
                '복수전공/부전공으로 실용 학문을 추가하세요',
                '학술 활동과 연구 경험을 쌓으세요',
                '사회 이슈에 관심을 갖고 비판적으로 분석하세요'
            ],
            roadmap: [
                { stage: '1학년', focus: '전공 기초, 글쓰기 훈련, 외국어 공부, 교양 폭넓게 수강' },
                { stage: '2학년', focus: '이론 심화, 세미나/토론 참여, 복수전공 시작, 독서량 늘리기' },
                { stage: '3학년', focus: '논문 작성, 현장 경험 (인턴/봉사), 공모전, 자격증 준비' },
                { stage: '4학년', focus: '학술 활동, 졸업 논문, 자격증 취득, 진로 탐색 (대학원/취업)' }
            ],
            industries: ['언론/미디어', '출판', '교육', '공공기관', '법률', '문화예술', 'NGO/NPO', '컨설팅']
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
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>{current.description}</p>

                                {/* Stats Grid */}
                                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 640 ? 'repeat(3, 1fr)' : '1fr', gap: '1.5rem', marginTop: '2rem' }}>
                                    <div style={{ padding: '1.5rem', background: `${current.color}10`, borderRadius: '0.75rem', border: `1px solid ${current.color}30` }}>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>취업률</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: current.color }}>{current.employmentRate}</div>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: `${current.color}10`, borderRadius: '0.75rem', border: `1px solid ${current.color}30` }}>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>평균 연봉</div>
                                        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: current.color }}>{current.avgSalary}</div>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: `${current.color}10`, borderRadius: '0.75rem', border: `1px solid ${current.color}30`, gridColumn: window.innerWidth > 640 ? 'span 1' : 'auto' }}>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>전망</div>
                                        <div style={{ fontSize: '1rem', fontWeight: '600', color: 'white', lineHeight: 1.4 }}>{current.jobProspect}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Sub Majors */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>세부 전공</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {current.subMajors.map((subMajor, idx) => (
                                        <span key={idx} style={{
                                            padding: '0.6rem 1.2rem',
                                            background: `${current.color}20`,
                                            border: `1px solid ${current.color}40`,
                                            borderRadius: '2rem',
                                            fontSize: '0.95rem',
                                            color: 'white',
                                            fontWeight: '500'
                                        }}>
                                            {subMajor}
                                        </span>
                                    ))}
                                </div>
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

                            {/* Careers with Salary */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    <TrendingUp size={24} color={current.color} />
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>주요 진로 및 연봉</h3>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 640 ? 'repeat(2, 1fr)' : '1fr', gap: '1rem' }}>
                                    {current.careers.map((career, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            style={{
                                                padding: '1.2rem',
                                                background: `${current.color}15`,
                                                border: `1px solid ${current.color}30`,
                                                borderRadius: '0.75rem'
                                            }}
                                        >
                                            <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>{career.job}</div>
                                            <div style={{ fontSize: '0.9rem', color: current.color, fontWeight: '500' }}>{career.salary}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>추천 자격증</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {current.certifications.map((cert, idx) => (
                                        <span key={idx} style={{
                                            padding: '0.6rem 1.2rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            borderRadius: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'white'
                                        }}>
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Essential Courses */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>필수 과목</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 640 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)', gap: '0.75rem' }}>
                                    {current.essentialCourses.map((course, idx) => (
                                        <div key={idx} style={{
                                            padding: '0.8rem',
                                            background: `${current.color}10`,
                                            border: `1px solid ${current.color}20`,
                                            borderRadius: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'white',
                                            textAlign: 'center',
                                            fontWeight: '500'
                                        }}>
                                            {course}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Activities */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>추천 활동</h3>
                                <div style={{ display: 'grid', gap: '1.5rem' }}>
                                    {current.activities.map((activity, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                            <div style={{
                                                minWidth: '100px',
                                                padding: '0.5rem 1rem',
                                                background: current.color,
                                                color: '#101227',
                                                borderRadius: '0.5rem',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                fontSize: '0.9rem'
                                            }}>
                                                {activity.type}
                                            </div>
                                            <p style={{ color: 'white', lineHeight: 1.6, paddingTop: '0.3rem' }}>{activity.examples}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Insider Tips */}
                            <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '2rem', background: `${current.color}10`, border: `2px solid ${current.color}30` }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: current.color }}>현직자 조언</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {current.insiderTips.map((tip, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <span style={{ color: current.color, fontSize: '1.2rem', fontWeight: 'bold', minWidth: '24px' }}>•</span>
                                            <span style={{ color: 'white', lineHeight: 1.6, fontSize: '1.05rem' }}>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
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
