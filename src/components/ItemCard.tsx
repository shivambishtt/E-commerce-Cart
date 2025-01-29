import React from 'react'
import { productData } from "../data/data.ts"
import { ProductData } from '../vite-env'
import { Bounce, ToastContainer } from "react-toastify"
import { showToast } from "./toast.ts"
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/cartSlice.ts'


function ItemCard() {
    const dispatch = useDispatch()
    const handleAdd = (item: ProductData) => {
        dispatch(addToCart(item))
        showToast()
    }

    return (
        <div className='itemContainer my-10'>
            <h1 className='text-4xl font-bold'>Trusted Deals</h1>

            <div className=' bg-gray-400 items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                {productData.map((item) => {
                    return <div className='p-4 rounded shadow-lg flex flex-col items-center' key={item.id} >
                        <img className='h-60' src={item.imageUrl} alt="headphone" />
                        <span>
                            <h1 className='text-xl font-semibold'>
                                {item.name}
                            </h1>
                        </span>
                        <span>
                            <p className='font-semibold text-xl'>{item.price} rs</p>
                        </span>

                        <button className='bg-blue-500 text-white rounded p-1 my-1' onClick={() => handleAdd(item)}>Add to cart</button>
                    </div>
                })}
                <ToastContainer transition={Bounce} closeOnClick={true} limit={1} />
            </div>
        </div>
    )
}

export default ItemCard
