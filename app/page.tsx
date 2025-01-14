import React from 'react'
import Hero from '@/components/hero/Hero'
import Marquee from '@/components/marquee/Marquee'
import Occasion from '@/components/Occasion/Occassion'
import Ordersteps from '@/components/orderingsteps/Ordersteps'

export default function Home() {
  return (
    <>
      <Marquee />
      <Hero />
      <Occasion />
      <Ordersteps />
    </>
  )
}
