import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const data = [
  {
    title: "Performance Optimization",
    description:
      "Optimize website performance by improving loading times and minimizing resource usage",
  },
  {
    title: "Multitasking",
    description:
      "Multi-task across multiple functions and roles to generate project results and meet deadlines and organizational expectations",
  },
  {
    title: "Response",
    description:
      "Actively listen to customer’s requests, confirming full understanding before addressing concerns.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Test and ensure that websites function consistently across different web browsers.",
  },
  {
    title: "Collaboration",
    description:
      "Collaborate with backend developers, designers, and other team members to integrate frontend and backend components.",
  },
  {
    title: "Designing",
    description: "Make variety of different designs, layouts and websites also providing GOAT UI designs before the actual project starts.",
  },
  {
    title: "Web Development",
    description:
      "Write clean, efficient, and maintainable code using HTML, CSS, JavaScript, React and Next",
  },
  {
    title: "Responsive Structure",
    description:
      "Ensure websites are visually appealing and function seamlessly on various devices and screen sizes.",
  },
  {
    title: "Solutions",
    description:
      "Develop technical solutions required to accommodate specific user-facing assets such as [Product or Service]",
  },
];

export default function Performance() {
  const controls = useAnimation();
  const PerformanceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (PerformanceRef.current) {
      observer.observe(PerformanceRef.current);
    }

    return () => {
      if (PerformanceRef.current) {
        observer.unobserve(PerformanceRef.current);
      }
    };
  }, [controls]);

  const slideIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='bg-[#000]'>
    <div ref={PerformanceRef} className="w-full h-full py-8 px-6 bg-[#2a2a2e]" style={{  borderRadius: "10%"}}>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={slideIn}
        className="title text-[#61DAFB] text-2xl mt-4 mb-10 text-center"
      >
        ••• What We Provide •••
      </motion.h1>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={slideIn}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="group bg-gray-200 border border-gray-400 rounded-lg shadow-md p-6 flex items-start transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            {/* Tick Icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-4 transition duration-300 group-hover:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Title and Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  );
}
