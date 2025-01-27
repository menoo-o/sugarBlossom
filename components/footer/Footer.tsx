'use client'

import React from 'react'
import './footer.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year for copyright
  
    return (
      <>
        <section className='footer-container'>
        
          
      
  
          {/* Feedback Section */}
          <div className='feedback-container'>
            <h3>We Value Your Feedback</h3>
            <p>
              Your feedback helps us improve. If you have any suggestions, concerns, or compliments, 
              please don’t hesitate to reach out to us directly at:
            </p>
            <p className='email'>sugarblossom@gmail.com</p>
          </div>
  
          {/* Collection Links */}
          <div className='collection-links'>
            <h3>Our Collections</h3>
            <ul>
              <li><Link href='/cakes'>Cakes</Link></li>
              <li><Link href='/cupcakes'>Cupcakes</Link></li>
              <li><Link href='/bento-cakes'>Bento Cakes</Link></li>
              <li><Link href='/custom-cakes'>Custom Cakes</Link></li>
            </ul>
          </div>
  
          {/* More Info Links */}
          <div className='more-info-links'>
            <h3>More Information</h3>
            <ul>
              <li><Link href='/about'>About Us</Link></li>
              <li><Link href='/faq'>FAQs</Link></li>
              <li><Link href='/terms'>Terms & Conditions</Link></li>
              <li><Link href='/privacy'>Privacy Policy</Link></li>
            </ul>
          </div>

          <div className='social-links'>
            <h3>Stay Connected</h3>
            <div className='social-icons'>
              <Link href='/'>
                <Image 
                  src='/icons/insta.svg'
                  alt='Instagram'
                  width={25}
                  height={25}
                />    
              </Link>
              <Link href='/'>
                <Image 
                  src='/icons/fb.svg'
                  alt='Facebook'
                  width={25}
                  height={25}
                />    
              </Link>
            </div>
          </div>
  
          {/* Copyright */}
          <div className='copyright'>
            <p>&copy; {currentYear} Sugar Blossom. All rights reserved.</p>
          </div>


        </section>
      </>
    );
  }