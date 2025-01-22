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
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
      />
      <h3>{title}</h3>
      <h4>{price}</h4>
    </div>
  );
}