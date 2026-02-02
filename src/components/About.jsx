import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Send } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Target size={32} />,
            title: "VISION",
            desc: "Vision을 잡고,",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: <Lightbulb size={32} />,
            title: "VALUE",
            desc: "Value를 만들어,",
            color: "from-[#56d061] to-green-500"
        },
        {
            icon: <Send size={32} />,
            title: "VENTURE",
            desc: "Venture하라",
            color: "from-purple-400 to-pink-500"
        }
    ];

    return (
        <section id="who-we-are" className="py-32 bg-[#101227] relative">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            WHO <span className="text-[#56d061]">WE ARE</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                            <p>
                                VVV 매거진은 20대 대학생 기자단이 직접 발로 뛰며 <strong className="text-white">현실적인 이야기</strong>를 제공합니다.
                            </p>
                            <p>
                                캠퍼스의 숨겨진 꿀팁부터, 현직자들의 솔직하고 생생한 인터뷰,
                                그리고 취업 시장의 최신 트렌드와 현실적인 준비 가이드까지.
                            </p>
                            <p className="border-l-4 border-[#56d061] pl-6 italic text-white text-xl">
                                "오직 같은 시대를 살아가는 20대가 가장 공감하고 필요로 하는 '진짜' 이야기만을 필터 없이 전달합니다."
                            </p>
                            <p>
                                나만 뒤처지는 것 같아 불안한가요? 혹은 어떤 길로 가야 할지 막막한가요?
                                이제 혼자 방황하지 마세요. 진짜 이야기가 진짜 힘이 됩니다.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                className="glass-card flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-default"
                            >
                                <div className={`p-4 rounded-full bg-gradient-to-br ${card.color} text-white group-hover:scale-110 transition-transform`}>
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold italic">{card.title}</h3>
                                    <p className="text-gray-400">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
