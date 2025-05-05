import React from "react";
import useCartStore from "../../Store/UseCartStore/useCartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const isCartEmpty = cart.length === 0;
  const hasIteminCart = cart.length > 0;

  return (
    <div>
      <h2 className="Cart">Cart</h2>
      {isCartEmpty ? (
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
      {hasIteminCart && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
