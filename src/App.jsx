import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import JoinPage from './components/JoinPage';
const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Service />
    <Footer />
  </>
);

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // console.log("VVV Magazine v2.0 - Loaded");
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
