// src/data/household.js (or inside ProductsPage directly)
import detergent from "../assets/images/wash.jpg";
import dishwashingLiquid from "../assets/images/dishwash.webp";
import cleaningSpray from "../assets/images/cleanspray.webp";
import toiletCleaner from "../assets/images/toiletclean.webp";
import floorCleaner from "../assets/images/floorclean.jpg";
import garbageBags from "../assets/images/garbage.webp";
import airFreshener from "../assets/images/airfresh.jpg";
import sponges from "../assets/images/sponge.jpeg";
import scrubber from "../assets/images/scrub.avif";
import broom from "../assets/images/broom.webp";
import mop from "../assets/images/mop.webp";
import bucket from "../assets/images/bucket.jpg";

const householdItems = [
  { name: "Detergent liquid", desc: "High-quality detergent for effective cleaning.", price: 120, img: detergent, unit: "1litre" },
  { name: "Dishwashing Liquid", desc: "Powerful dishwashing liquid for spotless dishes.", price: 80, img: dishwashingLiquid, unit: "500ml" },
  { name: "Cleaning Spray", desc: "Multipurpose cleaning spray for various surfaces.", price: 150, img: cleaningSpray, unit: "500ml" },
  { name: "Toilet Cleaner", desc: "Toilet cleaner for a hygienic and fresh toilet.", price: 100, img: toiletCleaner, unit: "500ml" },
  { name: "Floor Cleaner", desc: "Floor cleaner for sparkling floors.", price: 90, img: floorCleaner, unit: "1L" },
  { name: "Garbage Bags", desc: "Strong garbage bags for household use.", price: 50, img: garbageBags, unit: "pack" },
  { name: "Air Freshener", desc: "Freshen up your home with a pleasant fragrance.", price: 150, img: airFreshener, unit: "300ml" },
  { name: "Sponges", desc: "Soft sponges for gentle cleaning.", price: 40, img: sponges, unit: "pack" },
  { name: "Scrubber", desc: "Durable scrubber for tough stains.", price: 60, img: scrubber, unit: "1 piece" },
  { name: "Broom", desc: "Efficient broom for sweeping floors.", price: 150, img: broom, unit: "1 piece" },
  { name: "Mop", desc: "Microfiber mop for easy floor cleaning.", price: 250, img: mop, unit: "1 piece" },
  { name: "Bucket", desc: "Durable bucket for household cleaning tasks.", price: 100, img: bucket, unit: "1 piece" },
];

export default householdItems;
