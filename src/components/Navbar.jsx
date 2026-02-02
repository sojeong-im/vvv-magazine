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
          <span className="text-primary">VVV</span>
          <span style={{ color: 'white' }}>MAGAZINE.</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
            Who We Are
          </Link>
          <Link to="/service" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
            Our Service
          </Link>
          <button
            onClick={() => navigate('/contact')}
            className="nav-link"
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            Contact
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.8rem' }}
            onClick={() => navigate('/join')}
          >
            Start VVV
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
              to="/"
              onClick={() => setIsOpen(false)}
              className="nav-link"
              style={{ display: 'block', color: 'white', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 0' }}
            >
              Who We Are
            </Link>
            <Link
              to="/service"
              onClick={() => setIsOpen(false)}
              className="nav-link"
              style={{ display: 'block', color: 'white', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 0' }}
            >
              Our Service
            </Link>
            <button
              onClick={() => {
                navigate('/contact');
                setIsOpen(false);
              }}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textAlign: 'left', fontSize: '1.2rem', padding: '10px 0' }}
            >
              Contact
            </button>
            <button
              onClick={() => {
                navigate('/join');
                setIsOpen(false);
              }}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textAlign: 'left', fontSize: '1.2rem', padding: '10px 0', fontWeight: 'bold' }}
            >
              Start VVV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
