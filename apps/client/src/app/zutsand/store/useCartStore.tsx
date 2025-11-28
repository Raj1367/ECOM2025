import { CartProductType, cartStoreType } from "@/app/types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const UseCartStore = create<cartStoreType>()(
  persist(
    (set, get) => ({
      cart: [],

      updateCartProductVariant: (
        product: CartProductType,
        field: string,
        value: string
      ) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === product.id &&
            p.selectedSize === product.selectedSize &&
            p.selectedColor === product.selectedColor
              ? { ...p, [field]: value }
              : p
          ),
        })),

      addProductToCart: (product) => {
        const getPrevCartState = get();
        const exisitingItem = getPrevCartState.cart.find((item) => {
          item.id === product.id &&
            item.selectedSize === product.selectedSize &&
            item.selectedColor === product.selectedSize;
        });

        if (exisitingItem) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item === exisitingItem
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          set({
            cart: [
              ...getPrevCartState.cart,
              { ...product, quantity: product.quantity || 1 },
            ],
          });
        }
      },

      removeProductFromCart: (product: any) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(
                item.id === product.id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
              )
          ),
        })),

      increaseCartProductQty: (product) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === product.id &&
            item.selectedSize === product.selectedSize &&
            item.selectedColor === product.selectedColor
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseCartProductQty: (product) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === product.id &&
            item.selectedSize === product.selectedSize &&
            item.selectedColor === product.selectedColor &&
            item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default UseCartStore;
