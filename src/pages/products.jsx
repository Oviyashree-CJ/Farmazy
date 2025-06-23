import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductNavbar from "../components/pronavbar";
import ProductSection from "../components/productSection";

import vegetableData from "../data/vegetables";
import fruitData from "../data/fruits";
import dairyData from "../data/dairy";
import beverageData from "../data/beverages";
import snacksData from "../data/snacks";
import frozenData from "../data/frozen";
import spiceData from "../data/spices";
import bakedItems from "../data/bake";
import personalCare from "../data/pCare";
import householdItems from "../data/hCare";

const ProductsPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        setTimeout(() => {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location.state]);

  const handleSectionChange = (section) => {
    setSelectedCategory(section);
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
  };

  const sections = [
    { id: "vegetables", title: "Vegetables", data: vegetableData },
    { id: "fruits", title: "Fruits", data: fruitData },
    { id: "dairy", title: "Dairy Products", data: dairyData },
    { id: "beverages", title: "Beverages", data: beverageData },
    { id: "snacks", title: "Snacks", data: snacksData },
    { id: "frozen", title: "Frozen Items", data: frozenData },
    { id: "spices", title: "Spices", data: spiceData },
    { id: "bake", title: "Baked Items and Baking Items", data: bakedItems },
    { id: "pcare", title: "Personal Care Products", data: personalCare },
    { id: "hcare", title: "Household Products", data: householdItems },
  ];

  const filteredSections =
    selectedCategory === "all"
      ? sections
      : sections.filter((section) => section.id === selectedCategory);

  return (
    <div>
      <ProductNavbar onSectionChange={handleSectionChange} />
      {filteredSections.map((section) => (
        <ProductSection
          key={section.id}
          id={section.id}
          title={section.title}
          products={section.data}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
