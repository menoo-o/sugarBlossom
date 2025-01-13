import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Marquee from '@/components/marquee/Marquee'
import Occasion from '@/components/Occasion/Occassion'
import Ordersteps from '@/components/orderingsteps/Ordersteps'

export default function Home() {
  return (
    <>
     <Navbar /> 
      <Marquee />
     <Hero />
     <Occasion />
     <Ordersteps />
    </>
  )
}
