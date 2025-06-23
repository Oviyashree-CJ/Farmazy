import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    updateCart(updatedCart);
  };

  const isLoggedIn = () => {
    return !!localStorage.getItem("loggedInUser");
  };
  

  const handleBuyNow = (item) => {
    if (!isLoggedIn()) {
      alert("Please login to proceed with the purchase.");
      return;
    }
  
    const confirmPurchase = window.confirm(`Are you sure you want to purchase ${item.name}?`);
    if (confirmPurchase) {
      navigate("/payment", { state: { items: [item] } });
    }
  };
  
  const handleBuyAllNow = () => {
    if (!isLoggedIn()) {
      alert("Please login to proceed with the purchase.");
      return;
    }
  
    const confirmPurchaseAll = window.confirm("Are you sure you want to purchase all items in your cart?");
    if (confirmPurchaseAll) {
      navigate("/payment", { state: { items: cart } });
    }
  };
  

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3>Your Shopping Cart</h3>
      </div>

      <div className="table-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Buy Now</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-cart">Your cart is empty.</td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index}>
                  <td className="cart-item-info">
                    <img src={item.img} alt={item.name} className="cart-item-img" />
                    <span>{item.name}</span>
                  </td>
                  <td>₹{item.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(index)} className="quantity-btn" id="decre">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(index)} className="quantity-btn" id="incre">+</button>
                    </div>
                  </td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="buy-now-btn" onClick={() => handleBuyNow(item)}>
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="cart-summary">
        <h3>Total Amount: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</h3>
      </div>

      {cart.length > 0 && (
        <div className="buy-all-container">
          <button className="buy-all-btn" onClick={handleBuyAllNow}>
            Buy All Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
