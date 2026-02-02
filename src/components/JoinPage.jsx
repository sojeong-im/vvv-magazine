import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Code, PenTool, Briefcase, GraduationCap, ChevronRight, Check, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({
        major: '',
        program: '',
        name: '',
        email: '',
        phone: ''
    });

    const majors = [
        { id: 'tech', icon: <Code size={30} />, label: 'Tech & Engineering', desc: '공학 / IT / 개발' },
        { id: 'arts', icon: <PenTool size={30} />, label: 'Arts & Design', desc: '디자인 / 예술 / 체육' },
        { id: 'business', icon: <Briefcase size={30} />, label: 'Business & Economy', desc: '경영 / 경제 / 마케팅' },
        { id: 'humanities', icon: <GraduationCap size={30} />, label: 'Humanities & Social', desc: '인문 / 사회 / 어문' }
    ];

    const programs = [
        { id: 'mentoring', label: '1:1 Mentoring', desc: '현직자 선배님과의 프라이빗 커피챗' },
        { id: 'research', label: 'Major Research', desc: '나만의 전공 심화 리서치 프로젝트' },
        { id: 'networking', label: 'V-Networking', desc: '같은 관심사를 가진 20대와의 만남' },
        { id: 'reporter', label: 'Student Reporter', desc: 'VVV 매거진 대학생 에디터 지원' }
    ];

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(4); // Success view
        // API call logic here
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--secondary)', paddingTop: '100px', paddingBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div className="bg-grid"></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        marginBottom: '2rem'
                    }}
                >
                    <ArrowLeft size={20} /> Back to Base
                </button>

                {/* Progress Bar */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '3rem' }}>
                    {[1, 2, 3].map((s) => (
                        <div key={s} style={{
                            height: '4px',
                            flex: 1,
                            background: s <= step || step === 4 ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                            borderRadius: '2px',
                            transition: 'all 0.5s'
                        }}></div>
                    ))}
                </div>

                <AnimatePresence mode='wait'>
                    {/* Step 1: Major Selection */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                SELECT YOUR <span className="text-gradient">BASE DATA</span>
                            </h1>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                                당신의 전공 계열을 선택해주세요. VVV가 최적의 로드맵을 설계합니다.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {majors.map((m) => (
                                    <div
                                        key={m.id}
                                        onClick={() => {
                                            setSelection({ ...selection, major: m.id });
                                            setTimeout(handleNext, 300);
                                        }}
                                        className="glass-panel"
                                        style={{
                                            padding: '2rem',
                                            cursor: 'pointer',
                                            border: selection.major === m.id ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                                            background: selection.major === m.id ? 'rgba(86, 208, 97, 0.1)' : 'rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        <div style={{ color: selection.major === m.id ? 'var(--primary)' : 'white', marginBottom: '1rem' }}>{m.icon}</div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{m.label}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Program Selection */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                SELECT YOUR <span className="text-gradient">MISSION</span>
                            </h1>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                                현재 가장 필요한 도움이나 관심있는 프로그램을 선택해주세요.
                            </p>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {programs.map((p) => (
                                    <div
                                        key={p.id}
                                        onClick={() => {
                                            setSelection({ ...selection, program: p.id });
                                            setTimeout(handleNext, 300);
                                        }}
                                        className="glass-panel"
                                        style={{
                                            padding: '1.5rem',
                                            cursor: 'pointer',
                                            border: selection.program === p.id ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                                            background: selection.program === p.id ? 'rgba(86, 208, 97, 0.1)' : 'rgba(255,255,255,0.05)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.2rem' }}>{p.label}</h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{p.desc}</p>
                                        </div>
                                        {selection.program === p.id && <Check color="var(--primary)" />}
                                    </div>
                                ))}
                            </div>
                            <button onClick={handleBack} style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Back</button>
                        </motion.div>
                    )}

                    {/* Step 3: User Info */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                INPUT <span className="text-gradient">ACCESS KEY</span>
                            </h1>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                                선택하신 미션 수행을 위한 안내를 받으실 연락처를 입력해주세요.
                            </p>

                            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2.5rem' }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>YOUR NAME</label>
                                    <input
                                        type="text"
                                        placeholder="이름"
                                        required
                                        value={selection.name}
                                        onChange={(e) => setSelection({ ...selection, name: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>PHONE NUMBER</label>
                                    <input
                                        type="tel"
                                        placeholder="010-0000-0000"
                                        required
                                        value={selection.phone}
                                        onChange={(e) => setSelection({ ...selection, phone: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <label style={{ display: 'block', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>EMAIL</label>
                                    <input
                                        type="email"
                                        placeholder="email@address.com"
                                        required
                                        value={selection.email}
                                        onChange={(e) => setSelection({ ...selection, email: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white' }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}>
                                    COMPLETE REGISTRATION
                                </button>
                            </form>
                            <button onClick={handleBack} style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Back</button>
                        </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: 'center', padding: '4rem 0' }}
                        >
                            <div style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 0 30px var(--primary-glow)' }}>
                                <Sparkles size={40} color="#101227" />
                            </div>
                            <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                SYSTEM <span className="text-gradient">INITIATED</span>
                            </h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
                                정상적으로 접수되었습니다.<br />
                                당신의 VVV 여정을 시작하기 위한 가이드북을<br />
                                <strong style={{ color: 'white' }}>24시간 내에 문자로 전송</strong>해드립니다.
                            </p>
                            <button onClick={() => navigate('/')} className="btn btn-outline">
                                RETURN TO HOME
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default JoinPage;
