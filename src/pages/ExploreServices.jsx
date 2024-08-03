import React from 'react';
import { motion } from 'framer-motion';
import Web from '../components/LinkPages/Web';
import Mobile from '../components/LinkPages/Mobile';
import Seo from '../components/LinkPages/Seo';
import DevOps from '../components/LinkPages/DevOps';
import Footer from '../components/Footer';
import CustomSolution from '../components/LinkPages/CustomSolution';

const pageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const pageTransition = {
  type: 'spring',
  stiffness: 50,
};

function ExploreServices() {
  return (
    <motion.div
      className="w-full min-h-screen bg-[#1e1e22] flex flex-col items-center overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={pageTransition}
      style={{ backgroundColor: '#1e1e22' }} // Ensure background color is set
    >
      <div className="w-full">
        <Web />
        <Mobile />
        <Seo />
        <DevOps />
        <CustomSolution />
      </div>
      <Footer />
    </motion.div>
  );
}

export default ExploreServices;
