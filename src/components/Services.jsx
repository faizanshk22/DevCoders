import React from 'react';

function Services() {
  return (
    <div className='w-full min-h-screen bg-[#1e1e22] flex flex-col items-center justify-center'>
      <span className='title text-[#61DAFB] text-2xl mt-20 sm:mt-[10vh]'> ••• Our Services ••• </span>
      <span className='mt-20 sm:mt-[10vh] sub-title font-["Founders_Grotesk_X-Condensed"] text-white text-4xl sm:text-8xl mb-4'>Our Expertise</span>
      <div className='sm:mt-10 flex flex-wrap justify-center gap-5 sm:gap-10 p-4 rounded-lg hover:bg-blue-900 transition duration-300'>
        <ServiceCard icon="/icons/programming.png" alt="Programming" title="Web Application Development" />
        <ServiceCard icon="/icons/app-settings.png" alt="App Settings" title="Mobile Application Developments" />
        <ServiceCard icon="/icons/seo.png" alt="SEO" title="Search Engine Optimization" />
        <ServiceCard icon="/icons/infinity.png" alt="Infinity" title="DevOps Engineering" />
        <ServiceCard icon="/icons/office.png" alt="Office" title="Custom Enterprise Solutions" />
      </div>
    </div>
  );
}

function ServiceCard({ icon, alt, title }) {
  return (
    <div className="flex flex-col items-center w-40 sm:w-60">
      <img src={icon} alt={alt} className="w-24 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-125" />
      <span className="text-white mt-2 text-sm sm:text-base font-[Neue-Montreal] font-semibold text-center">{title}</span>
    </div>
  );
}

export default Services;
