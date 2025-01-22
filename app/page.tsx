import React from 'react'
import Hero from '@/components/hero/Hero'
import Occasion from '@/components/Occasion/Occassion'
import Ordersteps from '@/components/orderingsteps/Ordersteps'
import Offerings from '@/components/offerings/Offerings'
import Custom from '@/components/customsection/Custom'


export default function Home() {
  return (
    <>
     
      <Hero />
      <Offerings />
      <Ordersteps />
      <Occasion />
      <Custom />
      
    </>
  )
}
