import SingleProduct from "@/components/SingleDisplay/SingleProduct";

const product = {
  name: 'Chocolate Cake',
  imageUrl: '/hero6.jpg',
  price: 25.99,
  description: 'A rich and decadent chocolate cake perfect for any celebration.',
  flavors: ['Chocolate', 'Vanilla', 'Strawberry'],
  colorScheme: ['Red', 'Blue', 'Green'],
};

export default function ProductPage() {
  return (
    <div>
      <SingleProduct {...product} />
    </div>
  );
}