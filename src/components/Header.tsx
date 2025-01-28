import React, { useState } from 'react'
import { MdShoppingCart } from "react-icons/md";


function Header() {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <div className='headerContainer bg-indigo-400 flex items-center justify-between px-4 h-15'>
                <h1 className='text-3xl font-semibold text-white'>E Kart</h1>
                <div className='relative'>
                    <MdShoppingCart className='text-2xl text-white' />
                    <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-sm w-5 h-4 flex items-center justify-center rounded-full'>
                        {count}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header
