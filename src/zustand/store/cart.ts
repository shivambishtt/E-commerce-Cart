import { create } from "zustand";
import { ProductData } from "../../vite-env";

interface CartState {
    items: ProductData[];
    addToCart: (product: ProductData) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

const useCartStore = create<CartState>((set) => ({
    items: [],

    addToCart: (product) =>
        set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return { items: [...state.items, { ...product, quantity: 1 }] };
            }
        }),
    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

    increaseQuantity: (id) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        })),

    decreaseQuantity: (id) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        })),
}));

export default useCartStore;
