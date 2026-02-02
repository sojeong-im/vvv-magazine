import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-[#101227] text-white overflow-hidden selection:bg-[#56d061] selection:text-[#101227]">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
