import { ProductData } from "../vite-env";
import headphones from "../assets/images/headphones.png"
import laptop from "../assets/images/laptop.png"
import mouse from "../assets/images/mouse.png"
import watch from "../assets/images/watch.png"
import smartphone from "../assets/images/smartphone.png"


export const productData: ProductData[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    imageUrl: headphones
  },
  {
    id: 2,
    name: "Smartphone with 128GB Storage",
    price: 699.99,
    imageUrl: smartphone
  },
  {
    id: 3,
    name: "Laptop with 16GB RAM",
    price: 999.99,
    imageUrl: laptop
  },
  {
    id: 4,
    name: "Smartwatch with Heart Rate Monitor",
    price: 199.99,
    imageUrl: watch
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: 49.99,
    imageUrl: mouse
  }
];
