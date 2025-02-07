import React from 'react'
import { productData } from "../data/data.ts"
import { ProductData } from '../vite-env'
import { Bounce, ToastContainer } from "react-toastify"
import { showToast } from "./toast.ts"
import useCartStore from "../zustand/store/cart.ts";

function ItemCard() {
    const { addToCart } = useCartStore();
    const handleAdd = (item: ProductData) => {
        addToCart(item)
        showToast()
    }

    return (
        <div className='itemContainer my-10 mx-10'>
            <h1 className='text-4xl font-bold'>Trusted Deals</h1>

            <div className=' bg-white items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                {productData.map((item) => {
                    return <div className='p-5 my-2 rounded shadow-lg shadow-stone-400 flex flex-col items-center' key={item.id} >
                        <img className='h-60' src={item.imageUrl} alt="headphone" />
                        <span>
                            <h1 className='text-xl font-semibold'>
                                {item.name}
                            </h1>
                        </span>
                        <span>
                            <p className='font-semibold text-xl'>{item.price} rs</p>
                        </span>

                        <div className='flex items-center justify-between gap-4 mt-2 '>
                            <button className='bg-orange-200 text-black rounded p-1' onClick={() => handleAdd(item)}>Add to cart</button>

                            <button className='bg-black text-white text-sm p-1 rounded'>Wishlist</button>
                        </div>
                    </div>
                })}
                <ToastContainer transition={Bounce} closeOnClick={true} limit={1} />
            </div>
        </div>
    )
}

export default ItemCard
