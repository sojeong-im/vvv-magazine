import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 900,
                                lineHeight: 1.1,
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                fontFamily: 'var(--font-serif)',
                                color: 'var(--text-dark)'
                            }}>
                                Let's Make <br />
                                Something <span className="text-primary">Great.</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                                20대의 모든 질문, <strong style={{ color: 'var(--text-dark)' }}>VVV</strong>에서 답을 찾다.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', textAlign: 'right' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>Contact Us</h3>
                            <a href="mailto:contact@vvv-magazine.com" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', justifyContent: 'flex-end' }}>
                                <Mail size={18} /> contact@vvv-magazine.com
                            </a>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', justifyContent: 'flex-end' }}>
                                <a href="https://www.instagram.com/vvv__mag/?igsh=ZnhrYW55b2xoMjBm" target="_blank" rel="noopener noreferrer" style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--border-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    color: 'var(--text-muted)'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'var(--primary)';
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                    }}
                                >
                                    <Instagram size={20} />
                                </a>
                            </div>
                            <p style={{ color: 'var(--primary-dark)', fontWeight: 'bold' }}>@vvv__mag</p>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    color: 'var(--text-light)',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p>&copy; 2026 VVV MAGAZINE. All Rights Reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

                {/* Big Text at Bottom */}
                <div style={{
                    marginTop: '5rem',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    opacity: 0.04
                }}>
                    <h1 style={{
                        fontSize: '15vw',
                        lineHeight: 0.8,
                        fontWeight: 900,
                        textAlign: 'center',
                        color: 'var(--text-dark)',
                        letterSpacing: '0.05em',
                        margin: 0,
                        fontFamily: 'var(--font-serif)'
                    }}>
                        VVV MAG
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
