import React from 'react';
import { motion } from 'framer-motion';
import { DiResponsive } from "react-icons/di";
import { MdAppSettingsAlt } from "react-icons/md";
import { GiBullseye } from "react-icons/gi";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import { FcSupport } from "react-icons/fc";

const bounce = {
  hidden: { scale: 1 },
  visible: { 
    scale: [1, 1.2, 1], 
    transition: { 
      duration: 1, 
      ease: 'easeOut', 
      repeat: Infinity,
      repeatType: 'loop'
    }
  },
};

function Features() {
  return (
    <div className='w-full h-full bg-[#2a2a2e] flex flex-col items-center px-4 md:px-10'>
      <span className='title text-[#61DAFB] text-2xl mt-20 text-center'> ••• Key Functionalities ••• </span>
      <span className='mt-10 md:mt-20 sub-title font-["Founders_Grotesk_X-Condensed"] text-white text-4xl md:text-6xl lg:text-8xl mb-4 text-center'>
        The Designing Features of Web
      </span>
      <div className='p-8 md:p-20 rounded-lg flex flex-wrap justify-center gap-4'>
        <FeatureItem icon={<DiResponsive size={48} color='#61DAFB' />} text="Responsive Design" />
        <FeatureItem icon={<MdAppSettingsAlt size={48} color='#61DAFB' />} text="Extensive Configuration" />
        <FeatureItem icon={<GiBullseye size={48} color='#61DAFB' />} text="Modern Motion Design" />
        <FeatureItem icon={<TiArrowMaximiseOutline size={48} color='#61DAFB' />} text="SEO Friendly Coding" />
        <FeatureItem icon={<FcSupport size={48} color='#61DAFB' />} text="Best Technical Assistance" />
      </div>
    </div>
  );
}

const FeatureItem = ({ icon, text }) => {
  return (
    <motion.div 
      className='flex flex-col items-center bg-[#1e1e22] p-4 rounded-lg hover:bg-gray-900 mr-10 transition duration-300'
      variants={bounce}
      initial='hidden'
      animate='visible'
    >
      <motion.div 
        className='rounded-full bg-[#2a2a2e] p-2'
        variants={bounce}
        initial='hidden'
        animate='visible'
      >
        {icon}
      </motion.div>
      <span className='text-white mt-3 font-semibold'>{text}</span>
    </motion.div>
  );
}

export default Features;
