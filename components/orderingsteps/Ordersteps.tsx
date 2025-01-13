import React from 'react'
import Image from 'next/image'
import './order.css'

export default function Ordersteps() {
  return (
    <section className="order-steps-container">
      <div className="heading">
        <h2>Ordering is as Simple as 1,2,3</h2>
      </div>

      <div className="steps">
        <div className="step">
          <div>
            <h4 className="step-numbering">1</h4>
            <h4>Choose Your Treats</h4>
            <p>Select from our delicious range of cakes & cupcakes</p>
          </div>
          <Image src="/icons/cake.svg" alt="cake" width={40} height={40} />
        </div>

        <div className="step">
          <div>
            <h4 className="step-numbering">2</h4>
            <h4>Secure Payment</h4>
            <p>Complete your order with our safe & convenient payment options</p>
          </div>
          <Image src="/icons/payment.svg" alt="payment" width={40} height={40} />
        </div>

        <div className="step">
          <div>
            <h4 className="step-numbering">3</h4>
            <h4>Get Your Treats</h4>
            <p>Pick up your orders at our store or have it delivered right to your doorstep.</p>
          </div>
          <Image src="/icons/parcel.svg" alt="parcel" width={40} height={40} />
        </div>
      </div>
</section>
  )
}
