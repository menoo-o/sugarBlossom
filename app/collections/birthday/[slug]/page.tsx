// app/collections/birthday/[slug]/page.tsx
interface Params {
    slug: string;
  }
  
  interface Props {
    params: Params;
  }
  
  export default function BirthdaySlugPage({ params }: Props) {
    const { slug } = params;
  
    // Fetch data based on the slug (e.g., from an API or database)
    const product = {
      name: slug.replace(/-/g, ' '), // Convert slug to title (e.g., "chocolate-cake" -> "chocolate cake")
      description: `This is a delicious ${slug.replace(/-/g, ' ')}.`,
      price: '$25',
    };
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  }