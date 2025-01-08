import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
     <h1>Welcome to Sugar Blossom</h1> <br /> <br />

      <h3>
      <Link href='/shop'>Shop Now</Link>
      </h3> <br /><br />

      <h3>
      <Link href='/cart'>View Cart</Link>
      </h3> <br /><br />
      


    </>
  )
}
