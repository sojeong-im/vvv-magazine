import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
    {
        id: 'joso',
        num: '01',
        category: '학과시식코너',
        title: '조소과 편',
        subtitle: '#드라마 vs #현실',
        desc: '홍대 조소과 3학년 전준수(퀴카)에게 직접 물었습니다. 흙 빚고, 3D 하고, 용접까지 — 조소과의 진짜 이야기.',
        tags: ['#조소과', '#홍익대', '#예술계열'],
        href: '/article/joso',
        bg: '#000',
        color: '#fff',
        accent: 'var(--primary)',
        emoji: '🐹',
    },
    {
        id: 'gungmun',
        num: '02',
        category: '학과시식코너',
        title: '국문과 편',
        subtitle: '#문학 그리고 #낭만',
        desc: '서울대 국어국문학과 3학년 포차코에게 물었습니다. "문송합니다"는 이제 옛말? 국문과의 낭만과 현실.',
        tags: ['#국어국문학과', '#서울대', '#인문계열'],
        href: '/article/gungmun',
        bg: '#fff',
        color: '#000',
        accent: '#000',
        emoji: '🐾',
    },
];

const ArticleSection = () => {
    return (
        <section id="articles" style={{ borderTop: '4px solid #000', background: '#fff' }}>
            {/* 섹션 헤더 */}
            <div style={{ borderBottom: '4px solid #000', padding: '3rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', color: '#888', marginBottom: '0.8rem' }}>
                            NEW SERIES
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                            fontWeight: 900,
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                            wordBreak: 'keep-all'
                        }}>
                            학과시식코너
                        </h2>
                        <p style={{ fontSize: '1.1rem', fontWeight: 500, color: '#555', marginTop: '0.8rem', wordBreak: 'keep-all', maxWidth: '480px' }}>
                            실제 전공생에게 직접 물었습니다. 드라마 속 이야기 말고, 진짜 학과 이야기.
                        </p>
                    </div>
                    <Link to="/major-guide" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        fontWeight: 800, fontSize: '1rem', textDecoration: 'none',
                        color: '#000', border: '3px solid #000', padding: '14px 28px',
                        transition: 'all 0.2s'
                    }}
                        onMouseOver={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
                    >
                        전공 가이드 보기 <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* 아티클 카드 그리드 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                {articles.map((article, idx) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                    >
                        <Link
                            to={article.href}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '480px',
                                padding: '3rem 2.5rem',
                                background: article.bg,
                                color: article.color,
                                textDecoration: 'none',
                                borderRight: idx < articles.length - 1 ? '4px solid #000' : 'none',
                                borderBottom: '4px solid #000',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'transform 0.2s',
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.01)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            {/* 배경 번호 */}
                            <div aria-hidden="true" style={{
                                position: 'absolute', bottom: '-2rem', right: '-1rem',
                                fontSize: '14rem', fontWeight: 900, opacity: 0.06,
                                lineHeight: 1, userSelect: 'none', color: article.color
                            }}>
                                {article.num}
                            </div>

                            <div>
                                {/* 카테고리 + 번호 */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <span style={{
                                        border: `2px solid ${article.color}`,
                                        padding: '4px 12px',
                                        fontWeight: 800,
                                        fontSize: '0.8rem',
                                        letterSpacing: '0.05em',
                                        opacity: 0.8
                                    }}>
                                        {article.category}
                                    </span>
                                    <span style={{ fontWeight: 900, fontSize: '1rem', opacity: 0.4 }}>#{article.num}</span>
                                </div>

                                {/* 이모지 */}
                                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{article.emoji}</div>

                                {/* 제목 */}
                                <h3 style={{
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    fontWeight: 900,
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '0.8rem',
                                    wordBreak: 'keep-all'
                                }}>
                                    {article.title}
                                </h3>

                                {/* 서브타이틀 */}
                                <div style={{
                                    background: article.accent,
                                    color: article.bg,
                                    display: 'inline-block',
                                    padding: '4px 12px',
                                    fontWeight: 800,
                                    fontSize: '0.9rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {article.subtitle}
                                </div>

                                {/* 설명 */}
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: 1.7,
                                    fontWeight: 500,
                                    opacity: 0.8,
                                    wordBreak: 'keep-all',
                                    maxWidth: '380px'
                                }}>
                                    {article.desc}
                                </p>
                            </div>

                            {/* 하단 태그 + 읽기 버튼 */}
                            <div style={{ marginTop: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {article.tags.map(tag => (
                                        <span key={tag} style={{
                                            border: `1px solid ${article.color}`,
                                            padding: '3px 10px',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            opacity: 0.7
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    fontWeight: 800, fontSize: '1rem',
                                    borderBottom: `2px solid ${article.color}`,
                                    paddingBottom: '2px'
                                }}>
                                    읽어보기 <ArrowRight size={18} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}

                {/* Coming Soon 카드 */}
                <div style={{
                    minHeight: '480px',
                    padding: '3rem 2.5rem',
                    background: 'var(--primary)',
                    color: '#000',
                    borderBottom: '4px solid #000',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div aria-hidden="true" style={{
                        position: 'absolute', bottom: '-2rem', right: '-1rem',
                        fontSize: '14rem', fontWeight: 900, opacity: 0.1,
                        lineHeight: 1, userSelect: 'none'
                    }}>03</div>
                    <div style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1.5rem', opacity: 0.7 }}>
                        COMING SOON
                    </div>
                    <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', wordBreak: 'keep-all' }}>
                        다음 편은<br />어떤 학과?
                    </h3>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.8, wordBreak: 'keep-all', maxWidth: '300px', lineHeight: 1.6 }}>
                        다음 학과시식코너를 기대해주세요. 더 많은 전공생들의 이야기가 찾아옵니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ArticleSection;
