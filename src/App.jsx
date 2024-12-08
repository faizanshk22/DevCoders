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
import Web from './components/LinkPages/Web';
import Mobile from './components/LinkPages/Mobile';
import Seo from './components/LinkPages/Seo';
import DevOps from './components/LinkPages/DevOps';
import CustomSolution from './components/LinkPages/CustomSolution';
import whatappLogo from './assets/wlogo.png';
import Performance from './components/Performance';
import fb from './assets/facebook.png';
import linkedin from './assets/linkedin.png';
import instagram from './assets/instagram.png';



function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactsRef = useRef(null);
  const PerformanceRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'features':
        PerformanceRef.current.scrollIntoView({ behavior: 'smooth' });
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
    <>
    <Router>
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<>
          <div ref={homeRef}><LandingPage /></div>
          <div ref={PerformanceRef}><Performance /></div>          
          <div ref={featuresRef}><Features /></div>
          <div ref={technologiesRef}><Technologies /></div>
          <div ref={servicesRef}><Services /></div>
          <div ref={aboutRef}><About /></div>
          <Testimonail/>
          <div ref={contactsRef}><Contact /></div>
          <QuickLinks scrollToSection={scrollToSection} />
          <Map />
          <Footer />
        </>} />
        <Route path="/quote" element={<Quote />} /> 
        <Route path='/exploreservices' element={<ExploreServices/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path="/" element={<Services />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/DevOps" element={<DevOps />} />
        <Route path="/CustomSolutions" element={<CustomSolution />} />
      </Routes>
    </Router>
    <div className="absolute fixed bottom-[30vh] -left-2 p-4 z-[1001] flex flex-col items-center space-y-6">
  <a href="https://wa.me/923244282516?text=Hello How can I help you?" target="_blank">
    <img src={whatappLogo} className="w-[30px] md:w-[50px] hover:scale-110 transition-transform duration-200 " alt="w/a" />
  </a>
  <a href="#" target="_blank">
    <img src={fb} className="w-[30px] md:w-[50px] hover:scale-110 transition-transform duration-200" alt="w/a" />
  </a>
  <a href="#" target="_blank">
    <img src={linkedin} className="w-[30px] sm:w-[50px] hover:scale-110 transition-transform duration-200" alt="w/a" />
  </a>
  <a href="#" target="_blank">
    <img src={instagram} className="w-[30px] sm:w-[50px] hover:scale-110 transition-transform duration-200" alt="w/a" />
  </a>
</div>
    </>
  );
}

export default App;
