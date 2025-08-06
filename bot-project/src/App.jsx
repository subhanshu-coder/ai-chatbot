import { useState, useEffect } from 'react';
import ModernNav from './components/ModernNav';
import Silk from './components/Silk';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import SlidingLogoMarquee from './components/SlidingLogoMarquee';

import gptLogo from './assets/logos/gpt.png';
import grokLogo from './assets/logos/grok.png';
import perplexityLogo from './assets/logos/perplexity.png';
import deepseekLogo from './assets/logos/deepseek.png';
import claudeLogo from './assets/logos/claude.png';
import geminiLogo from './assets/logos/gemini.png';

import PixelCard from './components/PixelCard';
import HowItWorks from './components/HowItWorks';
import FAQs from './components/FAQs';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features", isGhost: true },
    { label: "Contact", href: "#contact", isGhost: true },
    { label: "About", href: "#about", isGhost: true },
    { label: "HowItWork", href: "#HowItWorks", isGhost: true },
      { label: "FAQs", href: "#FAQs", isGhost: true },
    { label: "Login", href: "#login", isGhost: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);

      // Add 'visible' class to features and about when entering viewport
      const featuresEl = document.getElementById('features');
      if (featuresEl) {
        const rect = featuresEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          featuresEl.classList.add('visible');
        }
      }
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          aboutEl.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logos for SlidingLogoMarquee
  const logos = [
    {
      id: 'grok',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={grokLogo} alt="Grok" style={{ height: 100 }} />
          <span style={{ color: 'white', marginTop: 6, fontSize: '1.5rem', fontWeight: 600 }}>Grok</span>
        </div>
      ),
    },
    {
      id: 'perplexity',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={perplexityLogo} alt="Perplexity" style={{ height: 100 }} />
          <span style={{ color: 'white', fontSize: '1.5rem', marginTop: 6, fontWeight: 600 }}>Perplexity</span>
        </div>
      ),
    },
    {
      id: 'gpt',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={gptLogo} alt="ChatGPT" style={{ height: 100 }} />
          <span style={{ color: 'white', marginTop: 6, fontSize: '1.5rem', fontWeight: 600 }}>ChatGPT</span>
        </div>
      ),
    },
    {
      id: 'claude',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={claudeLogo} alt="Claude" style={{ height: 100 }} />
          <span style={{ color: 'white', marginTop: 6, fontSize: '1.5rem', fontWeight: 600 }}>Claude</span>
        </div>
      ),
    },
    {
      id: 'gemini',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={geminiLogo} alt="Gemini" style={{ height: 100 }} />
          <span style={{ color: 'white', marginTop: 6, fontSize: '1.5rem', fontWeight: 600 }}>Gemini</span>
        </div>
      ),
    },
    {
      id: 'deepseek',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={deepseekLogo} alt="DeepSeek" style={{ height: 100 }} />
          <span style={{ color: 'white', fontSize: '1.5rem', marginTop: 6, fontWeight: 600 }}>DeepSeek</span>
        </div>
      ),
    },
  ];

  return (
    <div className="app-container">
      <div className="background-canvas">
        <Silk
          speed={5}
          scale={1}
          color="#0d7ecfff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="navbar-wrapper">
        <ModernNav
          items={navItems}
          logoText="AI Hub"
          activeSection={activeSection}
        />
      </div>

      <main>
        <Home />
        <Features />
        <section id="about">
          <About />
        </section>

        <div className="marquee-special-container">
          <h2 className="marquee-title">Integration of Top AI's in Market</h2>
        </div>

        <SlidingLogoMarquee
          items={logos}
          speed={60}
          backgroundColor={"rgba(106, 173, 227, 0.5)"}
          pauseOnHover={true}
          width="90%"
          height="180px"
          gap="0rem"
          enableBlur={true}
          blurIntensity={1}
          showControls={true}
          scale={1}
          className="marquee-special-bg"
        />

        {/* PixelCard with animated pixel background including mission/vision/values content */}
  <PixelCard variant="blue" className="about-pixel-card" />

        <HowItWorks />
        <section id="FAQs">
          <FAQs />
        </section> 

        <section id="getintouch">
          <GetInTouch />
        </section>

        <section>
          <Footer />
        </section>

      </main>
    </div>
  );
}

export default App;