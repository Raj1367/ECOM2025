"use client";

import { CartProductType, ProductType } from "@/app/types/types";
import UseCartStore from "@/app/zutsand/store/useCartStore";
import { FastForward, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";

type ProductInteractionsType = {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
};

const ProductInteractions: FC<ProductInteractionsType> = ({
  product,
  selectedSize,
  selectedColor,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseCartProductQty,
    decreaseCartProductQty,
  } = UseCartStore();

  const cartItem = cart.find(
    (item) =>
      item.id === product.id &&
      item.id === product.id &&
      item.selectedSize === selectedSize &&
      item.selectedColor === selectedColor
  );

  // handle product color or size change with updating params
  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // handle add product to cart
  const handleAddProductToCart = () => {
    addProductToCart({
      ...product,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
      quantity: 1,
    });
    toast.success("product added to cart successfully");
  };

  const handleBuyNowButton = () => {
    addProductToCart({
      ...product,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
      quantity: 1,
    });
    toast.success("product added to cart successfully");
    router.push("/cart");
  };

  // handle remove product from cart
  const handleRemoveProductFromCart = () => {
    removeProductFromCart({
      ...product,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
      quantity: 1,
    });
    toast.error("product removed from cart successfully");
  };

  // handle increase product from cart
  const handleIncreaseCartProductQty = () => {
    increaseCartProductQty({
      ...product,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
      quantity: 1,
    });
    toast.success("product quantity updated successfully");
  };

  // handle decrease product from cart
  const handleDecreaseCartProductQty = () => {
    decreaseCartProductQty({
      ...product,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
      quantity: 1,
    });
    toast.error("product quantity updated successfully");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE SELECTOR */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product?.sizes?.map((size, index) => (
            <div
              key={index}
              onClick={() => handleTypeChange("size", size)}
              className={`cursor-pointer border p-[2px] rounded-md ${
                selectedSize === size
                  ? "border-gray-800"
                  : "border-gray-300 hover:border-gray-500"
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded ${
                  selectedSize === size
                    ? "text-white bg-black"
                    : "text-black bg-white"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLOR SELECTOR */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleTypeChange("color", color)}
              className={`w-6 h-6 rounded-full border cursor-pointer ${
                selectedColor === color
                  ? "border-black border-2"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      {!cartItem?.quantity && (
        <span className="text-gray-500 text-xs">
          Click add product to cart to handle quantity of your choice.
        </span>
      )}

      {/* QUANTITY SELECTOR */}
      {cartItem && (
        <div className="flex flex-col gap-2 text-xs">
          <span className="text-gray-500">Quantity</span>
          <div className="flex gap-4 w-full">
            <div className="flex gap-1 items-center">
              <button
                disabled={cartItem?.quantity == 0}
                onClick={handleIncreaseCartProductQty}
                className={`w-8 h-8 rounded-full shadow-sm bg-gray-100 text-gray-400 flex items-center justify-center 
                  cursor-pointer hover:bg-gray-200 hover:text-gray-500 transition-colors`}
              >
                <Plus size={16} />
              </button>

              <input
                readOnly
                disabled
                value={cartItem?.quantity || 1}
                className="border w-8 h-8 text-sm text-gray-500 border-gray-200 rounded-md text-center"
                type="text"
              />

              <button
                disabled={cartItem.quantity <= 1}
                onClick={handleDecreaseCartProductQty}
                className="w-8 h-8 rounded-full shadow-sm bg-gray-100 text-gray-400 flex items-center justify-center 
                  cursor-pointer hover:bg-gray-200 hover:text-gray-500 transition-colors"
              >
                <Minus size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4">
        {cartItem ? (
          <div className="space-y-4">
            <button
              onClick={() => router.push("/.cart")}
              className="w-full ring-1 inline-flex justify-center gap-2 items-center ring-gray-200 shadow-md rounded-md p-2 text-sm 
              cursor-pointer bg-gray-800 text-white capitalize hover:text-white hover:bg-black transition-all duration-200"
            >
              go to cart
            </button>
            <button
              onClick={handleRemoveProductFromCart}
              className="w-full ring-1 inline-flex justify-center gap-2 items-center ring-gray-200 shadow-md rounded-md p-2 text-sm 
              cursor-pointer border border-gray-800 text-gray-800 capitalize hover:text-red-500 hover:border-red-500 transition-all duration-200"
            >
              remove from cart
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={handleAddProductToCart}
              className="w-full ring-1 inline-flex justify-center gap-2 items-center ring-gray-200 shadow-md rounded-md p-2 text-sm 
              cursor-pointer bg-gray-800 text-white capitalize hover:text-white hover:bg-gray-900 transition-all duration-200"
            >
              Add to cart
            </button>
            <button
              onClick={handleBuyNowButton}
              className="w-full ring-1 inline-flex justify-center gap-2 items-center ring-gray-200 shadow-md rounded-md p-2 text-sm 
              cursor-pointer border border-gray-800  text-gray-800 capitalize hover:text-blue-500 hover:border-blue-500 transition-all duration-200"
            >
              Buy now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInteractions;
