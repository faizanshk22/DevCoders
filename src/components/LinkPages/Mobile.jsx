import React from 'react';

function Mobile() {
  return (
    <div className="w-full min-h-screen bg-[#1e1e22] flex flex-col items-center py-10">
      <span className="title text-[#61DAFB] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10">
        ••• Mobile App Development •••
      </span>
      <div className="content-container w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 mt-10 lg:mt-20">
        <div className="text-container w-full lg:w-1/2 font-['Founders_Grotesk_X-Condensed'] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Mobile app development services offer a comprehensive range of solutions designed to create, maintain, and optimize applications for mobile devices. These services typically include custom mobile app development, where developers build tailored applications to meet specific business goals and user needs. The process begins with detailed planning and design, focusing on creating intuitive, user-friendly interfaces and seamless experiences across various mobile platforms. Mobile app development encompasses both native and cross-platform development, utilizing technologies such as Swift for iOS, Kotlin for Android, and frameworks like React Native or Flutter for building apps that work on multiple platforms from a single codebase. Additionally, these services cover backend integration, API development, and cloud-based solutions to ensure robust functionality and scalability. Quality assurance and rigorous testing are integral to ensure the app performs well under various conditions and devices. Post-launch support and maintenance are also crucial, addressing updates, bug fixes, and performance enhancements. Mobile app development services play a pivotal role in helping businesses reach their customers through innovative, reliable, and engaging mobile applications tailored to their specific needs.
        </div>
        <div className="icon-container w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
          <img
            src="/icons/app-settings.png"
            alt="App Settings"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
