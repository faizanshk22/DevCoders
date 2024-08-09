import React from 'react';
import "./Testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight } from 'react-icons/fa'; // Importing FaStar and FaQuoteRight

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { testimonials } from '../data';

function Testimonial() {
  return (
    <div className='testimonials bg-gray-100 py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row lg:items-center'>
                <div className='lg:w-1/2 mb-8 lg:mb-0'>
                    <h3 className='text-2xl font-bold mb-4'>Testimonials</h3>
                    <p className='text-lg'>
                    Appreciation from our passionate & satisfied clients.
                    </p>
                </div>
                <div className='lg:w-1/2'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        speed={600}
                        autoplay={{ delay: 3000 }}
                        slidesPerView="auto"
                        pagination={{
                            el: ".swiper-pagination",
                            type: "bullets",
                            clickable: true,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.name} className='p-6'>
                                <div className='testimonial-item bg-white p-6 rounded-lg shadow-md'>
                                    <div className='flex items-center mb-4'>
                                        <img src={testimonial.src} alt={testimonial.name} className='testimonial-img w-24 h-24 rounded-full border-4 border-gray-100 mr-4' />
                                        <div>
                                            <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
                                            <h4 className='text-sm text-gray-500'>{testimonial.job}</h4>
                                            <div className='stars flex mt-2 text-yellow-400'>
                                                <FaStar className='w-5 h-5' />
                                                <FaStar className='w-5 h-5' />
                                                <FaStar className='w-5 h-5' />
                                                <FaStar className='w-5 h-5' />
                                                <FaStar className='w-5 h-5' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-gray-600 italic'>
                                        <FaQuoteRight className='left-icon mr-2 inline' />
                                        <span>{testimonial.comment}</span>
                                        <FaQuoteRight className='right-icon ml-2 inline transform rotate-360' />
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className='swiper-pagination mt-6'></div>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Testimonial;
