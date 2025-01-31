import React from 'react';
import Contact from './Contact';
import Map from './Map';

function Footer() {
  return (
    <>
    <Contact/>
    <Map/>
    <div className="bg-[#000]">
      <footer className="container mx-auto py-6">
        <p className="text-center text-white text-xl font-['Neue Montreal']">&copy; Copyright 2024 DevCoders. All rights reserved</p>
      </footer>
    </div>
    </>
  );
}

export default Footer;

 