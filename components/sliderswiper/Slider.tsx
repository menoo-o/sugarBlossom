'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Mock data for cake images
const cakeImages = [
  { id: 1, src: '/insta/snap1.jpg', alt: 'Cake 1' },
  { id: 2, src: '/insta/snap2.jpg', alt: 'Cake 2' },
  { id: 3, src: '/insta/snap3.jpg', alt: 'Cake 3' },
  { id: 4, src: '/insta/snap4.jpg', alt: 'Cake 4' },
  { id: 5, src: '/insta/snap5.jpg', alt: 'Cake 5' },
  { id: 6, src: '/insta/snap6.jpg', alt: 'Cake 6' },
  { id: 7, src: '/insta/snap7.jpg', alt: 'Cake 7' },
  { id: 8, src: '/insta/snap9.jpg', alt: 'Cake 8' },
];

export default function Slider() {
  return (
    <>
      <div className="slider-container">
        <h2 className="slider-heading">Find us on Instagram</h2>
       

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            centeredSlides={true} // Center the active slide
            loop={true} // Enable looping for proper centering
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000, // 3 seconds delay
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            modules={[Pagination, Autoplay]} // Add necessary modules
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {cakeImages.map((cake) => (
              <SwiperSlide key={cake.id}>
                <div className="slide-content">
                  <Image 
                    src={cake.src}
                    alt={cake.alt}
                    className='cake-image'
                    fill // Dynamically fill the container
                    sizes="(max-width: 768px) 100px, (min-width: 769px) 300px" // Set responsive sizes
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

      </div>
    </>
  );
}