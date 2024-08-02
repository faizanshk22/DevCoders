import React from 'react'
import Footer from '../components/Footer'

function Introduction() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#1e1e22] flex flex-col items-center py-10">
        <span className="title text-[#61DAFB] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-20 sm:mt-24 md:mt-32 lg:mt-30">
          ••• Get Started •••
        </span>
        <div className="text-container font-['Founders_Grotesk_X-Condensed'] text-white text-lg sm:text-2xl md:text-4xl mt-10 px-4 sm:px-8 lg:px-16">
          <p>
            <strong className="font-sans">Ready to Transform Your Vision into Reality?</strong><br />
            Embarking on a new project or finding the perfect solution for your business can be both exciting and overwhelming. We're here to make the process smooth and straightforward. Follow these simple steps to get started:
          </p>
          <p className="mt-6">
            <strong className="font-sans">Explore Our Services:</strong><br />
            Take a look at the diverse range of services we offer. Whether you’re interested in web development, mobile app creation, or optimizing your SEO, we have tailored solutions to meet your needs.
          </p>
          <p className="mt-6">
            <strong className="font-sans">Reach Out to Us:</strong><br />
            Have questions or need more information? Contact our team through our Contact Page or give us a call. We’re here to provide you with all the details and answer any queries you may have.
          </p>
          <p className="mt-6">
            <strong className="font-sans">Schedule a Consultation:</strong><br />
            Let’s discuss your project in detail. Schedule a consultation with one of our experts to outline your goals, challenges, and expectations. This will help us craft a strategy that aligns perfectly with your vision.
          </p>
          <p className="mt-6">
            <strong className="font-sans">Get a Quote:</strong><br />
            Once we understand your needs, we’ll provide you with a detailed quote. This will include a clear breakdown of costs, timelines, and deliverables, ensuring transparency and no surprises.
          </p>
          <p className="mt-6">
            <strong className="font-sans">Kickoff Your Project:</strong><br />
            After agreeing on the quote, we’ll start working on your project. Our dedicated team will keep you updated with regular progress reports and be available for any feedback or adjustments.
          </p>
          <p className="mt-6">
            <strong className="font-sans">Achieve Your Goals:</strong><br />
            Watch as we bring your ideas to life with high-quality solutions and exceptional service. We’re committed to delivering results that exceed your expectations and help you achieve your objectives.
          </p>
          <p className="mt-8">
           <strong className="font-sans"> Ready to start your journey with us? Click the logo to get the Quote!</strong>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Introduction
