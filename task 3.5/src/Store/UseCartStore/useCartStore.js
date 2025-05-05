import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist(
    (set) => ({
        cart: [],
        addToCart: (product) =>
            set((state) => {
                const existing = state.cart.find((item) => item.id === product.id);
                if (existing) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    };
                } else {
                    return {
                        cart: [...state.cart, { ...product, quantity: 1 }],
                    };
                }
            }),
        removeFromCart: (id) =>
            set((state) => ({
                cart: state.cart.filter((item) => item.id !== id),
            })),
        clearCart: () => set({ cart: [] }),
    }),
    {
        name: 'cart-storage', 
    }
));

export default useCartStore;



