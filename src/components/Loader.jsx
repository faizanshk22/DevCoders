import React from 'react';
import Loader from '/loader.png';

function Preloader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#1e1e22] z-50">
      <div className="animate-spin">
        <img src={Loader} alt="Loading" className="w-32 h-32 sm:w-60 sm:h-60" />
      </div>
    </div>
  );
}

export default Preloader;
