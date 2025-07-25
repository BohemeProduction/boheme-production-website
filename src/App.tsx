import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Galleries from './components/Galleries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPages from './components/LegalPages';

const App = () => {
  const [currentLegalPage, setCurrentLegalPage] = useState<'mentions' | 'privacy' | null>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleLegalPageOpen = (page: 'mentions' | 'privacy') => {
    setCurrentLegalPage(page);
  };

  const handleLegalPageClose = () => {
    setCurrentLegalPage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Founders />
      <Services />
      <Portfolio />
      <Galleries />
      <Contact />
      <Footer onLegalPageOpen={handleLegalPageOpen} />
      <LegalPages 
        currentPage={currentLegalPage} 
        onClose={handleLegalPageClose} 
      />
    </div>
  );
};

export default App;