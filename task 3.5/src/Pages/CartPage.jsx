import React from "react";
import useCartStore from "../Store/CartStore";


const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div>
      <h2 className="Cart">Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>
                <img src={item.Picture} alt={item.name} />
                {item.name} — Quantity: {item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default CartPage;
