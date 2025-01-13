import React from "react";
import Image from "next/image";
import './single.css'

interface SingleOccasionProps {
  img: string;
  title: string;
}

export default function SingleOccasion({ img, title }: SingleOccasionProps) {
  return (
    <div className="single-occasion">
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
        className="occasion-image"
      />
      <h3 className="occasion-title">{title}</h3>
    </div>
  );
}