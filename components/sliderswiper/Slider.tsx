'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Mock data for cake images
const cakeImages = [
  { id: 1, src: '/insta/cake1.jpeg', alt: 'Cake 1' },
  { id: 2, src: '/insta/cake2.jpeg', alt: 'Cake 2' },
  { id: 3, src: '/insta/cake3.png', alt: 'Cake 3' },
  { id: 4, src: '/insta/cake4.jpeg', alt: 'Cake 4' },
  { id: 5, src: '/insta/cake5.jpeg', alt: 'Cake 5' },
  { id: 6, src: '/insta/cake6.jpeg', alt: 'Cake 6' },
  { id: 7, src: '/insta/cake7.jpeg', alt: 'Cake 7' },
  { id: 8, src: '/insta/cake8.jpeg', alt: 'Cake 8' },
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
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

      </div>
    </>
  );
}