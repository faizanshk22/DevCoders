import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Stats from './Stats';
import './Landing.css';

function LandingPage() {
  const lines = [
    <span> <span className='text-blue-600'>Web Development </span>Solutions & Services</span>,
    <span><span className='text-teal-500'>Mobile Development</span> Solutions & Services</span>,
    <span><span className='text-[#bdb76b]'>SEO </span>for your business</span>,
    <span><span className='text-[#fa8072]'>DevOps Engineering </span> and Services</span>
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const createDots = () => {
      const numDots = 100; // Number of dots
      return Array.from({ length: numDots }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5, // Reduced x velocity
        vy: (Math.random() - 0.5) * 0.5, // Reduced y velocity
      }));
    };

    setDots(createDots()); // Generate dots initially

    // Recalculate dots on window resize
    const handleResize = () => {
      setDots(createDots());
    };

    window.addEventListener('resize', handleResize); // Add resize listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  useEffect(() => {
    const moveDots = () => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          let { x, y, vx, vy } = dot;

          // Update position
          x += vx;
          y += vy;

          // Reverse direction if hitting a boundary
          if (x <= 0 || x >= window.innerWidth) vx *= -1;
          if (y <= 0 || y >= window.innerHeight) vy *= -1;

          // Prevent dots from overflowing entirely
          x = Math.max(0, Math.min(x, window.innerWidth - 5)); // Adjust width
          y = Math.max(0, Math.min(y, window.innerHeight - 5)); // Adjust height

          return { x, y, vx, vy };
        })
      );
      requestAnimationFrame(moveDots); // Continuously animate
    };
    moveDots();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === lines.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#000] w-full h-screen overflow-hidden"> {/* Ensure no horizontal scrolling */}
      {/* Moving Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="dot absolute"
          style={{
            top: `${dot.y}px`,
            left: `${dot.x}px`,
          }}
        ></div>
      ))}

      {/* Content on top of the background */}
      <div className="relative w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
        <div className="text-container flex flex-col items-center text-center w-full mt-[10vh] sm:mt-[10vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-['Founders_Grotesk_X-Condensed'] text-white mb-14"
            >
              {lines[activeIndex]}
            </motion.div>
          </AnimatePresence>
          <div className="button-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/introduction">
              <button className="flex uppercase items-center justify-center gap-2 font-bold sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-lg text-white hover:bg-blue-900 transition duration-300">
                Get Started &gt;&gt;
              </button>
            </Link>
            <Link to="/exploreservices">
              <button className="flex uppercase items-center justify-center gap-2 font-bold sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-lg text-white hover:bg-blue-900 transition duration-300">
                Explore Services &gt;&gt;
              </button>
            </Link>
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
}

export default LandingPage;
