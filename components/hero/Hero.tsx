import React from 'react'
import Image from 'next/image'
import './hero.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
        <section className='hero-container'>
            <div className='hero-img'>
                <Image  
                    src='/hero6.jpg'
                    alt='hero image'
                    width={430}
                    height={600}
                    className='hero-img'
                />
            </div>    
            {/*text & btn higher z-index place on the image */}
            <div className='hero-caption'>
                <h2>Indulge in Layers of Happiness</h2>
            </div>

            <div className='shop-btn'>
                <Link href='/' className="btn btn-glass">SHOP NOW</Link>
            </div>
        </section> 
    </>
  )
}
