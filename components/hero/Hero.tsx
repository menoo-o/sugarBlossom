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
                    src='/herov11.jpg'
                    alt='hero image'
                    width={430}
                    height={650}
                    className='hero-img'
                />

            </div>    
            {/*text & btn higher z-index place on the image */}
            <div className='hero-caption'>
                <h1>Elevate your celebrations with <br /><span>Sugar Blossom&#39;s</span><br /> premium cakes</h1>
            </div>

            <div className='links'>
                <div className='link-baked-to-order'>
                    <Link href='/' className="btn btn-glass">Baked To Order</Link>
                    <p>Get it in 5 Days</p>
                </div>
                <div className='link-order-now'>
                    <Link href='/' className="btn btn-glass order-now">Last Minute</Link>
                    <p>Get it in 48 Hrs+</p>
                </div>

            </div>
        </section> 
    </>
  )
}
