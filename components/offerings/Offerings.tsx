import React from 'react'
import SingleOccasion from '../single occassion/SingleOccasion'
import './offer.css'

export default function Offerings() {

    const offeringImgs = [
        { id: 1, img: "/occasion/hbd.jpg", title: "Birthday" },
        { id: 2, img: "/occasion/ty.jpg", title: "Bento Cakes" },
        { id: 3, img: "/occasion/congrats.jpg", title: "CupCakes" },
      ];

  
    return (
     <>
        <section className='offering-container'>
            
            <h2>Sweeten Your Day</h2>
            <div className='offering-mapping'>

                {offeringImgs.map((offers)=>(

                    <SingleOccasion
                        key={offers.id}
                        img={offers.img}
                        title={offers.title}
                         className="single"
                    />
                ))}
            </div>
        </section>
     </>
  )
}
