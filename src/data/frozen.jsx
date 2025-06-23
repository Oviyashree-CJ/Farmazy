// src/data/frozenFoods.js (or inside ProductsPage directly)
import iceCream from "../assets/images/iceCream.webp";
import frozenPizza from "../assets/images/frozenPizza.webp";
import frozenFries from "../assets/images/frozenFries.webp";
import driedfish from "../assets/images/karuvaadu.webp";
import frozenChicken from "../assets/images/frozenChicken.jpg";
import fishFillets from "../assets/images/fishFillets.jpg";
import frozenBurgers from "../assets/images/froznBurgers.jpg";
import frozenPrawns from "../assets/images/frozenPrawns.jpeg";
import frozenMomos from "../assets/images/frozenmomos.jpeg";
import frozenParathas from "../assets/images/frozenParathas.jpeg";
import frozenSamosas from "../assets/images/samosas.webp";
import frozenveggies from "../assets/images/veggie.jpeg";

const frozenFoods = [
  { name: "Ice Cream", desc: "Delicious creamy ice cream in various flavors.", price: 80, img: iceCream, unit: "box" },
  { name: "Frozen Pizza", desc: "Tasty frozen pizza with a variety of toppings.", price: 100, img: frozenPizza, unit: "box" },
  { name: "Frozen Fries", desc: "Crispy and golden frozen fries.", price: 80, img: frozenFries, unit: "kg" },
  { name: "Dried Fish", desc: "Dried fish completely cleaned and preserved for easy cooking.", price: 50, img: driedfish, unit: "kg" },
  { name: "Frozen Chicken", desc: "Tender and juicy frozen chicken pieces.", price: 100, img: frozenChicken, unit: "kg" },
  { name: "Fish Fillets", desc: "Fresh frozen fish fillets, easy to cook.", price: 90, img: fishFillets, unit: "kg" },
  { name: "Frozen Burgers", desc: "Juicy and tender frozen burger patties.", price: 80, img: frozenBurgers, unit: "pack" },
  { name: "Frozen Prawns", desc: "Succulent frozen prawns, ready to cook.", price: 200, img: frozenPrawns, unit: "kg" },
  { name: "Frozen Momos", desc: "Tasty and ready-to-cook frozen momos.", price: 70, img: frozenMomos, unit: "pack" },
  { name: "Frozen Parathas", desc: "Frozen parathas, perfect for quick meals.", price: 50, img: frozenParathas, unit: "pack" },
  { name: "Frozen Samosas", desc: "Crispy and delicious frozen samosas.", price: 70, img: frozenSamosas, unit: "pack" },
  { name: "Veggie Fingers", desc: "Frozen veggie fingers, ready to cook.", price: 80, img: frozenveggies, unit: "kg" },
];

export default frozenFoods;
