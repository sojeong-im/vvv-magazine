import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Hash } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 }
    })
};

const ArticleGungmunPage = () => {
    return (
        <div style={{ background: '#fff', color: '#000', minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
            <Helmet>
                <title>학과시식코너 — 국문과 편 | VVV 매거진</title>
                <meta name="description" content="서울대학교 국어국문학과 3학년 포차코의 리얼 인터뷰. '문송합니다'는 옛말? 국문과의 낭만과 현실을 파헤칩니다." />
            </Helmet>

            {/* ── COVER ── */}
            <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '4px solid #000' }}>
                {/* 배경 대형 한자 텍스트 */}
                <div aria-hidden="true" style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    fontSize: 'clamp(8rem, 25vw, 22rem)',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    opacity: 0.18,
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    letterSpacing: '-0.05em',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                }}>
                    國語國文國語
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, padding: '6rem 0 4rem' }}>
                    <Link to="/major-guide" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', color: '#000', marginBottom: '3rem', border: '2px solid #000', padding: '8px 16px' }}>
                        <ArrowLeft size={16} /> 전공 가이드로 돌아가기
                    </Link>

                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {['interview', '학과시식코너', '인문계열'].map(tag => (
                            <span key={tag} style={{ border: '2px solid #000', padding: '4px 14px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.03em' }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeUp}
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 8rem)',
                            fontWeight: 900,
                            lineHeight: 1.05,
                            letterSpacing: '-0.03em',
                            wordBreak: 'keep-all',
                            marginBottom: '1.5rem'
                        }}
                    >
                        학과시식코너<br />
                        <span style={{ color: 'var(--primary)', WebkitTextStroke: '2px #000' }}>국문과</span> 편
                    </motion.h1>

                    <motion.p
                        initial="hidden" animate="visible" custom={1} variants={fadeUp}
                        style={{ fontSize: '1.3rem', fontWeight: 600, lineHeight: 1.6, maxWidth: '560px', borderLeft: '4px solid #000', paddingLeft: '1.2rem', wordBreak: 'keep-all' }}
                    >
                        #문학 그리고 #낭만<br />
                        서울대 국문과 3학년에게 직접 물었습니다.
                    </motion.p>
                </div>
            </section>

            {/* ── 국어국문 정의 카드 ── */}
            <section style={{ borderBottom: '4px solid #000', background: '#000', color: '#fff' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ display: 'inline-block', border: '2px solid var(--primary)', color: 'var(--primary)', padding: '4px 16px', fontWeight: 800, fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>
                            DEFINITION
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', wordBreak: 'keep-all' }}>
                            국어국문<sup style={{ fontSize: '0.4em', verticalAlign: 'super' }}>2)</sup>
                        </h2>
                        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: 1.8, maxWidth: '700px', fontWeight: 400, wordBreak: 'keep-all', borderBottom: '1px solid #444', paddingBottom: '2rem', marginBottom: '2rem' }}>
                            한국어와 한국문학을 연구하는 학문 분야. <strong>국어학</strong>은 우리말의 구조·역사·의미를 탐구하는 학문이며, <strong>국문학</strong>은 한국 문학 작품과 작가, 문학사·비평 등을 다루는 학문이다. 국어국문학과는 이러한 <mark style={{ background: 'var(--primary)', color: '#000', padding: '0 4px' }}>국어와 국문학을 종합적으로 교육하고 연구하는 대학의 학과</mark>를 이른다.
                        </p>
                        <p style={{ fontSize: '1rem', color: '#aaa', fontWeight: 500 }}>
                            — 서울대학교 국어국문학과 3학년 포차코 인터뷰 중
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── 도입부: 낭만어부 레퍼런스 ── */}
            <section style={{ borderBottom: '4px solid #000', background: '#f5f5f5' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                            INTRO
                        </div>
                        {/* 낭만어부 인용 카드 */}
                        <div style={{ border: '3px solid #000', padding: '2.5rem', background: '#fff', boxShadow: '8px 8px 0 #000', maxWidth: '700px', marginBottom: '3rem' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#888', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                                출처: KBS 다큐3일 낭만어부 편
                            </div>
                            <p style={{ fontSize: '1.5rem', fontWeight: 800, fontStyle: 'italic', lineHeight: 1.5, wordBreak: 'keep-all', borderLeft: '5px solid var(--primary)', paddingLeft: '1.2rem' }}>
                                "전 있잖아요, 국문학과를 가고 싶었어요"
                            </p>
                            <p style={{ fontSize: '0.95rem', color: '#555', marginTop: '0.8rem', fontWeight: 500 }}>— 고석길 선장님</p>
                        </div>
                        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.9, fontWeight: 500, wordBreak: 'keep-all', maxWidth: '700px' }}>
                            <strong>'문송합니다'</strong>라는 자조적인 신조어가 등장한 지도 어느덧 10년. 하지만 '낭만어부'라는 이름으로 국문학의 꿈을 노래하는 고석길 선장님의 몇 분짜리 영상에 왜 그렇게 많은 청춘들이 열광할까요?
                        </p>
                        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.9, fontWeight: 500, wordBreak: 'keep-all', maxWidth: '700px', marginTop: '1.2rem' }}>
                            변하지 않는 낭만을 다시 불러내는 '낭만 리부트'가 새로운 세대의 감성이 된 지금. 어느 학과보다 낭만을 말하는 학과, <strong>학과 시식코너 국어국문학과 편</strong>, 지금 시작합니다!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── 인터뷰이 소개 ── */}
            <section style={{ borderBottom: '4px solid #000' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}
                    >
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                                Q. 간단한 자기소개
                            </div>
                            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.8, fontWeight: 500, wordBreak: 'keep-all' }}>
                                서울대학교 국어국문학과 3학년 재학 중인 22살 <strong>포차코</strong>(닉네임)입니다.
                            </p>
                            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.8, fontWeight: 500, wordBreak: 'keep-all', marginTop: '1rem' }}>
                                포차코 캐릭터를 좋아하고, 어렸을 때부터 케이팝을 좋아해서 <strong>춤 동아리</strong>에서도 활동하고 있습니다. <strong>언론정보학과를 복수 전공</strong>하며 진로를 탐색하고 있습니다.
                            </p>
                        </div>

                        <div style={{ border: '3px solid #000', padding: '2.5rem', boxShadow: '8px 8px 0 #000' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐾</div>
                            <div style={{ fontWeight: 900, fontSize: '1.8rem', marginBottom: '0.5rem' }}>포차코</div>
                            <div style={{ fontWeight: 600, color: '#555', marginBottom: '1.5rem' }}>닉네임 (본명 비공개)</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {[
                                    { label: '학교', value: '서울대학교' },
                                    { label: '학과', value: '국어국문학과' },
                                    { label: '학년', value: '3학년' },
                                    { label: '나이', value: '22살' },
                                    { label: '복전', value: '언론정보학과' },
                                    { label: '동아리', value: '춤 동아리 🕺' },
                                ].map(item => (
                                    <div key={item.label} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 700, minWidth: '50px', color: '#888', fontSize: '0.9rem' }}>{item.label}</span>
                                        <span style={{ fontWeight: 600 }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Q. 무엇을 배우나요? ── */}
            <section style={{ borderBottom: '4px solid #000', background: '#f9f9f9' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                            Q. 국어국문학과에서는 무엇을 배우나요?
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '2.5rem', wordBreak: 'keep-all', lineHeight: 1.3 }}>
                            "한국어 어휘론, 한국어의 역사,<br />고문헌과 시와 소설 등 다양한 것을 배웁니다."
                        </h2>

                        {/* 배우는 것들 그리드 */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', marginBottom: '3rem' }}>
                            {[
                                { emoji: '📖', subject: '한국어 어휘론', desc: '단어의 의미와 구조 탐구' },
                                { emoji: '📜', subject: '한국어의 역사', desc: '훈민정음부터 현대어까지' },
                                { emoji: '🏛️', subject: '고문헌 강독', desc: '옛 문헌을 직접 읽고 해석' },
                                { emoji: '✍️', subject: '시와 소설', desc: '한국 문학 작품 심층 분석' },
                                { emoji: '🎭', subject: '현대문학', desc: '사회적 맥락과 연결해서 읽기' },
                                { emoji: '📝', subject: '문법 공부', desc: '일상에서 실질적으로 쓰이는 언어' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden" whileInView="visible" custom={idx * 0.3} viewport={{ once: true }} variants={fadeUp}
                                    style={{
                                        border: '2px solid #000',
                                        marginLeft: idx > 0 ? '-2px' : 0,
                                        marginTop: idx >= 3 ? '-2px' : 0,
                                        padding: '2rem 1.5rem',
                                        background: idx % 2 === 0 ? '#fff' : '#000',
                                        color: idx % 2 === 0 ? '#000' : '#fff',
                                    }}
                                    whileHover={{ scale: 1.02, zIndex: 1 }}
                                >
                                    <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{item.emoji}</div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.4rem', wordBreak: 'keep-all' }}>{item.subject}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.75, wordBreak: 'keep-all', lineHeight: 1.5 }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* 포차코의 관심사 */}
                        <div style={{ background: '#fff', border: '3px solid #000', padding: '2.5rem', boxShadow: '6px 6px 0 #000', maxWidth: '700px' }}>
                            <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.1em' }}>포차코의 한마디</div>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 500, wordBreak: 'keep-all' }}>
                                "저는 문학보다는 <strong>문법 공부</strong>에 관심이 있는데 말하고 쓸 때 일상에서 실질적으로 사용되는 부분이라 그런 것 같습니다."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── #문학 vs #낭만 ── */}
            <section style={{ borderBottom: '4px solid #000', background: '#000', color: '#fff' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                            <span style={{ background: 'var(--primary)', color: '#000', fontWeight: 900, fontSize: '1.5rem', padding: '6px 20px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Hash size={20} />문학
                            </span>
                            <span style={{ border: '3px solid #fff', fontWeight: 900, fontSize: '1.5rem', padding: '6px 20px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Hash size={20} />낭만
                            </span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '3rem', wordBreak: 'keep-all', lineHeight: 1.2 }}>
                            국문과에 대한<br />오해와 진실
                        </h2>

                        {/* 시 인용 카드 */}
                        <div style={{ border: '2px solid #555', padding: '3rem', marginBottom: '3rem', maxWidth: '600px', position: 'relative' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#888', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>작가 미상 — 사모</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {[
                                    '한 잔은 떠나버린 너를 위하여',
                                    '또 한 잔은 너와의 영원한 사랑을 위하여',
                                    '그리고 또 한 잔은 이미 초라해진 나를 위하여',
                                    '마지막 한 잔은 미리 알고 정하신 하나님을 위하여',
                                ].map((line, i) => (
                                    <p key={i} style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, color: '#ddd', margin: 0 }}>{line}</p>
                                ))}
                            </div>
                            <div style={{ position: 'absolute', top: '-1px', right: '-1px', background: 'var(--primary)', color: '#000', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px' }}>
                                수업 시간에 읽는 시
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: '#333' }}>
                            {[
                                {
                                    tag: '#오해',
                                    tagColor: '#fff',
                                    tagTextColor: '#000',
                                    items: [
                                        '"국문과는 맨날 시 쓰고 소설 읽는 곳"',
                                        '"졸업하면 국어 선생님밖에 못 됨"',
                                        '"문송합니다... 취업 못 하는 학과"',
                                        '"그냥 한국어 배우는 곳 아니야?"',
                                    ]
                                },
                                {
                                    tag: '#진실',
                                    tagColor: 'var(--primary)',
                                    tagTextColor: '#000',
                                    items: [
                                        '언어학·문법·문학사·비평까지 다양하게 배움',
                                        '복수전공으로 진로 폭을 넓히는 게 국룰',
                                        '글 잘 쓰는 능력 = 어디서든 통하는 무기',
                                        '출판, 언론, 콘텐츠, 교육 등 다양한 진로',
                                    ]
                                }
                            ].map((col, idx) => (
                                <div key={idx} style={{ background: '#000', padding: '3rem 2.5rem' }}>
                                    <div style={{ background: col.tagColor, color: col.tagTextColor, fontWeight: 900, fontSize: '1.1rem', display: 'inline-block', padding: '4px 16px', marginBottom: '2rem' }}>
                                        {col.tag}
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                        {col.items.map((item, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500, wordBreak: 'keep-all' }}>
                                                <span style={{ color: 'var(--primary)', fontWeight: 900, flexShrink: 0 }}>—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 에디터 코멘트 ── */}
            <section>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        style={{ maxWidth: '700px' }}
                    >
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                            EDITOR'S NOTE
                        </div>
                        <p style={{ fontSize: '1.3rem', lineHeight: 1.9, fontWeight: 500, wordBreak: 'keep-all', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
                            '문송합니다'는 이제 옛말인지도 모릅니다. 낭만어부 선장님이 그리워했던 그 국문학과에서, 포차코는 오늘도 문법을 공부하고 춤을 추고 언론정보학을 배웁니다. 국문과는 생각보다 훨씬 넓은 세계였습니다. 🐾
                        </p>
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {['#국어국문학과', '#서울대', '#인문계열', '#학과시식코너', '#전공인터뷰', '#낭만'].map(tag => (
                                <span key={tag} style={{ border: '2px solid #000', padding: '6px 14px', fontWeight: 700, fontSize: '0.85rem' }}>{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 이전/다음 아티클 네비게이션 ── */}
            <section style={{ borderTop: '4px solid #000' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <Link to="/article/joso" style={{
                        padding: '3rem 2rem', background: '#f5f5f5', textDecoration: 'none', color: '#000',
                        borderRight: '2px solid #000', display: 'flex', flexDirection: 'column', gap: '0.5rem',
                        transition: 'background 0.2s'
                    }}
                        onMouseOver={e => e.currentTarget.style.background = '#eee'}
                        onMouseOut={e => e.currentTarget.style.background = '#f5f5f5'}
                    >
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#888', letterSpacing: '0.1em' }}>← PREV</span>
                        <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>학과시식코너 #1</span>
                        <span style={{ fontWeight: 600, color: '#555' }}>조소과 편</span>
                    </Link>
                    <div style={{ padding: '3rem 2rem', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#888', letterSpacing: '0.1em' }}>NEXT →</span>
                        <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>학과시식코너 #3</span>
                        <span style={{ fontWeight: 600, color: '#555' }}>Coming Soon...</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticleGungmunPage;
