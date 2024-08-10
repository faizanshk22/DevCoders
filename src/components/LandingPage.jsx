import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Stats from './Stats';

function LandingPage() {
  const lines = [
    "Web Development Solutions & IT Services",
    "Mobile Development Solutions and Services",
    "SEO for better experience of your business",
    "DevOps Engineering and Services"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === lines.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const textTransition = { duration: 1, ease: 'easeInOut' };

  return (
    <div
      className='relative w-full h-screen bg-cover bg-center sm:bg-top bg-[#1e1e22] flex flex-col items-center justify-center px-4 custom-bg-position'
      style={{ backgroundImage: "url('/images/B.jpg')" }}
    >
      <div className="text-container flex flex-col items-center text-center w-full mt-[8vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={textVariants}
            transition={textTransition}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl font-['Founders_Grotesk_X-Condensed'] text-white mb-10"
          >
            {lines[activeIndex] === "SEO for better experience of your business" ? (
              <>
                SEO for better experience <br /> of your business
              </>
            ) : lines[activeIndex] === "Web Development Solutions & IT Services" ? (
              <>
                Web Development Solutions <br /> & IT Services
              </>
            ) : lines[activeIndex] === "Mobile Development Solutions and Services" ? (
              <>
                Mobile Development Solutions <br /> and Services
              </>
            ) : lines[activeIndex] === "DevOps Engineering and Services" ? (
              <>
                DevOps Engineering <br /> and Services
              </>
            ) : (
              lines[activeIndex]
            )}
          </motion.div>
        </AnimatePresence>
        <div className="button-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/introduction">
            <button className='flex uppercase items-center justify-center gap-2 font-bold sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-lg text-white hover:bg-blue-900 transition duration-300'>
              Get Started &gt;&gt;
            </button>
          </Link>
          <Link to="/exploreservices">
            <button className='flex uppercase items-center justify-center gap-2 font-bold sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-lg text-white hover:bg-blue-900 transition duration-300'>
              Explore Services &gt;&gt;
            </button>
          </Link>
        </div>
      </div>
      <Stats />
    </div>
  );
}

export default LandingPage;



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// function LandingPage() {
//   const lines = [
//     "Web Development Solutions & IT Services",
//     "Mobile Development Solutions and Services",
//     "SEO for better experience of your business",
//     "DevOps Engineering and Services"
//   ];

//   const images = [
//     '/images/A.jpg',
//     '/images/B.jpg',
//     '/images/C.jpg',
//     '/images/E.jpg'
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prevIndex => (prevIndex === lines.length - 1 ? 0 : prevIndex + 1));
//     }, 4000); // Increased time for a smoother transition

//     return () => clearInterval(interval);
//   }, []);

//   const textVariants = {
//     enter: { opacity: 0, y: 20 },
//     center: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   };

//   const imageVariants = {
//     enter: { opacity: 0, scale: 0.95 },
//     center: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 1.05 },
//   };

//   const textTransition = { duration: 1, ease: 'easeInOut' }; // Slightly longer duration
//   const imageTransition = { duration: 1, ease: 'easeInOut' }; // Slightly longer duration

//   return (
//     <div className='relative w-full h-screen bg-[#1e1e22] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-20'>
//       <div className="text-container flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeIndex}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             variants={textVariants}
//             transition={textTransition}
//             className="text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl font-['Founders_Grotesk_X-Condensed'] text-white mb-6 lg:mb-10"
//           >
//             {lines[activeIndex] === "SEO for better experience of your business" ? (
//               <>
//                 SEO <br /> for better experience of your business
//               </>
//             ) : lines[activeIndex] === "Web Development Solutions & IT Services" ? (
//               <>
//                 Web Development Solutions <br /> & IT Services
//               </>
//             ) : lines[activeIndex] === "Mobile Development Solutions and Services" ? (
//               <>
//                 Mobile Development Solutions <br /> and Services
//               </>
//             ) : lines[activeIndex] === "DevOps Engineering and Services" ? (
//               <>
//                 DevOps Engineering <br /> and Services
//               </>
//             ) : (
//               lines[activeIndex]
//             )}
//           </motion.div>
//         </AnimatePresence>
//         <div className="button-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0">
//           <Link to="/introduction">
//             <button className='flex uppercase items-center justify-center gap-2 sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-full text-white hover:bg-blue-900 transition duration-300'>
//               Get Started &gt;&gt;
//             </button>
//           </Link>
//           <Link to="/exploreservices">
//             <button className='flex uppercase items-center justify-center gap-2 sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-full text-white hover:bg-blue-900 transition duration-300'>
//               Explore Services &gt;&gt;
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="image-container flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={activeIndex}
//             src={images[activeIndex % images.length]}
//             alt="Dynamic"
//             initial="enter"
//             animate="center"
//             exit="exit"
//             variants={imageVariants}
//             transition={imageTransition}
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg"
//           />
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
