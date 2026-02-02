import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-[#101227]/80 backdrop-blur-md border-b border-white/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div 
          className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-1"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-[#56d061]">VVV</span>
          <span className="text-white">MAGAZINE.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Who We Are', 'Our Service', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className="text-sm font-medium text-white/80 hover:text-[#56d061] transition-colors uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
          <button 
            className="px-6 py-2 bg-[#56d061] text-[#101227] font-bold rounded-full hover:shadow-[0_0_20px_rgba(86,208,97,0.4)] transition-shadow text-sm uppercase"
            onClick={() => scrollToSection('contact')}
          >
            Subscribe
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#101227] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {['Who We Are', 'Our Service', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-left py-2 text-white/80 hover:text-[#56d061] text-lg font-bold uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
