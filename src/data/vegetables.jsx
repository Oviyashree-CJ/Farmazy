// src/data/vegetables.js (or inside ProductsPage directly)
import carrot from "../assets/images/carrot.jpeg";
import brocolli from "../assets/images/brocolli.jpg";
import tomato from "../assets/images/tomato.jpeg";
import capsicum from "../assets/images/capsicum.jpg";
import potato from "../assets/images/potato.jpeg";
import onion from "../assets/images/onion.jpeg";
import cucumber from "../assets/images/cucumber.jpeg";
import lettuce from "../assets/images/lettuce.jpeg";
import cauliflower from "../assets/images/cauliflower.jpeg";
import brinjal from "../assets/images/brinjal.jpeg";
import beans from "../assets/images/beans.jpeg";
import cabbage from "../assets/images/cabbage.jpeg";

const vegetables = [
  { name: "Carrot", desc: "Fresh organic carrots.", price: 30, img: carrot, unit: "kg" },
  { name: "Broccoli", desc: "Fresh green broccoli.", price: 50, img: brocolli, unit: "kg" },
  { name: "Tomato", desc: "Farm-fresh tomatoes.", price: 25, img: tomato, unit: "kg" },
  { name: "Capsicum", desc: "Crunchy and fresh.", price: 40, img: capsicum, unit: "kg" },
  { name: "Potato", desc: "Fresh farm potatoes.", price: 20, img: potato, unit: "kg" },
  { name: "Onion", desc: "Pungent and flavorful onions.", price: 30, img: onion, unit: "kg" },
  { name: "Cucumber", desc: "Cool and refreshing cucumbers.", price: 15, img: cucumber, unit: "kg" },
  { name: "Lettuce", desc: "Crisp and green lettuce.", price: 25, img: lettuce, unit: "piece" },
  { name: "Cauliflower", desc: "Soft and fresh cauliflower.", price: 40, img: cauliflower, unit: "piece" },
  { name: "Brinjal", desc: "Soft and fresh eggplants.", price: 35, img: brinjal, unit: "kg" },
  { name: "Beans", desc: "Fresh green beans.", price: 45, img: beans, unit: "kg" },
  { name: "Cabbage", desc: "Fresh green cabbage.", price: 30, img: cabbage, unit: "piece" },
];

export default vegetables;
