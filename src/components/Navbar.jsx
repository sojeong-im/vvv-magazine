import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
          <span style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, var(--primary) 0%, #34d058 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.05em'
          }}>VVV</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/about" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
            브랜드
          </Link>
          <Link to="/service" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
            서비스
          </Link>
          <button
            onClick={() => navigate('/contact')}
            className="nav-link"
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            고객지원
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.8rem' }}
            onClick={() => navigate('/join')}
          >
            무료 체험
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
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="nav-link"
              style={{ display: 'block', color: 'white', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 0' }}
            >
              브랜드
            </Link>
            <Link
              to="/service"
              onClick={() => setIsOpen(false)}
              className="nav-link"
              style={{ display: 'block', color: 'white', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 0' }}
            >
              서비스
            </Link>
            <button
              onClick={() => {
                navigate('/contact');
                setIsOpen(false);
              }}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textAlign: 'left', fontSize: '1.2rem', padding: '10px 0' }}
            >
              고객지원
            </button>
            <button
              onClick={() => {
                navigate('/join');
                setIsOpen(false);
              }}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textAlign: 'left', fontSize: '1.2rem', padding: '10px 0', fontWeight: 'bold' }}
            >
              무료 체험
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
