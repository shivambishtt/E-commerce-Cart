import React from 'react'
import { productData } from "../data/data.ts"
import { ProductData } from '../vite-env'

function ItemCard() {
    return (
        <div className='itemContainer'>
            <h1>Trusted Deals</h1>
            <div className='items'>
                {productData.map((item: ProductData) => {
                    return <li key={item.id} >
                        {item.name}
                        {item.price}
                    </li>
                })}
            </div>
        </div>
    )
}

export default ItemCard
