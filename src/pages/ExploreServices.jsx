import React from 'react';
import Web from '../components/LinkPages/Web';
import Mobile from '../components/LinkPages/Mobile';
import Seo from '../components/LinkPages/Seo';
import DevOps from '../components/LinkPages/DevOps';
import Footer from '../components/Footer';
import CustomSolution from '../components/LinkPages/CustomSolution';


function ExploreServices() {
  return (
    <div>
     <Web/>
     <Mobile/>
     <Seo/>
     <DevOps/>
     <CustomSolution/>
     <Footer/>
    </div>
  );
}

export default ExploreServices;
