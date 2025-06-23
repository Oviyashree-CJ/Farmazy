// src/data/spices.js (or inside ProductsPage directly)
import turmeric from "../assets/images/turmeric.jpg";
import cumin from "../assets/images/cumin.webp";
import coriander from "../assets/images/coriander.webp";
import chiliPowder from "../assets/images/chilli.webp";
import garamMasala from "../assets/images/garam.jpeg";
import cardamom from "../assets/images/cardamom.jpg";
import cinnamon from "../assets/images/cinnamon.jpg";
import mustardSeeds from "../assets/images/mustard.jpg";
import blackPepper from "../assets/images/pepper.webp";
import fennel from "../assets/images/fennel.jpeg";
import asafoetida from "../assets/images/asafo.webp";
import clove from "../assets/images/clove.jpeg";

const spices = [
  { name: "Turmeric", desc: "Pure turmeric powder, enhances flavor and color.", price: 40, img: turmeric, unit: "100g" },
  { name: "Cumin", desc: "Ground cumin powder, adds depth to curries.", price: 30, img: cumin, unit: "100g" },
  { name: "Coriander", desc: "Freshly ground coriander powder, aromatic and flavorful.", price: 35, img: coriander, unit: "100g" },
  { name: "Chili Powder", desc: "Spicy chili powder for a fiery kick.", price: 25, img: chiliPowder, unit: "100g" },
  { name: "Garam Masala", desc: "A blend of aromatic spices, perfect for Indian dishes.", price: 50, img: garamMasala, unit: "100g" },
  { name: "Cardamom", desc: "Premium green cardamom pods for an exotic flavor.", price: 30, img: cardamom, unit: "50g" },
  { name: "Cinnamon", desc: "Freshly ground cinnamon powder, sweet and aromatic.", price: 40, img: cinnamon, unit: "50g" },
  { name: "Mustard Seeds", desc: "Whole mustard seeds, essential in Indian tempering.", price: 20, img: mustardSeeds, unit: "100g" },
  { name: "Black Pepper", desc: "Ground black pepper powder, sharp and spicy.", price: 30, img: blackPepper, unit: "100g" },
  { name: "Fennel Seeds", desc: "Sweet and aromatic fennel seeds, used in many Indian dishes.", price: 25, img: fennel, unit: "100g" },
  { name: "Asafoetida", desc: "A pinch of asafoetida (hing) adds a unique flavor to curries.", price: 10, img: asafoetida, unit: "50g" },
  { name: "Clove", desc: "Whole cloves for a pungent, aromatic flavor in your dishes.", price: 40, img: clove, unit: "50g" },
];

export default spices;
