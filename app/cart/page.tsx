// app/cart/page.tsx
'use client'; // Mark as a Client Component
import { useCartStore } from "@/store/cart";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
    useCartStore();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product.name} className="cart-item">
              <img
                src={item.product.imgspercake[0]}
                alt={item.product.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.product.name}</h3>
                <p>Flavor: {item.flavor}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: £{(item.product.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.product.name)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.product.name)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.product.name)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}