import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCheckoutStore = create(persist(
    (set) => ({
        userData: { name: "", email: "" },
        deliveryData: { address: "", city: "", postalCode: "" },
        paymentData: { paymentMethod: "" },

        setUserData: (data) => set({ userData: data }),
        setDeliveryData: (data) => set({ deliveryData: data }),
        setPaymentData: (data) => set({ paymentData: data }),

        clearCheckout: () =>
            set({
                userData: { name: "", email: "" },
                deliveryData: { address: "", city: "", postalCode: "" },
                paymentData: { paymentMethod: "" },
            }),
    }),
    {
        name: "checkout-storage",
    }
));

export default useCheckoutStore;

