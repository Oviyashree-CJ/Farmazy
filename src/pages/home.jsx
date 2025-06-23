import React from 'react';
import '../assets/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import GroceryCarousel from '../components/Carousel'; // Import the carousel component

const Home = () => {
  return (
    <>
      <section className="hero-section d-flex align-items-center justify-content-center text-white text-center">
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Fresh Groceries, Delivered Fast!</h1>
          <p className="lead">Your one-stop solution for all grocery needs.</p>
          <a href="/products" className="btn btn-lg btn-success">Shop Now</a>
        </div>
      </section>

      <GroceryCarousel />
    </>
  );
};

export default Home;
