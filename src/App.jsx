import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Features from './components/Features';
import About from './components/About';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (section) => {
    switch(section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'features':
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'technologies':
        technologiesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contacts':
        contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}><LandingPage /></div>
      <div ref={featuresRef}><Features /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={technologiesRef}><Technologies /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={contactsRef}><Contact /></div>
      <QuickLinks />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
