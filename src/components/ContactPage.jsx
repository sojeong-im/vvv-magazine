import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate = useNavigate();
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
        // Here you would typically send the data to a backend or email service
        alert('문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            type: 'partnership',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-[#101227] text-white pt-[100px] pb-20 relative overflow-hidden">
            <div className="floating-shape shape-1" style={{ top: '10%' }}></div>
            <div className="floating-shape shape-2" style={{ bottom: '20%' }}></div>

            <div className="container relative z-10 max-w-4xl mx-auto px-6">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#56d061] transition-colors mb-10"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'left' }}>
                        PARTNERSHIP <br />
                        <span className="text-gradient">INQUIRY</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-12">
                        VVV 매거진과 함께 새로운 가치를 만들어갈 파트너를 기다립니다.
                    </p>

                    <form onSubmit={handleSubmit} className="glass-panel p-10 backdrop-blur-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-sm text-[#56d061]">NAME / MANAGER</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="담당자 성함을 입력해주세요"
                                    required
                                    className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#56d061] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-sm text-[#56d061]">COMPANY / ORGANIZATION</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="회사 또는 단체명을 입력해주세요"
                                    required
                                    className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#56d061] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-sm text-[#56d061]">EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@company.com"
                                    required
                                    className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#56d061] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-sm text-[#56d061]">PHONE</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="010-0000-0000"
                                    className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#56d061] focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-8">
                            <label className="font-bold text-sm text-[#56d061]">INQUIRY TYPE</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#56d061] focus:outline-none transition-colors"
                            >
                                <option value="partnership" className="text-black">제휴/협업 제안 (Partnership)</option>
                                <option value="advertising" className="text-black">광고/마케팅 문의 (Advertising)</option>
                                <option value="press" className="text-black">취재/인터뷰 요청 (Press)</option>
                                <option value="other" className="text-black">기타 문의 (Other)</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 mb-10">
                            <label className="font-bold text-sm text-[#56d061]">MESSAGE</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="문의하실 내용을 자유롭게 적어주세요."
                                rows="6"
                                required
                                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#56d061] focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full text-lg"
                        >
                            SEND INQUIRY <Send size={20} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
