import React from "react";
import Image from "next/image";
import './single.css'

interface SingleOccasionProps {
  img: string;
  title: string;
  price ? : number;
  className?: string;
}

export default function SingleOccasion({ img, title, price, className }: SingleOccasionProps) {
  return (
    <div className={`single-occasion ${className}`}> {/* Apply the className */}
        <div className="image-container">
          <Image
            src={img}
            alt={title}
            quality={100}
            fill // Dynamically fill the container
            sizes="(max-width: 768px) 100px, (min-width: 769px) 300px" // Set responsive sizes
            className="occasion-img"
          />
  </div>
      <h3 style={{ fontSize: '1.4rem' }}>{title}</h3>
      <h4>{price}</h4>
    </div>
  );
}