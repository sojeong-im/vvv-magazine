import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, TrendingUp } from 'lucide-react';

const Service = () => {
    return (
        <section id="our-service" className="py-32 bg-[#0d0f20] relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#56d061]/5 to-transparent z-0 pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        Our <span className="text-gradient">Service</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        VVV 매거진은 단순한 콘텐츠를 넘어, 20대의 살아있는 목소리를 데이터로 연결합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Users size={40} />,
                            title: "Youth Platform",
                            desc: "가장 트렌디하고 살아있는 20대 청년의 목소리를 담는 플랫폼입니다. 대학생 기자단이 생산하고 20대 독자들이 열렬히 소비합니다."
                        },
                        {
                            icon: <Database size={40} />,
                            title: "Data Intelligence",
                            desc: "가장 정확한 20대 소비 행태, 진로 변화, 라이프스타일 데이터로 축적하여 파트너 기업에 독보적인 인사이트를 제공합니다."
                        },
                        {
                            icon: <TrendingUp size={40} />,
                            title: "Target Marketing",
                            desc: "20대 타겟 마케팅, 이제 감(感)이 아닌 데이터입니다. 기업 및 기관들과 정책 수립 및 마케팅 전략에 실질적인 도움을 드립니다."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-[#1a1d3a] p-10 rounded-3xl border border-white/5 hover:border-[#56d061]/50 transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 bg-[#56d061]/10 rounded-2xl flex items-center justify-center text-[#56d061] mb-6 group-hover:bg-[#56d061] group-hover:text-[#101227] transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-[#56d061] to-[#258d30] text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#101227] mb-4">
                        새로운 비즈니스 가치를 창출하세요
                    </h3>
                    <p className="text-[#101227]/80 max-w-2xl mx-auto mb-8 font-medium">
                        가장 젊고, 뜨거우며, 살아있는 20대 청년의 목소리를 콘텐츠와 데이터로 포착하고 싶은 기업이라면 지금 바로 문의하세요.
                    </p>
                    <button className="px-8 py-3 bg-[#101227] text-white font-bold rounded-full hover:scale-105 transition-transform">
                        CONTACT FOR PARTNERSHIP
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Service;
