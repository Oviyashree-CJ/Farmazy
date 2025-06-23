import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/payment.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [paymentOption, setPaymentOption] = useState("delivery");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isBuyNowEnabled, setIsBuyNowEnabled] = useState(false);

  const [showUpiModal, setShowUpiModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [upiPin, setUpiPin] = useState("");

  useEffect(() => {
    if (location.state && location.state.items) {
      setItems(location.state.items);
    }
  }, [location]);

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
    setIsBuyNowEnabled(false);
    checkFormValidity(option);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    checkFormValidity(paymentOption);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
    checkFormValidity(paymentOption);
  };

  const checkFormValidity = (option) => {
    if (option === "delivery" && address && contactNumber) {
      setIsBuyNowEnabled(true);
    } else if (option === "direct") {
      setIsBuyNowEnabled(true);
    } else {
      setIsBuyNowEnabled(false);
    }
  };

  const handleProceedToPay = () => {
    setShowUpiModal(true);
  };

  const handleConfirmPayment = () => {
    setShowUpiModal(false);
    setShowSuccessModal(true);
  
    setTimeout(() => {
      // Always fetch latest cart directly from localStorage (not state)
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Filter out the purchased items based on unique ID
      const updatedCart = storedCart.filter(
        (cartItem) =>
          !items.some(
            (purchasedItem) =>
              purchasedItem.id === cartItem.id &&
              purchasedItem.name === cartItem.name &&
              purchasedItem.price === cartItem.price
          )
      );
  
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
  
      // Notify other components
      window.dispatchEvent(new Event("cartUpdated"));
  
      // Navigate to home after 2s
      setShowSuccessModal(false);
      navigate("/");
    }, 1000);
  };
  

  const handleCancelModal = () => {
    setShowUpiModal(false);
    setShowSuccessModal(false);
  };

  return (
    <div className="payment-page">
      <h2>Review Your Order</h2>

      <div className="order-summary">
        <h3>Selected Items</h3>
        {items.map((item, index) => (
          <div key={index} className="item-details">
            <img src={item.img} alt={item.name} className="item-img" />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="payment-method">
        <h3>Choose Payment Method</h3>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="direct"
            checked={paymentOption === "direct"}
            onChange={() => handlePaymentOptionChange("direct")}
          />
          Direct Purchase
        </label>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="delivery"
            checked={paymentOption === "delivery"}
            onChange={() => handlePaymentOptionChange("delivery")}
          />
          Home Delivery
        </label>

        {paymentOption === "delivery" && (
          <div className="delivery-info">
            <div>
              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                placeholder="Enter your delivery address"
              />
            </div>
            <div>
              <label>Contact Number</label>
              <input
                type="text"
                value={contactNumber}
                onChange={handleContactNumberChange}
                placeholder="Enter your contact number"
              />
            </div>
          </div>
        )}

        <button
          className="btn btn-primary"
          onClick={handleProceedToPay}
          disabled={!isBuyNowEnabled}
        >
          {isBuyNowEnabled ? "Proceed to Pay" : "Please complete all fields to enable"}
        </button>
      </div>

      {showUpiModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Enter UPI PIN</h3>
            <input
              type="password"
              value={upiPin}
              onChange={(e) => setUpiPin(e.target.value)}
              placeholder="UPI PIN"
            />
            <div className="modal-buttons">
              <button className="btn btn-success" onClick={handleConfirmPayment}>
                Proceed
              </button>
              <button className="btn btn-secondary" onClick={handleCancelModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Payment Successful 🎉</h3>
            <p>Thank you for your purchase!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
