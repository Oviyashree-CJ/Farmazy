import React from "react";
import "../assets/css/ProductSection.css";

const ProductSection = ({ id, title, products, onAddToCart }) => {
  return (
    <div className="product-card" id={id}>
      <h2>{title}</h2>
      <div className="product-row">
        {products.map((product, index) => (
          <div className="product-col" key={index}>
            <div className="card">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.desc}</p>
                <p className="fw-bold">₹{product.price} / {product.unit}</p>
                <button className="add-to-cart" onClick={() => {
                    onAddToCart(product);
                    }}>
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
