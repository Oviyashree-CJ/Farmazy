// src/data/bakedItems.js (or inside ProductsPage directly)
import wheatFlour from "../assets/images/wheatFlour.jpg";
import cornFlour from "../assets/images/cornFlour.jpg";
import bread from "../assets/images/bread.jpeg";
import croissant from "../assets/images/croissant.webp";
import muffin from "../assets/images/muffin.webp";
import cookies from "../assets/images/ookies.avif";
import cake from "../assets/images/cake.webp";
import pizzaBase from "../assets/images/pizzabase.webp";
import pieCrust from "../assets/images/piecrust.jpg";
import sandwichLoaf from "../assets/images/sandwich.webp";
import wholeWheatBread from "../assets/images/wheatbread.jpeg";
import maida from "../assets/images/maida.jpg";

const bakedItems = [
  { name: "Wheat Flour", desc: "Finely ground whole wheat flour, ideal for baking.", price: 30, img: wheatFlour, unit: "kg" },
  { name: "Corn Flour", desc: "Fine corn flour, perfect for baking and thickening.", price: 40, img: cornFlour, unit: "kg" },
  { name: "Bread", desc: "Freshly baked white bread, soft and fluffy.", price: 40, img: bread, unit: "loaf" },
  { name: "Croissant", desc: "Golden, flaky croissants with a buttery taste.", price: 20, img: croissant, unit: "piece" },
  { name: "Muffin", desc: "Soft and moist blueberry muffins.", price: 15, img: muffin, unit: "piece" },
  { name: "Cookies", desc: "Crunchy chocolate chip cookies.", price: 20, img: cookies, unit: "pack" },
  { name: "Cake", desc: "Delicious chocolate cake with rich frosting.", price: 20, img: cake, unit: "whole" },
  { name: "Pizza Base", desc: "Pre-baked pizza base for your pizza cravings.", price: 30, img: pizzaBase, unit: "2 pieces" },
  { name: "Pie Crust", desc: "Ready-to-bake pie crust for delicious homemade pies.", price: 30, img: pieCrust, unit: "2 pieces" },
  { name: "Sandwich Loaf", desc: "Soft and fluffy loaf, perfect for sandwiches.", price: 25, img: sandwichLoaf, unit: "loaf" },
  { name: "Whole Wheat Bread", desc: "Healthy and hearty whole wheat bread.", price: 20, img: wholeWheatBread, unit: "loaf" },
  { name: "Maida", desc: "Refined white flour, perfect for baking cakes, cookies, and pastries.", price: 40, img: maida, unit: "kg" },
];

export default bakedItems;
