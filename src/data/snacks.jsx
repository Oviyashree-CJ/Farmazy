// src/data/packedSnacks.js (or inside ProductsPage directly)
import lays from "../assets/images/lays.jpg";
import kurkure from "../assets/images/kurkure.jpg";
import bingo from "../assets/images/bingo.jpg";
import namkeen from "../assets/images/namkeen.webp";
import hideSeek from "../assets/images/hideSeek.webp";
import munch from "../assets/images/munch.webp";
import parleG from "../assets/images/parleg.jpg";
import oreo from "../assets/images/oreo.jpg";
import chips from "../assets/images/chips.webp";
import wafers from "../assets/images/wafers.webp";
import treat from "../assets/images/treat.webp";
import puffedRice from "../assets/images/puffedrice.webp";

const packedSnacks = [
  { name: "Lay's Chips", desc: "Crispy potato chips with a variety of flavors.", price: 20, img: lays, unit: "packet" },
  { name: "Kurkure", desc: "Crunchy snack made from corn, flavored with masala.", price: 25, img: kurkure, unit: "packet" },
  { name: "Bingo!", desc: "Crispy and crunchy chips with unique flavors.", price: 30, img: bingo, unit: "packet" },
  { name: "Namkeen", desc: "Assorted salted snacks mix, perfect for munching.", price: 40, img: namkeen, unit: "packet" },
  { name: "Hide & Seek", desc: "Choco-filled biscuits with a crunchy exterior.", price: 25, img: hideSeek, unit: "packet" },
  { name: "Munch", desc: "Crunchy wafer biscuits covered in chocolate.", price: 20, img: munch, unit: "packet" },
  { name: "Parle-G", desc: "Classic glucose biscuits, loved by everyone.", price: 15, img: parleG, unit: "packet" },
  { name: "Oreo", desc: "Delicious chocolate biscuits with creamy filling.", price: 35, img: oreo, unit: "packet" },
  { name: "Tapioca Chips", desc: "Crunchy, thin slices of tapioca, perfect for snacking.", price: 15, img: chips, unit: "packet" },
  { name: "Wafers", desc: "Thin, crispy wafers with a savory taste.", price: 25, img: wafers, unit: "packet" },
  { name: "Treat Biscuits", desc: "Chocolate-covered biscuits with a delightful crunch.", price: 30, img: treat, unit: "packet" },
  { name: "Puffed Rice Balls", desc: "Light and crispy puffed rice balls, a perfect and healthy snack.", price: 10, img: puffedRice, unit: "packet" },
];

export default packedSnacks;
