// src/data/personalCare.js (or inside ProductsPage directly)
import shampoo from "../assets/images/shampoo.webp";
import conditioner from "../assets/images/conditioner.jpg";
import soap from "../assets/images/soap.jpg";
import toothpaste from "../assets/images/toothpaste.jpg";
import deodorant from "../assets/images/deo.avif";
import faceWash from "../assets/images/facewash.avif";
import napkin from "../assets/images/napkin.webp";
import bodyLotion from "../assets/images/bodylotion.webp";
import handWash from "../assets/images/handwash.webp";
import hairOil from "../assets/images/hairoil.avif";
import shavingCream from "../assets/images/shave.webp";
import toothbrush from "../assets/images/brush.jpg";

const personalCare = [
  { name: "Shampoo", desc: "Cleansing shampoo for healthy hair.", price: 150, img: shampoo, unit: "250ml" },
  { name: "Conditioner", desc: "Nourishing conditioner for soft and shiny hair.", price: 180, img: conditioner, unit: "250ml" },
  { name: "Soap", desc: "Moisturizing soap with natural ingredients.", price: 40, img: soap, unit: "bar" },
  { name: "Toothpaste", desc: "Fresh mint toothpaste for clean and healthy teeth.", price: 50, img: toothpaste, unit: "100g" },
  { name: "Deodorant", desc: "Long-lasting deodorant for all-day freshness.", price: 120, img: deodorant, unit: "150ml" },
  { name: "Face Wash", desc: "Gentle face wash for clear and fresh skin.", price: 100, img: faceWash, unit: "100ml" },
  { name: "Napkin", desc: "Soft and absorbent napkins for daily use.", price: 30, img: napkin, unit: "pack" },
  { name: "Body Lotion", desc: "Moisturizing body lotion for smooth skin.", price: 200, img: bodyLotion, unit: "200ml" },
  { name: "Hand Wash", desc: "Antibacterial hand wash for clean hands.", price: 80, img: handWash, unit: "250ml" },
  { name: "Hair Oil", desc: "Nourishing hair oil for healthy and shiny hair.", price: 180, img: hairOil, unit: "200ml" },
  { name: "Shaving Cream", desc: "Smooth shaving cream for a comfortable shave.", price: 150, img: shavingCream, unit: "100ml" },
  { name: "Toothbrush", desc: "Soft bristles toothbrush for effective cleaning.", price: 50, img: toothbrush, unit: "1 piece" },
];

export default personalCare;
