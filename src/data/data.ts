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
    price: 4000,
    imageUrl: headphones,
    quantity: 0
  },
  {
    id: 2,
    name: "Smartphone with 128GB Storage",
    price: 15000,
    imageUrl: smartphone,
    quantity: 0
  },
  {
    id: 3,
    name: "Laptop with 16GB RAM",
    price: 60000,
    imageUrl: laptop,
    quantity: 0
  },
  {
    id: 4,
    name: "Smartwatch with Heart Rate Monitor",
    price: 3000,
    imageUrl: watch,
    quantity: 0
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: 2000,
    imageUrl: mouse,
    quantity: 0
  }
];
