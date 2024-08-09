import React from 'react';
import { motion } from 'framer-motion';
import Web from '../components/LinkPages/Web';
import Mobile from '../components/LinkPages/Mobile';
import Seo from '../components/LinkPages/Seo';
import DevOps from '../components/LinkPages/DevOps';
import Footer from '../components/Footer';
import CustomSolution from '../components/LinkPages/CustomSolution';

// const pageVariants = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0 },
// };

// const pageTransition = {
//   type: 'spring',
//   stiffness: 50,
// };

function ExploreServices() {
  return (
    <>
      <div className='explore w-full min-h-screen bg-[#1e1e22] py-10'>
        <div
          className="flex flex-col items-center overflow-hidden"
          style={{ backgroundColor: '#1e1e22' }} // Ensure background color is set
        >
          <div className="w-full">
            <Web />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <Mobile />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <Seo />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <DevOps />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <CustomSolution />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExploreServices;
