import React from 'react'
import Image from 'next/image'
import './hero.css'
import Link from 'next/link'

type HeroProps = {
    img: {
      fileId: string; // Use fileId instead of url
      alt?: string; // Optional alt text for accessibility
    };
  };

  export default function Hero({ img }: HeroProps) {
     // If the fileId is empty, do not render the Image component
  if (!img.fileId) {
    return <div>No image available.</div>;
  }

  return (
    <>
        <section className='hero-container'>
            <div className='hero-img'>
            <Image
                src={img.fileId} // Use fileId here
                fill
                priority={true}
                alt={img.alt || 'hero-image'}
                style={{ objectFit: 'cover' }} // Ensures the image covers the container
        />
            </div>
            {/*text & btn higher z-index place on the image */}
            <div className='hero-caption'>
                <h1>Elevate your celebrations with <br /><span>Sugar Blossom&#39;s</span><br /></h1>
            </div>

            <div className='links'>
                <div className='link-baked-to-order'>
                    <Link href='/collections' className="btn btn-glass">Baked To Order</Link>
                    <p>Get it in 5 Days</p>
                </div>
                <div className='link-order-now'>
                    <Link href='/collections' className="btn btn-glass order-now">Last Minute Order</Link>
                    <p>Get it in 48 Hrs+</p>
                </div>

            </div>
        </section> 
    </>
  )
}
