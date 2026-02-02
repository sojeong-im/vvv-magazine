import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, Building2, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        type: 'partnership',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                type: 'partnership',
                message: ''
            });
            alert('문의가 성공적으로 접수되었습니다.\n담당자가 확인 후 24시간 이내에 연락드리겠습니다.');
        }, 1500);
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '0.75rem',
        color: 'white',
        fontSize: '1rem',
        marginTop: '0.5rem',
        transition: 'all 0.3s',
        outline: 'none'
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = 'var(--primary)';
        e.target.style.background = 'rgba(86, 208, 97, 0.05)';
        e.target.style.boxShadow = '0 0 15px rgba(86, 208, 97, 0.1)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
        e.target.style.boxShadow = 'none';
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--secondary)', paddingTop: '100px', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
            <div className="bg-grid"></div>
            <div className="floating-shape shape-1" style={{ top: '10%', opacity: 0.1 }}></div>
            <div className="floating-shape shape-2" style={{ bottom: '20%', opacity: 0.1 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr',
                    gap: '4rem'
                }}>

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '2rem', textAlign: 'left' }}>
                            LET'S <br />
                            <span className="text-gradient">COLLABORATE</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>
                            VVV 매거진은 단순한 미디어를 넘어,<br />
                            20대와 기업을 연결하는 강력한 파트너입니다.<br />
                            <br />
                            귀사의 비즈니스에 가장 트렌디하고<br />
                            정확한 인텔리전스를 더해보세요.
                        </p>

                        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)' }}>
                            <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Info</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                    <Mail size={18} color="var(--primary)" /> contact@vvv-magazine.com
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                    <Building2 size={18} color="var(--primary)" /> Seoul, Republic of Korea
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '3rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)' }}>YOUR NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)' }}>ORGANIZATION</label>
                                    <input
                                        type="text"
                                        name="company"
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)' }}>EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        name="email"
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)' }}>PHONE NUMBER</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="010-0000-0000"
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)' }}>INQUIRY TYPE</label>
                                <select
                                    name="type"
                                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option style={{ color: 'black' }} value="partnership">Partnership Proposal (제휴/협업)</option>
                                    <option style={{ color: 'black' }} value="advertising">Advertising & Marketing (광고/마케팅)</option>
                                    <option style={{ color: 'black' }} value="data">Data Service Inquiry (데이터 서비스)</option>
                                    <option style={{ color: 'black' }} value="press">Press & Interview (취재/인터뷰)</option>
                                    <option style={{ color: 'black' }} value="other">Other Inquiries (기타)</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)' }}>MESSAGE</label>
                                <textarea
                                    name="message"
                                    style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project or inquiry..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                disabled={isSubmitted}
                            >
                                {isSubmitted ? (
                                    <>Sent Successfully <CheckCircle size={20} /></>
                                ) : (
                                    <>SEND MESSAGE <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
