import React from 'react'
import SingleOccasion from '../single occassion/SingleOccasion'
import './collection.css'

export default function Collections() {

    const collectionImgs = [
        { id: 1, img: "/occasion/hbd.jpg", title: "Birthday" },
        { id: 2, img: "/occasion/wedding.jpg", title: "Wedding" },
        { id: 3, img: "/occasion/ty.jpg", title: "Bento Cakes" },
        { id: 4, img: "/occasion/congrats.jpg", title: "CupCakes" },
        { id: 5, img: "/occasion/think.jpg", title: "Custom Cakes" },
        { id: 6, img: "/occasion/sendlove.jpg", title: "Cake Accessories" },
      ];


  return (
    <>
        <section className='collection-container'>
            <h1>Collections</h1>
            <div className='grid-collections'>
                {collectionImgs.map((collection)=>(
                    <SingleOccasion
                        key={collection.id}
                        img={collection.img}
                        title={collection.title} 
                    />
                ))}
            </div>
        </section>
    </>
  )
}
