import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function WishlistPage() {
    const wishlistItem = useSelector((state: RootState) => state.wishlist.items)

    return (
        <div>
            {wishlistItem.map((item) => {
                return <div key={item.id}>
                    {item.name}
                </div>
            })}
        </div>
    )
}

export default WishlistPage
