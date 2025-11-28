// product type
export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};
// products type
export type ProductsType = ProductType[];

export type CartProductType = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

// cart products type
export type CartProductsType = CartProductType[];

// zustand
export type cartStoreType = {
  cart: CartProductsType;
  updateCartProductVariant: (
    product: CartProductType,
    field: string,
    value: string
  ) => void;
  addProductToCart: (product: CartProductType) => void;
  removeProductFromCart: (product: CartProductType) => void;
  increaseCartProductQty: (product: CartProductType) => void;
  decreaseCartProductQty: (product: CartProductType) => void;
  clearCart: () => void;
};
