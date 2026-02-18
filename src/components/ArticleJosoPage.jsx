import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hash } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 }
    })
};

const ArticleJosoPage = () => {
    return (
        <div style={{ background: '#fff', color: '#000', minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
            <Helmet>
                <title>학과시식코너 — 조소과 편 | VVV 매거진</title>
                <meta name="description" content="홍익대학교 조소과 3학년 퀴카의 리얼 인터뷰. 드라마 속 조각가 vs 현실 조소과생의 차이를 낱낱이 파헤칩니다." />
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
                    彫塑彫塑彫
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, padding: '6rem 0 4rem' }}>
                    {/* 뒤로가기 */}
                    <Link to="/major-guide" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', color: '#000', marginBottom: '3rem', border: '2px solid #000', padding: '8px 16px' }}>
                        <ArrowLeft size={16} /> 전공 가이드로 돌아가기
                    </Link>

                    {/* 시리즈 태그 */}
                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {['interview', '학과시식코너', '예술계열'].map(tag => (
                            <span key={tag} style={{ border: '2px solid #000', padding: '4px 14px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.03em' }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* 메인 타이틀 */}
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
                        <span style={{ color: 'var(--primary)', WebkitTextStroke: '2px #000' }}>조소과</span> 편
                    </motion.h1>

                    <motion.p
                        initial="hidden" animate="visible" custom={1} variants={fadeUp}
                        style={{ fontSize: '1.3rem', fontWeight: 600, lineHeight: 1.6, maxWidth: '560px', borderLeft: '4px solid #000', paddingLeft: '1.2rem', wordBreak: 'keep-all' }}
                    >
                        #드라마 속 조각가 vs #현실 조소과생<br />
                        홍대 조소과 3학년에게 직접 물었습니다.
                    </motion.p>
                </div>
            </section>

            {/* ── 조소란? 정의 카드 ── */}
            <section style={{ borderBottom: '4px solid #000', background: '#000', color: '#fff' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ display: 'inline-block', border: '2px solid var(--primary)', color: 'var(--primary)', padding: '4px 16px', fontWeight: 800, fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>
                            DEFINITION
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', wordBreak: 'keep-all' }}>
                            조소<sup style={{ fontSize: '0.4em', verticalAlign: 'super' }}>1)</sup>
                        </h2>
                        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: 1.8, maxWidth: '700px', fontWeight: 400, wordBreak: 'keep-all', borderBottom: '1px solid #444', paddingBottom: '2rem', marginBottom: '2rem' }}>
                            조각과 소조를 통틀어 칭하는 말. <strong>조각</strong>은 어떤 재질을 깎아서 입체물을 만드는 것을 의미하고, <strong>소조</strong>는 어떤 재질을 계속 덧붙여서 입체물을 만드는 것을 말한다. 결국 조소는 <mark style={{ background: 'var(--primary)', color: '#000', padding: '0 4px' }}>입체물을 만드는 모든 미술활동</mark>을 지칭한다.
                        </p>
                        <p style={{ fontSize: '1rem', color: '#aaa', fontWeight: 500 }}>
                            — 홍익대학교 조소과 3학년 퀴카 인터뷰 중
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
                        {/* 텍스트 */}
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                                Q. 간단한 자기소개
                            </div>
                            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.8, fontWeight: 500, wordBreak: 'keep-all' }}>
                                홍익대학교 3학년 재학하고 있는 24살 조소과생입니다. 별명은 인정하고 싶지 않지만 <strong>퀴카</strong>예요.
                            </p>
                            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.8, fontWeight: 500, wordBreak: 'keep-all', marginTop: '1rem' }}>
                                취미로만 그림을 그리다가 중학교 3학년 때 갑작스럽게 예술 고등학교를 진학하게 되면서 대학도 가장 맞았던 <strong>조소과</strong>로 진학하게 되었습니다.
                            </p>
                        </div>

                        {/* 프로필 카드 */}
                        <div style={{ border: '3px solid #000', padding: '2.5rem', boxShadow: '8px 8px 0 #000' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐹</div>
                            <div style={{ fontWeight: 900, fontSize: '1.8rem', marginBottom: '0.5rem' }}>퀴카</div>
                            <div style={{ fontWeight: 600, color: '#555', marginBottom: '1.5rem' }}>닉네임 (본명 비공개)</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {[
                                    { label: '학교', value: '홍익대학교' },
                                    { label: '학과', value: '조소과' },
                                    { label: '학년', value: '3학년' },
                                    { label: '나이', value: '24살' },
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

            {/* ── Q. 조소과는 어떤 학과인가요? ── */}
            <section style={{ borderBottom: '4px solid #000', background: '#f9f9f9' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                            Q. 조소과는 어떤 학과인가요?
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '2rem', wordBreak: 'keep-all', lineHeight: 1.3 }}>
                            "어디서든 볼 수 있는<br />모든 입체물들을 다루고 있습니다."
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 500, wordBreak: 'keep-all' }}>
                                조소는 조각과 소조의 줄임말이 맞지만 그건 너무 전통적인 시각이고, 어디서든 볼 수 있는 모든 입체물들을 다루고 있습니다.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 500, wordBreak: 'keep-all' }}>
                                요즘은 <strong>디지털(3D), 평면</strong> 등 모든 분야에 걸쳐서 다 발을 담그고 있는데 저는 좀 올드한 편이라서 소조하는 걸 너무 좋아해요.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 선배들의 진로 ── */}
            <section style={{ borderBottom: '4px solid #000' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                            선배들은 어디로 갔을까?
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', wordBreak: 'keep-all' }}>
                            조소과 졸업 후 진로
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0' }}>
                            {[
                                { emoji: '🏠', title: '인테리어', desc: '공간 디자인 및 오브제 제작' },
                                { emoji: '🎬', title: '아이돌 뮤비 세트장', desc: '촬영 세트 디자인 및 제작' },
                                { emoji: '🖼️', title: '개인 작가', desc: '창작물 제작 후 미술관 전시' },
                                { emoji: '🏬', title: '백화점 쇼윈도', desc: '대형 브랜드 디스플레이 담당' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden" whileInView="visible" custom={idx * 0.5} viewport={{ once: true }} variants={fadeUp}
                                    style={{
                                        border: '2px solid #000',
                                        marginLeft: idx > 0 ? '-2px' : 0,
                                        padding: '2.5rem 2rem',
                                        background: idx % 2 === 0 ? '#fff' : '#000',
                                        color: idx % 2 === 0 ? '#000' : '#fff',
                                        transition: 'transform 0.2s',
                                        cursor: 'default'
                                    }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.emoji}</div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.6rem', wordBreak: 'keep-all' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.8, wordBreak: 'keep-all' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── #드라마 vs #현실 ── */}
            <section style={{ borderBottom: '4px solid #000', background: '#000', color: '#fff' }}>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                            <span style={{ background: 'var(--primary)', color: '#000', fontWeight: 900, fontSize: '1.5rem', padding: '6px 20px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Hash size={20} />드라마
                            </span>
                            <span style={{ border: '3px solid #fff', fontWeight: 900, fontSize: '1.5rem', padding: '6px 20px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Hash size={20} />현실
                            </span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '3rem', wordBreak: 'keep-all', lineHeight: 1.2 }}>
                            드라마 속 조각가 vs<br />현실 조소과생
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: '#333' }}>
                            {[
                                {
                                    tag: '#드라마',
                                    tagColor: 'var(--primary)',
                                    tagTextColor: '#000',
                                    items: [
                                        '우아하게 흰 가운 입고 작업',
                                        '넓고 깔끔한 아틀리에',
                                        '완성된 작품만 보여주는 낭만',
                                        '조각하면서 사랑에 빠지는 주인공',
                                    ]
                                },
                                {
                                    tag: '#현실',
                                    tagColor: '#fff',
                                    tagTextColor: '#000',
                                    items: [
                                        '흙·석고·쇠 먼지로 뒤덮인 작업복',
                                        '재료비만 수십만 원 (내 돈)',
                                        '작품 운반하다 허리 나가는 현실',
                                        '용접·그라인더·전동공구 다룸',
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

            {/* ── 에디터 코멘트 / 마무리 ── */}
            <section>
                <div className="container" style={{ padding: '5rem 0' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        style={{ maxWidth: '700px' }}
                    >
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#888' }}>
                            EDITOR'S NOTE
                        </div>
                        <p style={{ fontSize: '1.3rem', lineHeight: 1.9, fontWeight: 500, wordBreak: 'keep-all', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
                            조소과는 단순히 "조각하는 학과"가 아니었습니다. 흙을 빚고, 3D를 다루고, 용접을 하고, 쇼윈도를 채우는 — 세상의 모든 입체물을 만드는 사람들의 이야기였습니다. 퀴카, 인터뷰 고마워요. 🐹
                        </p>
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {['#조소과', '#홍익대', '#예술계열', '#학과시식코너', '#전공인터뷰'].map(tag => (
                                <span key={tag} style={{ border: '2px solid #000', padding: '6px 14px', fontWeight: 700, fontSize: '0.85rem' }}>{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 다음 아티클 CTA ── */}
            <section style={{ borderTop: '4px solid #000', background: 'var(--primary)' }}>
                <div className="container" style={{ padding: '4rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem' }}>다음 학과시식코너</div>
                        <div style={{ fontWeight: 900, fontSize: '1.5rem' }}>Coming Soon...</div>
                    </div>
                    <Link to="/major-guide" style={{
                        background: '#000', color: '#fff', padding: '16px 36px',
                        fontWeight: 800, fontSize: '1rem', textDecoration: 'none',
                        border: '3px solid #000', display: 'inline-flex', alignItems: 'center', gap: '8px'
                    }}>
                        <ArrowLeft size={18} /> 전공 가이드 보기
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ArticleJosoPage;
