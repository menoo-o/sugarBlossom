import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <>
     <Image
        src='/logo0.svg'
        alt='log'
        width={200}
        height={200}
     /> 
    </>
  )
}
