import React from "react";
import { products } from "../../Data/Products";
import useCartStore from "../../Store/UseCartStore/useCartStore";
import { Link } from "react-router-dom";
import cartIcon from "/src/assets/Cart.png";

const Home = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const isCartEmpty = cart.length === 0;

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
              <img
                src={cartIcon}
                alt="Cart"
                style={{ width: "20px", marginRight: "8px" }}
              />
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <div>
        {isCartEmpty ? (
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
      <Link to="/cart">
        <button className="Cart">🛒 Cart:</button>
      </Link>
    </div>
  );
};

export default Home;
