import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Features from './components/Features';
import About from './components/About';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import Map from './components/Map';
import Quote from './components/Quote'; // Import the new component

function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
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
    <Router>
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<>
          <div ref={homeRef}><LandingPage /></div>
          <div ref={featuresRef}><Features /></div>
          <div ref={aboutRef}><About /></div>
          <div ref={technologiesRef}><Technologies /></div>
          <div ref={servicesRef}><Services /></div>
          <div ref={contactsRef}><Contact /></div>
          <QuickLinks scrollToSection={scrollToSection} />
          <Map />
          <Footer />
        </>} />
        <Route path="/quote" element={<Quote />} /> {/* Add the Quote route */}
      </Routes>
    </Router>
  );
}

export default App;
