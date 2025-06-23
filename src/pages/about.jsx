import React from "react";
import logo from "../assets/images/logo.png";

const About = () => {
  return (
    <section id="about" className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={logo}
              alt="About"
              className="img-fluid rounded-4 shadow-lg"
              width="300"
            />
          </div>
          <div className="col-md-8">
            <p className="lead">
              Welcome to <strong>Farmazy</strong>, your one-stop destination for
              fresh and high-quality groceries delivered straight to your
              doorstep. We are committed to providing organic, fresh, and
              affordable grocery items to make your shopping experience seamless
              and enjoyable.
            </p>
            <p>
              At Farmazy, we prioritize sustainability, working with local
              farmers and trusted suppliers to bring you the best products.
              Whether you're looking for farm-fresh fruits, organic vegetables,
              premium dairy products, or everyday essentials, we have got you
              covered.
            </p>
            <p className="mb-4">
              Our mission is to simplify grocery shopping, ensuring that you
              receive fresh products quickly and conveniently. With easy
              navigation, secure payments, and timely delivery, Farmazy makes
              grocery shopping hassle-free.
            </p>
            <a href="products.html" className="btn btn-success">
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
