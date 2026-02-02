import React from 'react';
import { Instagram, Youtube, Facebook, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#101227] border-t border-white/10 pt-20 pb-10">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
                    <div>
                        <h2 className="text-4xl font-black text-white mb-6">
                            LET'S MAKE <br />
                            SOMETHING <span className="text-[#56d061]">GREAT.</span>
                        </h2>
                        <p className="text-gray-400 font-light text-lg">
                            20대의 모든 질문, <strong className="text-white">VVV</strong>에서 답을 찾다.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg">Contact Us</h3>
                        <a href="mailto:contact@vvv-magazine.com" className="text-gray-400 hover:text-[#56d061] transition-colors flex items-center gap-2">
                            <Mail size={18} /> contact@vvv-magazine.com
                        </a>
                        <div className="flex gap-4 mt-2">
                            {[Instagram, Youtube, Facebook].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#56d061] hover:border-[#56d061] hover:text-[#101227] transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                        <p className="text-[#56d061] font-bold mt-2">@vvv__mag</p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; 2026 VVV MAGAZINE. All Rights Reserved.</p>
                    <div className="flex gap-6 uppercase tracking-wider">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>

                {/* Big Text at Bottom */}
                <div className="mt-20 select-none pointer-events-none opacity-5">
                    <h1 className="text-[15vw] leading-none font-black text-center text-white tracking-widest">
                        VVV MAG
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
