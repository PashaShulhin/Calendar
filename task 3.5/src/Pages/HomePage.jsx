import React from "react";
import { products } from "../Data/Products";
import useCartStore from "../Store/CartStore";

const HomePage = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h1>OfficeChairs</h1>
      <div className="productsGrid">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <img src={product.Picture} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <button onClick={() => handleAddToCart(product)}>
              + Add to cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="Cart">Cart:</h2>
      <div>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>
                {item.price} $ x {item.quantity}
              </p>
            </div>
          ))
        )}
      </div>

      <h3>Total price: {totalPrice} $</h3>
    </div>
  );
};

export default HomePage;
