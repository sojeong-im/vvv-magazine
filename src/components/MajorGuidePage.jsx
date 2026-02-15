import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, PenTool, Briefcase, GraduationCap, Target, ArrowRight, Map, MessageSquare, Briefcase as JobIcon, BookOpen, UserCircle, Microscope, Tv, HeartPulse } from 'lucide-react';

const MajorGuidePage = () => {
    const [selectedMajor, setSelectedMajor] = useState('tech');
    const [activeTab, setActiveTab] = useState('roadmap');

    const majors = {
        tech: {
            id: 'tech',
            icon: <Code size={28} />,
            title: 'ENGINEERING & IT',
            koreanTitle: '공학 및 IT 계열',
            color: '#56d061',
            description: '기술로 세상을 설계하는 빌더. 논리적 사고와 문제 해결 능력이 필수입니다.',
            tags: ['#취업깡패', '#개발자', '#반도체', '#전화기'],
            stats: { employment: '82%', salary: '4,500~8,000' },
            roadmap: [
                { stage: '1학년', title: '수학/기초과학 & 학점 방어', desc: '미적분학, 물리학 등 기초 과목 학점 관리 필수. C언어/파이썬 찍먹하기.' },
                { stage: '2학년', title: '전공 심화 & 진로 탐색', desc: '4대 역학(기계) 또는 자료구조(컴공) 등 뼈대 과목 수강. 학부 연구생 체험 추천.' },
                { stage: '3학년', title: '기사 자격증 & 프로젝트', desc: '일반기계기사, 정보처리기사 등 "쌍기사" 준비. 캡스톤 디자인 프로젝트 올인.' },
                { stage: '4학년', title: '직무 면접 & 코테 준비', desc: '기사 실기 취득. 대기업 인적성(GSAT/SKCT) 및 코딩테스트 집중, 직무 면접 스터디.' }
            ],
            careers: [
                { role: 'SW 개발자', wage: '초봉 4,500~8,000+', desc: '웹/앱/서버 개발. 실력 중심 채용. 포트폴리오(GitHub)가 곧 이력서.' },
                { role: '반도체 엔지니어', wage: '초봉 5,000~9,000+', desc: '설계, 공정, 장비 등. 삼성전자/SK하이닉스 타겟. 직무 관련 교육 이수 필수.' },
                { role: '기계/설비 엔지니어', wage: '초봉 4,000~7,000+', desc: '자동차, 플랜트, 건설. CAD/CAM 활용 능력 및 도면 해독 능력 중요.' },
                { role: 'R&D 연구원', wage: '초봉 4,500~8,000+', desc: '신기술 연구 개발. 학사보다는 석/박사 학위 우대 경향 강함.' }
            ],
            tips: [
                "전화기(전자/화공/기계)는 기사 자격증이 서류 프리패스권입니다. 3학년 겨울방학부터 따세요.",
                "컴공은 학벌보다 '깃허브 잔디'와 '코테 실력'입니다. 백준 골드 등급 목표로 하세요.",
                "학점이 3.5만 넘으면 된다지만, 대기업 R&D나 인기 직무는 4.0에 수렴해야 안전합니다.",
                "팀 프로젝트에서 '버스 기사'가 되세요. 자소서에 쓸 말이 10배로 늘어납니다."
            ]
        },
        business: {
            id: 'business',
            icon: <Briefcase size={28} />,
            title: 'BUSINESS',
            koreanTitle: '상경 계열',
            color: '#3b82f6',
            description: '숫자로 기업을 움직이는 전략가. 자본주의의 최전선에서 조직을 성장시킵니다.',
            tags: ['#경영전략', '#회계/재무', '#마케팅', '#CPA'],
            stats: { employment: '75%', salary: '3,800~7,000' },
            roadmap: [
                { stage: '1학년', title: '영어 & 회계 기초', desc: '토익/오픽 미리 끝내기. 회계원리 A+ 받기. 엑셀(컴활 1급) 따두면 인턴 프리패스.' },
                { stage: '2학년', title: '데이터 분석 & 대외활동', desc: 'SQL/파이썬 기초 익혀서 "데이터 볼 줄 아는 문과생" 되기. 마케팅 공모전 도전.' },
                { stage: '3학년', title: '전문 자격증 & 인턴', desc: 'CPA/CFA/세무사 등 전문직 고시 진입 결정. 또는 채용연계형 인턴 지원.' },
                { stage: '4학년', title: '직무 핏 & 실전 취준', desc: '산업군(IT/금융/유통) 확정. 자소서에 직무 경험 녹여내기. 면접 스터디.' }
            ],
            careers: [
                { role: '마케팅/기획', wage: '초봉 3,400~6,000+', desc: '데이터 기반 의사결정 능력 필수. 공모전 수상 및 인턴 경험 중요.' },
                { role: '재무/회계/세무', wage: '초봉 4,000~8,000+', desc: '기업의 언어인 숫자를 다룸. 꼼꼼함 필수. 자격증(CPA, 재경관리사) 위력적.' },
                { role: '금융권 (은행/증권)', wage: '초봉 5,000~9,000+', desc: '영업력과 전문성 동시에 요구. 디지털 역량(핀테크 이해) 강조 추세.' },
                { role: '영업관리/MD', wage: '초봉 3,800~6,500+', desc: '현장 중심 업무. 커뮤니케이션 능력과 체력, 목표 달성 의지 필요.' }
            ],
            tips: [
                "문과 취업의 치트키는 '직무 경험'입니다. 학점 4.5보다 인턴 1번이 더 강력합니다.",
                "엑셀(VLOOKUP, Pivot)은 숨 쉬듯이 해야 합니다. 면접에서 물어봅니다.",
                "금융권 갈 거 아니면 금융 자격증(투운사 등) 너무 많이 따지 마세요. 직무 연관성 먼저 체크.",
                "영업 관리는 생각보다 '체력' 싸움입니다. 면접 때 깡과 체력을 어필하세요."
            ]
        },
        arts: {
            id: 'arts',
            icon: <PenTool size={28} />,
            title: 'ARTS & DESIGN',
            koreanTitle: '디자인/예술 계열',
            color: '#ec4899',
            description: '감각으로 세상을 설득하는 크리에이터. 트렌드를 읽고 새로운 가치를 창출합니다.',
            tags: ['#포트폴리오', '#UX/UI', '#브랜딩', '#금손'],
            stats: { employment: '65%', salary: '3,000~6,000' },
            roadmap: [
                { stage: '1학년', title: '툴 마스터 & 시각 훈련', desc: '어도비(Ps, Ai, Id) 단축키까지 마스터. 핀터레스트/비핸스 보며 눈 높이기.' },
                { stage: '2학년', title: '개인 작업 & 스타일링', desc: '자기만의 스타일 찾기. 인스타그램/블로그에 작업물 아카이빙 시작 (퍼스널 브랜딩).' },
                { stage: '3학년', title: '실무 프로젝트 & 외주', desc: '크몽/숨고 등에서 소소한 외주로 실무 맛보기. 산학협력 프로젝트 참여.' },
                { stage: '4학년', title: '졸업 전시 & 포트폴리오', desc: '모든 걸 갈아넣은 포트폴리오 완성(Behance 업로드). 에이전시 및 기업 지원.' }
            ],
            careers: [
                { role: 'UX/UI 디자이너', wage: '초봉 3,500~6,500+', desc: '사용자 경험 설계. 논리적 사고 필수. 피그마(Figma) 능숙도 중요.' },
                { role: '브랜드 디자이너', wage: '초봉 3,000~6,000+', desc: '기업의 비주얼 아이덴티티(BX) 구축. 로고부터 굿즈까지 총괄.' },
                { role: '영상/모션그래픽', wage: '초봉 3,200~무한대', desc: '유튜브, 광고, 숏폼. 프리미어/애프터이펙트. 워라밸 조절 능력 필요.' },
                { role: '패션/공간/산업', wage: '초봉 2,800~5,500+', desc: '트렌드에 민감해야 함. 야근이 잦을 수 있으나 포트폴리오로 이직 용이.' }
            ],
            tips: [
                "디자인만 예쁘면 탈락입니다. '왜' 이렇게 디자인했는지 논리적으로 설명(설득)해야 합니다.",
                "포트폴리오에 '기여도 100%' 개인 작업물을 꼭 넣으세요. 팀플은 실력 검증이 어렵습니다.",
                "코딩(HTML/CSS)을 조금이라도 알면 디자이너로서 몸값이 1.5배 뜁니다.",
                "교수님 피드백에 너무 상처받지 마세요. 클라이언트 피드백은 더 맵습니다."
            ]
        },
        media: {
            id: 'media',
            icon: <Tv size={28} />,
            title: 'MEDIA & CONTENTS',
            koreanTitle: '미디어/콘텐츠 계열',
            color: '#f97316',
            description: '콘텐츠로 사람을 움직이는 기획자. 영상, 텍스트, 플랫폼을 넘나드는 멀티 플레이어.',
            tags: ['#PD', '#마케터', '#유튜버', '#방송국'],
            stats: { employment: '70%', salary: '3,200~6,500' },
            roadmap: [
                { stage: '1학년', title: '덕질 & 콘텐츠 소비', desc: '유튜브, 넷플릭스, 틱톡 등 콘텐츠 헤비유저 되기. 트렌드 밈(Meme) 파악.' },
                { stage: '2학년', title: '제작 툴 습득 & 채널 운영', desc: '영상 편집(프리미어) 배우기. 직접 유튜브나 인스타 계정 키워보기 (구독자 1천명 목표).' },
                { stage: '3학년', title: '공모전 & 대외활동', desc: '제일기획/HS애드 등 메이저 공모전 도전. 방송국/대행사 보조 알바나 인턴.' },
                { stage: '4학년', title: '포폴 정리 & 언론고시', desc: '직접 만든 콘텐츠 성과(조회수, 좋아요) 정리. PD/아나운서 준비생은 언론고시 올인.' }
            ],
            careers: [
                { role: '콘텐츠 마케터', wage: '초봉 3,000~6,000+', desc: 'SNS 운영 및 바이럴 영상 기획. 카피라이팅 센스와 데이터 분석력 필요.' },
                { role: 'PD/영상제작', wage: '초봉 3,500~7,000+', desc: '방송국, 프로덕션, 기업 사내방송. 체력과 기획력이 9할. 편집은 기본.' },
                { role: '광고 기획자(AE)', wage: '초봉 3,500~6,500+', desc: '광고주 커뮤니케이션 및 캠페인 총괄. 야근 많지만 성취감 높음.' },
                { role: '언론인/에디터', wage: '초봉 3,200~6,000+', desc: '기자, 잡지 에디터. 글쓰기 능력과 취재력, 네트워킹 능력 필수.' }
            ],
            tips: [
                "영상 편집 툴 하나쯤은 무조건 다루세요. 이제 '필수 교양'입니다.",
                "자소서에 '소통왕'이라고 쓰지 말고, '인스타 팔로워 0명을 1만명으로 만든 노하우'를 쓰세요.",
                "광고 공모전은 수상 못 해도 포트폴리오에 넣기 가장 좋은 재료입니다.",
                "트렌드는 책으로 배우는 게 아닙니다. 틱톡과 릴스 랭킹을 매일 보세요."
            ]
        },
        science: {
            id: 'science',
            icon: <Microscope size={28} />,
            title: 'NATURAL SCIENCE',
            koreanTitle: '자연과학 계열',
            color: '#06b6d4',
            description: '기초 원리를 탐구하는 순수과학. R&D부터 품질관리까지 산업의 뿌리가 됩니다.',
            tags: ['#바이오', '#제약', '#연구원', '#변리사'],
            stats: { employment: '68%', salary: '3,800~7,500' },
            roadmap: [
                { stage: '1학년', title: '전공 기초 & 학점 관리', desc: '일반화학, 일반생물학 등 1학년 과목은 평생 갑니다. 무조건 A+ 목표.' },
                { stage: '2학년', title: '진로 갈림길 (PEET/변리사)', desc: '약대 편입(PEET)이나 변리사 등 전문직 시험 진입 여부 결정. 영어 점수 확보.' },
                { stage: '3학년', title: '실험실 컨택 & 기사 자격증', desc: '대학원 진학 시 랩실 인턴 필수. 취업 시 화학분석기사/품질경영기사 취득.' },
                { stage: '4학년', title: '석사 vs 취업', desc: 'R&D는 대학원 진학 추천. 취업(QC/QA) 희망 시 GMP 교육 이수 및 인턴.' }
            ],
            careers: [
                { role: 'QC/QA (품질)', wage: '초봉 3,800~7,000+', desc: '제약/바이오/식품 회사의 품질 관리. 꼼꼼함과 규정(GMP) 숙지 능력 필수.' },
                { role: 'R&D 연구원', wage: '초봉 4,000~8,000+', desc: '석/박사 학위 필수인 경우가 많음. 전문성이 높고 수명이 긴 편.' },
                { role: '제약 영업 (MR)', wage: '초봉 4,500~8,000+', desc: '약사/의사 대상 영업. 인센티브가 셈. 전공 지식으로 의사 소통 가능해야 함.' },
                { role: '변리사', wage: '초봉 6,000~1억+', desc: '특허 법률 전문가. 문과 8대 전문직보다 합격 난이도 극상. 합격 시 보장된 미래.' }
            ],
            tips: [
                "연구직(R&D) 가고 싶으면 대학원은 '선택'이 아니라 '필수'에 가깝습니다.",
                "학부 취업은 제약/바이오 회사의 품질(QC/QA) 직무가 가장 현실적이고 TO가 많습니다.",
                "영어가 생각보다 중요합니다. 해외 논문 읽어야 하고, 제약사는 외국계가 많습니다.",
                "PEET(약대)가 없어져도 편입 등 길은 있습니다. 정보력이 생명입니다."
            ]
        },
        health: {
            id: 'health',
            icon: <HeartPulse size={28} />,
            title: 'HEALTHCARE',
            koreanTitle: '보건/의료 계열',
            color: '#ef4444',
            description: '생명을 다루는 숭고한 전문직. 면허 취득이 곧 취업이지만, 실무 강도가 높습니다.',
            tags: ['#간호사', '#국가고시', '#병원', '#전문직'],
            stats: { employment: '90%+', salary: '3,800~6,000' },
            roadmap: [
                { stage: '1학년', title: '해부학과의 전쟁', desc: '인체해부학, 생리학 등 기초 의학 지식 암기. 멘탈 관리 중요.' },
                { stage: '2학년', title: '기본 간호 & 실습 준비', desc: '핵심 술기 익히기. 나이팅게일 선서식. 병원 실습 나가기 전 체력 키우기.' },
                { stage: '3학년', title: '병원 실습 (1000시간)', desc: '대학병원 임상 실습. 케이스 스터디 밤샘. 수면 부족 적응기.' },
                { stage: '4학년', title: '취업 & 국가고시', desc: '상반기 대형병원(빅5) 취업 시즌. 하반기 국가고시 올인 (합격률 95% 이상 목표).' }
            ],
            careers: [
                { role: '임상 간호사', wage: '초봉 4,000~6,000+', desc: '대학병원, 종합병원 근무. 3교대 근무의 체력적 부담 있으나 연봉과 복지 우수.' },
                { role: '보건직 공무원', wage: '초봉 3,000~ (호봉제)', desc: '보건소, 시청 근무. 워라밸 최상. 임상 경력 후 도전하는 경우 많음.' },
                { role: '산업 간호사', wage: '초봉 3,500~6,000+', desc: '기업체 내 의무실 근무. 경쟁률 치열함. 임상 경력 필수.' },
                { role: '임상 데이터 관리(CRA)', wage: '초봉 4,000~7,000+', desc: '제약회사 임상시험 모니터링. 영어 능력 중요. 탈임상의 대표 루트.' }
            ],
            tips: [
                "BIG 5 병원 취업하려면 학점 상위 10-20%와 토익 850+은 맞춰두세요.",
                "실습 때 선생님 눈밖에 나지 마세요. 태도 점수가 생각보다 큽니다.",
                "탈임상(병원 그만두기)을 하더라도 최소 1~2년 임상 경력은 있어야 갈 곳이 많습니다.",
                "체력이 국력입니다. 운동 하나쯤은 취미로 만드세요."
            ]
        }
    };

    const currentMajor = majors[selectedMajor];

    return (
        <div style={{ background: '#fff', minHeight: '100vh', color: '#000', paddingTop: 'var(--nav-height)' }}>
            <Helmet>
                <title>전공 가이드 | VVV 매거진</title>
                <meta name="description" content="전공별 현실적인 취업 로드맵과 현직자의 뼈 때리는 조언. 공학, 예체능, 상경, 미디어, 자연과학, 보건 계열 완전 정복." />
            </Helmet>

            {/* Header */}
            <header style={{
                padding: '6rem 0 4rem',
                borderBottom: '4px solid #000',
                position: 'relative',
                backgroundSize: '20px 20px',
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)'
            }}>
                <div className="container">
                    <span style={{
                        display: 'inline-block',
                        background: '#000',
                        color: 'var(--primary)',
                        padding: '0.4rem 1rem',
                        marginBottom: '1.5rem',
                        fontWeight: 700,
                        border: '2px solid #000',
                        boxShadow: '4px 4px 0 #fff'
                    }}>
                        CAREER ROADMAP 2026
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontFamily: 'var(--font-main)',
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        wordBreak: 'keep-all'
                    }}>
                        전공별<br />
                        <span style={{
                            background: '#000',
                            color: '#fff',
                            padding: '0 10px',
                            display: 'inline-block',
                            transform: 'rotate(-1deg)'
                        }}>생존 가이드 V2</span>
                    </h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.3rem', lineHeight: 1.5, fontWeight: 600, borderLeft: '4px solid #000', paddingLeft: '1.5rem' }}>
                        범위를 더 넓히고, 내용은 더 깊게 팠습니다.<br />
                        <b>미디어, 자연과학, 보건계열</b>까지 완벽 커버.
                    </p>
                </div>
            </header>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div className="major-content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

                    {/* Sidebar / List */}
                    <aside style={{ flex: '0 0 300px' }}>
                        <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {Object.values(majors).map((major) => (
                                <button
                                    key={major.id}
                                    onClick={() => { setSelectedMajor(major.id); setActiveTab('roadmap'); }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1.2rem',
                                        background: selectedMajor === major.id ? '#000' : '#fff',
                                        color: selectedMajor === major.id ? 'var(--primary)' : '#000',
                                        border: '3px solid #000',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        boxShadow: selectedMajor === major.id ? '6px 6px 0px var(--primary)' : '3px 3px 0px rgba(0,0,0,0.1)',
                                        transform: selectedMajor === major.id ? 'translate(-3px, -3px)' : 'none',
                                        transition: 'all 0.1s'
                                    }}
                                >
                                    <div style={{ minWidth: '30px' }}>{major.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>{major.title}</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{major.koreanTitle}</div>
                                    </div>
                                    {selectedMajor === major.id && <ArrowRight size={18} style={{ marginLeft: 'auto' }} />}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main style={{ gridColumn: 'span 2' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedMajor}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    border: '3px solid #000',
                                    background: '#fff',
                                    boxShadow: '12px 12px 0px #000',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Major Header */}
                                <div style={{ padding: '3rem', borderBottom: '3px solid #000', background: currentMajor.color }}>
                                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {currentMajor.tags.map(tag => (
                                            <span key={tag} style={{ background: '#000', color: '#fff', padding: '4px 10px', fontSize: '0.85rem', fontWeight: 700, border: '1px solid #000' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-main)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1 }}>
                                        {currentMajor.koreanTitle}
                                    </h2>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.5, maxWidth: '90%' }}>
                                        {currentMajor.description}
                                    </p>

                                    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', fontWeight: 800 }}>
                                        <div>
                                            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>평균 취업률</div>
                                            <div style={{ fontSize: '1.5rem' }}>{currentMajor.stats.employment}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>신입 초봉</div>
                                            <div style={{ fontSize: '1.5rem' }}>{currentMajor.stats.salary} <span style={{ fontSize: '0.9rem' }}>만원</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div style={{ display: 'flex', borderBottom: '3px solid #000', overflowX: 'auto' }}>
                                    {[
                                        { id: 'roadmap', label: '학년별 로드맵', icon: <Map size={18} /> },
                                        { id: 'careers', label: '진출 분야 & 연봉', icon: <Briefcase size={18} /> },
                                        { id: 'tips', label: '현직자 뼈조언', icon: <MessageSquare size={18} /> }
                                    ].map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            style={{
                                                flex: 1,
                                                minWidth: '130px',
                                                padding: '1.2rem',
                                                background: activeTab === tab.id ? '#fff' : '#e5e5e5',
                                                borderRight: '1px solid #000',
                                                border: 'none',
                                                borderRight: '2px solid #000',
                                                borderBottom: activeTab === tab.id ? 'none' : '2px solid #000',
                                                cursor: 'pointer',
                                                fontWeight: 800,
                                                fontSize: '0.95rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem',
                                                transition: 'all 0.2s',
                                                color: activeTab === tab.id ? '#000' : '#666'
                                            }}
                                        >
                                            {tab.icon} {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Content */}
                                <div style={{ padding: '2.5rem' }}>
                                    {activeTab === 'roadmap' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                            {currentMajor.roadmap.map((step, idx) => (
                                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                                    <div style={{
                                                        flex: '0 0 70px',
                                                        height: '70px',
                                                        background: '#000',
                                                        color: '#fff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontWeight: 800,
                                                        fontSize: '1.1rem',
                                                        border: '3px solid #000',
                                                        boxShadow: '4px 4px 0 var(--primary)'
                                                    }}>
                                                        {step.stage}
                                                    </div>
                                                    <div>
                                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.4rem' }}>{step.title}</h4>
                                                        <p style={{ lineHeight: 1.6, fontSize: '1.05rem', color: '#333', fontWeight: 500 }}>{step.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'careers' && (
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                                            {currentMajor.careers.map((job, idx) => (
                                                <div key={idx} style={{ border: '2px solid #000', padding: '1.5rem', background: '#f8f8f8' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                                                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{job.role}</h4>
                                                        <JobIcon size={20} opacity={0.5} />
                                                    </div>
                                                    <div style={{ fontWeight: 700, color: '#000', marginBottom: '1rem', background: 'var(--primary)', display: 'inline-block', padding: '2px 8px', fontSize: '0.9rem', border: '1px solid #000' }}>
                                                        {job.wage}
                                                    </div>
                                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#444' }}>{job.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'tips' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                            {currentMajor.tips.map((tip, idx) => (
                                                <div key={idx} style={{
                                                    background: '#fff',
                                                    border: '2px solid #000',
                                                    padding: '1.5rem',
                                                    display: 'flex',
                                                    gap: '1rem',
                                                    boxShadow: '5px 5px 0 rgba(0,0,0,0.1)',
                                                    alignItems: 'flex-start'
                                                }}>
                                                    <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>📣</div>
                                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.5, wordBreak: 'keep-all' }}>{tip}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MajorGuidePage;
