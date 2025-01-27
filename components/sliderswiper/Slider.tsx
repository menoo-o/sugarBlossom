'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Mock data for cake images

interface Cake {
  id: string;
  fileId: string;
  alt?: string;
}

export default function Slider() {
  const [data, setData] = useState<Cake[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hero', {
          cache: 'force-cache',
          next: { revalidate: 3600 },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const result = await response.json();
        const { slider } = result;

        if (!slider || slider.length === 0) {
          throw new Error('No slider data found');
        }

        setData(slider);
      } catch (error) {
        console.error('Error fetching collections:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load collections. Please try again later.</div>;
  }

  return (
    <div className="slider-container">
      <h2 className="slider-heading">Find us on Instagram</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
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
        {data.map((cake) => (
          <SwiperSlide key={cake.id}>
            <div className="slide-content">
              <Image
                src={cake.fileId}
                alt={cake.alt || 'cake image'}
                className="cake-image"
                fill
                sizes="(max-width: 768px) 100px, (min-width: 769px) 300px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}