interface Cakes {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}


import Image from "next/image";
import Link from "next/link";
import SingleOccasion from "@/components/single occassion/SingleOccasion";
// app/collections/birthday/page.tsx
export default async function BirthdayPage() {
   // Fetch data at build time (SSG)
   const response = await fetch('http://localhost:3000/api/getBirthdayCakes', {
    cache: 'force-cache', // Ensures SSG behavior
    next: { revalidate: 3600 }, // Optional: Revalidate every hour (ISR)
  });

  if(!response.ok){
    throw new Error('failed to fetch products')
  }

  const { products } = await response.json();

  
    return (
      <>
        <section className="birthday-page-container">
          
          <div className="hero-img">
             <Image 
              src='/collections/birthday.webp' 
              alt="birthday cakes"
              width={500}
              height={300}
             />
          </div>

          <div className="birthday-page-heading">
            <h1>All Birthday Treats</h1>
              <p>Say &#x27;Happy Birthday&#x27; with a beautiful handmade cake delivered in Islamabad & Rawalpindi.</p>
              <p> Our candles and cake accessories can be found <Link href='/collections/accessories'>here</Link></p>
          </div>

          <div className="birthday-cakes-imgs-container">
              {products.map((birthday:Cakes)=>(
                <Link href='/collections/birthday/cakes' key={birthday.id}>
                  <SingleOccasion
                    img={birthday.imageUrl}
                    title={birthday.name}
                    price= {birthday.price}
                    />
                </Link>
              ))}
          </div>

          
          {/* <ul>


            <li><a href="/collections/birthday/chocolate-cake">Chocolate Cake</a></li>
            <li><a href="/collections/birthday/vanilla-cake">Vanilla Cake</a></li>
            <li><a href="/collections/birthday/red-velvet-cake">Red Velvet Cake</a></li>
          </ul> */}

        </section>
        
      </>
    );
  }