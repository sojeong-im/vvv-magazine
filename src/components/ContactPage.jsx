import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, Mail, CheckCircle } from 'lucide-react';
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
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border-color)',
        borderRadius: '0.75rem',
        color: 'var(--text-main)',
        fontSize: '1rem',
        marginTop: '0.5rem',
        transition: 'all 0.3s',
        outline: 'none',
        fontFamily: 'var(--font-main)'
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = 'var(--primary)';
        e.target.style.background = 'white';
        e.target.style.boxShadow = '0 0 0 3px rgba(86, 208, 97, 0.1)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = 'var(--border-color)';
        e.target.style.background = 'var(--bg-subtle)';
        e.target.style.boxShadow = 'none';
    };

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, var(--bg-cream) 0%, #ffffff 50%)', paddingTop: '100px', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
            <div className="bg-grid"></div>
            <div className="floating-shape shape-1" style={{ top: '10%', opacity: 0.05 }}></div>
            <div className="floating-shape shape-2" style={{ bottom: '20%', opacity: 0.05 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem'
                }}>

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{
                            fontSize: '3.5rem',
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            textAlign: 'left',
                            fontFamily: 'var(--font-serif)',
                            fontWeight: 700,
                            color: 'var(--text-dark)',
                            letterSpacing: '-0.03em'
                        }}>
                            함께 <br />
                            <span className="text-gradient">만들어가요</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>
                            VVV 매거진은 단순한 미디어를 넘어,<br />
                            20대와 기업을 연결하는 강력한 파트너입니다.<br />
                            <br />
                            귀사의 비즈니스에 가장 트렌디하고<br />
                            정확한 인텔리전스를 더해보세요.
                        </p>

                        <div style={{
                            padding: '2rem',
                            background: 'white',
                            borderRadius: '20px',
                            border: '1px solid var(--border-color)',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>연락처</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                    <Mail size={18} color="var(--primary-dark)" /> contact@vvv-magazine.com
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                    <Building2 size={18} color="var(--primary-dark)" /> 서울, 대한민국
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
                        <form onSubmit={handleSubmit} style={{
                            padding: '3rem',
                            background: 'white',
                            borderRadius: '24px',
                            border: '1px solid var(--border-color)',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>성명</label>
                                    <input
                                        type="text"
                                        name="name"
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="이름"
                                        required
                                    />
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>소속</label>
                                    <input
                                        type="text"
                                        name="company"
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="회사명 / 학교명"
                                        required
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>이메일</label>
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
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>연락처</label>
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
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>문의 유형</label>
                                <select
                                    name="type"
                                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value="partnership">제휴 및 협업</option>
                                    <option value="advertising">광고 및 마케팅</option>
                                    <option value="data">데이터 서비스 문의</option>
                                    <option value="press">취재 및 인터뷰</option>
                                    <option value="other">기타 문의</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>문의 내용</label>
                                <textarea
                                    name="message"
                                    style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="문의하실 내용을 자세히 적어주세요..."
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
                                    <>전송 성공 <CheckCircle size={20} /></>
                                ) : (
                                    <>문의하기 <Send size={20} /></>
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
