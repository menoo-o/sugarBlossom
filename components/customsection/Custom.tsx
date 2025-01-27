import React from 'react'
import './custom.css'
import Link from 'next/link'

export default function Custom() {
    return (
      <>
        <div className='custom-container'>
          <div className='custom-text'>
            <h2>Craving Something Special? Let’s Bake It Happen!</h2>
            <h4>Have a unique cake idea? We’re here to bring it to life!</h4>
            <div className='link-custom'>
              <Link href='/collections'>Create Your Masterpiece</Link>
            </div>
          </div>
        </div>
      </>
    );
  }