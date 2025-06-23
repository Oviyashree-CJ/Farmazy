import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Carousel.css";
import veg from "../assets/images/vege.jpg";
import fruit from "../assets/images/fruits.jpg";
import diary from "../assets/images/dairy.jpg";
import snack from "../assets/images/snack.jpeg";
import frozen from "../assets/images/frozen.jpg";
import beverage from "../assets/images/beverage.jpg";

const GroceryCarousel = () => {
  const navigate = useNavigate();

  const handleShopNow = (sectionId) => {
    navigate("/products", { state: { scrollTo: sectionId } });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" id="products">Our Best Products</h2>

      <div
        id="groceryCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {/* First Carousel Item */}
          <div className="carousel-item active">
            <div className="row g-4">
              {[
                {
                  img: veg,
                  title: "Fresh Vegetables",
                  text: "Fresh and organic vegetables directly from farms.",
                  id: "vegetables",
                },
                {
                  img: fruit,
                  title: "Juicy Fruits",
                  text: "Best quality fruits at affordable prices.",
                  id: "fruits",
                },
                {
                  img: diary,
                  title: "Dairy Products",
                  text: "Pure and fresh dairy products.",
                  id: "dairy",
                },
              ].map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.text}</p>
                      <button
                        onClick={() => handleShopNow(item.id)}
                        className="btn btn-success"
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel Item */}
          <div className="carousel-item">
            <div className="row g-4">
              {[
                {
                  img: snack,
                  title: "Tasty Snacks",
                  text: "Delicious and crispy snacks for all occasions.",
                  id: "snacks",
                },
                {
                  img: frozen,
                  title: "Frozen Foods",
                  text: "Quick and easy frozen meals for busy days.",
                  id: "frozen",
                },
                {
                  img: beverage,
                  title: "Beverages",
                  text: "Refreshing drinks and juices.",
                  id: "beverages",
                },
              ].map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.text}</p>
                      <button
                        onClick={() => handleShopNow(item.id)}
                        className="btn btn-success"
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#groceryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#groceryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default GroceryCarousel;
