import React from 'react'
import Hero from '@/components/hero/Hero'
import Occasion from '@/components/Occasion/Occassion'
import Ordersteps from '@/components/orderingsteps/Ordersteps'
import Offerings from '@/components/offerings/Offerings'
import Custom from '@/components/customsection/Custom'
import Slider from '@/components/sliderswiper/Slider'




export default async function Home() {
  try {
    // Fetch collections from the API
    const response = await fetch('http://localhost:3000/api/hero', {
      cache: 'force-cache', // Ensures SSG behavior
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch hero image');
    }
    
   
    
    const { hero } = data;

    // Ensure hero data is available and is an array
    if (!hero || !Array.isArray(hero) || hero.length === 0 || !hero[0].fileId) {
      throw new Error('No hero data found');
    }

    // Use the first hero image
    const heroImage = hero[0];
   

    // Render both Hero and Offerings
    return (
      <>
           {heroImage ? (
          <Hero img={{ fileId: heroImage.fileId, alt: 'Hero Image' }} />
        ) : (
          <div>Failed to load hero image.</div>
        )}
   
          <Offerings />
          <Ordersteps />
          <Occasion />
          <Custom />
          <Slider />
      </>
    );
  } catch (error) {
    console.error(error);
    // Fallback error handling
    return <div>Failed to load data. Please try again later.</div>;
  }
}