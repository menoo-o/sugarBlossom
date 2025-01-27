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

    // Ensure hero data is available
    if (!hero || hero.length === 0) {
      throw new Error('No hero data found');
    }

    // Use the first hero image (adjust as needed)
    const heroImage = hero[0];

    // Render both Hero and Offerings
    return (
      <>
        <Hero img={{ fileId: heroImage.fileId, alt: 'Hero Image' }} />
        <Offerings />
      </>
    );
  } catch (error) {
    console.error(error);

    // Render error message along with Offerings
    return (
      <>
        <div>Failed to load hero image.</div>
        <Offerings />

        <Ordersteps />
        
        <Occasion />
        <Custom />
        <Slider />

      </>
    );
  }
}
