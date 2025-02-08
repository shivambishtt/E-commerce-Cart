import React from 'react'
import { MdCancel } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
// import { RootState } from '../store/store.ts'
import useCartStore from '../zustand/store/cart.ts';

function CartItems() {
    const items = useCartStore((state) => state.items)
    const { decreaseQuantity, increaseQuantity, removeFromCart } = useCartStore((state) => state)
    // const items = useSelector((state: RootState) => state.cart.items)
    return (
        <div>
            {items.length === 0 ? "" :
                items.map((item) => {
                    return <div className='flex items-center justify-between px-10 my-5 text-black bg-stone-400' key={item.id}>
                        <img className='h-30' src={item.imageUrl} alt="" />
                        <p className='font-semibold text-xl'>{item.name}</p>
                        <span>
                            <button onClick={() => decreaseQuantity(item.id)}>
                                <FaMinus color='white' />
                            </button>
                            <span className='align-text px-2 font-semibold text-xl'>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)} >
                                <FaPlus color='white' />
                            </button>
                        </span>
                        <p className='font-semibold text-xl'>{item.price * item.quantity} rs</p>
                        <button onClick={() => removeFromCart(item.id)} className='text-2xl'><MdCancel /></button>
                    </div>
                })
            }

        </div>
    )
}

export default CartItems
