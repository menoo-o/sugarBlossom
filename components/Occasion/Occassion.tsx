import React from "react";
import SingleOccasion from "../single occassion/SingleOccasion";
import './occasion.css'
import Link from "next/link";

const occasionImgs = [
  { id: 1, img: "/occasion/hbd.jpg", title: "birthday" },
  { id: 2, img: "/occasion/wedding.jpg", title: "wedding" },
  { id: 3, img: "/occasion/ty.jpg", title: "Thank You" },
  { id: 4, img: "/occasion/congrats.jpg", title: "Congrats" },
  { id: 5, img: "/occasion/think.jpg", title: "Thinking of You" },
  { id: 6, img: "/occasion/sendlove.jpg", title: "Send with love" },
];

export default function Occasion() {
  return (
    <section className="occasion-container">
      <h2>What&#39;s the occasion?</h2>
      <div className="grid-occasions">

        {occasionImgs.map((occasion) => (
          <Link href={`/collections/${occasion.title}`} key={occasion.id}>
            <SingleOccasion
            img={occasion.img}
            title={occasion.title}
          />
          </Link>
          
        ))}
      </div>
    </section>
  );
}