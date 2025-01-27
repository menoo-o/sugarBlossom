import React from 'react'
import SingleOccasion from '../single occassion/SingleOccasion'
import './offer.css'

export default function Offerings() {

    const offeringImgs = [
        { id: 1, img: "/occasion/hbd.jpg", title: "Cakes" },
        { id: 2, img: "/cup1.jpg", title: "CupCakes" },
        { id: 3, img: "/bento.webp", title: "Bento Cakes" },
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
