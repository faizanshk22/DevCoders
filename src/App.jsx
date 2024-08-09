import React, { useRef, useState, useEffect } from 'react';
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
import ExploreServices from './pages/ExploreServices';
import Introduction from './pages/Introduction';
import Loader from './components/Loader';
import Testimonail from './components/Testimonail';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
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
          <Testimonail/>
          <QuickLinks scrollToSection={scrollToSection} />
          <Map />
          <Footer />
        </>} />
        <Route path="/quote" element={<Quote />} /> 
        <Route path='/exploreservices' element={<ExploreServices/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
      </Routes>
    </Router>
  );
}

export default App;
