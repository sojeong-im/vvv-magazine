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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div
          className="nav-logo"
          onClick={() => scrollToSection('hero')}
          style={{ cursor: 'pointer' }}
        >
          <span className="text-primary">VVV</span>
          <span style={{ color: 'white' }}>MAGAZINE.</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {['Who We Are', 'Our Service', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              {item}
            </button>
          ))}
          <button
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.8rem' }}
            onClick={() => scrollToSection('contact')}
          >
            Subscribe
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
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
            className="nav-links active"
          >
            {['Who We Are', 'Our Service', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="nav-link"
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textAlign: 'left', fontSize: '1.2rem', padding: '10px 0' }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
