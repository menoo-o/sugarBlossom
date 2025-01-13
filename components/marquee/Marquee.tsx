import React from "react";
import './mar.css'

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>Order by 5pm for next day delivery! </span> 
        <span>Free Delivery on orders over 3,000 PKR</span>
        <span>Delivering in Isb/RWP</span>
      </div>
    </div>
  );
};

export default Marquee;