import React from 'react';

function Technologies() {
  return (
    <div className='w-full min-h-2/3 bg-[#2a2a2e] flex flex-col items-center px-4 md:px-10'>
      <span className='title text-[#61DAFB] text-2xl mt-20'> ••• Technologies We Use ••• </span>
      <div className='container flex flex-col items-center mt-[10vh] mb-[10vh]'>
        <div className="icon-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 bg-[#1e1e22] p-4 rounded-md">
          <img src="/icons/icons8-angular-48.png" alt="Angular Icon" className="w-20 h-20 transition-transform transform hover:scale-125" />
          <img src="/icons/icons8-node-js-48.png" alt="Node JS" className="w-20 h-20 transition-transform transform hover:scale-125" />
          <img src="/icons/icons8-css-48.png" alt="CSS3" className="w-20 h-20 transition-transform transform hover:scale-125" />
          <img src="/icons/icons8-html5-48.png" alt="HTML5" className="w-20 h-20 transition-transform transform hover:scale-125" />
          <img src="/icons/icons8-mongo-db-48.png" alt="MongoDB" className="w-20 h-20 transition-transform transform hover:scale-125" />
        </div>
        <div className="icon-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 bg-[#1e1e22] p-4 rounded-md mt-10">
          <img src="/icons/icons8-react-native-48.png" alt="React Native" className="w-20 h-20 transition-transform transform hover:scale-125" />
          <img src="/icons/icons8-python-48.png" alt="Python" className="w-20 h-20 transition-transform transform hover:scale-125" />
          <img src="/icons/icons8-ruby-48.png" alt="Ruby" className="w-20 h-20 transition-transform transform hover:scale-125" />
          <img src="/icons/icons8-wordpress-48.png" alt="WordPress" className="w-20 h-20 transition-transform transform hover:scale-125" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
