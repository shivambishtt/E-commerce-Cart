/// <reference types="vite/client" />

// product api data
export type ProductData = {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
  quantity: number
}

interface CouponState {
  code: string,
  discount: number,
  isValid: boolean,
}