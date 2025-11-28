"use client";
import { ProductType } from "@/app/types/types";
import UseCartStore from "@/app/zutsand/store/useCartStore";
import { Minus, Plus, ShoppingCart, Trash, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

type ProductCardProps = {
  product: ProductType;
};

type SelectedProductDataType = {
  type: "size" | "color";
  value: string;
};

const ProductCard = ({ product }: ProductCardProps) => {
  // global state
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseCartProductQty,
    decreaseCartProductQty,
  } = UseCartStore();

  // local states
  // selected product data
  const [selectedProductData, setSelectedProductData] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  // find if specific product is already in cart
  const cartItem = cart.find(
    (item) =>
      item.id === product.id &&
      item.id === product.id &&
      item.selectedSize === selectedProductData.size &&
      item.selectedColor === selectedProductData.color
  );

  // handle selected size/color
  const handleSelectedProductData = ({
    type,
    value,
  }: SelectedProductDataType) => {
    setSelectedProductData((prev) => ({ ...prev, [type]: value }));
  };

  // handle add product to cart
  const handleAddProductToCart = () => {
    addProductToCart({
      ...product,
      selectedSize: selectedProductData.size,
      selectedColor: selectedProductData.color,
      quantity: 1,
    });
    toast.success("product added to cart successfully");
  };

  // handle remove product from cart
  const handleRemoveProductFromCart = () => {
    removeProductFromCart({
      ...product,
      selectedSize: selectedProductData.size,
      selectedColor: selectedProductData.color,
      quantity: 1,
    });
    toast.error("product removed to cart successfully");
  };

  // handle increase product from cart
  const handleIncreaseCartProductQty = () => {
    increaseCartProductQty({
      ...product,
      selectedSize: selectedProductData.size,
      selectedColor: selectedProductData.color,
      quantity: 1,
    });
    toast.success("product quantity updated successfully");
  };

  // handle decrease product from cart
  const handleDecreaseCartProductQty = () => {
    decreaseCartProductQty({
      ...product,
      selectedSize: selectedProductData.size,
      selectedColor: selectedProductData.color,
      quantity: 1,
    });
    toast.success("product quantity updated successfully");
  };

  return (
    <div className="shadow-md rounded-lg overflow-hidden border border-gray-100">
      {/* product image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[selectedProductData.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-200"
          />
        </div>
      </Link>

      {/* product details */}
      <div className="flex flex-col gap-3 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>

        <div className="flex items-center justify-between text-xs">
          {/* sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 font-medium">Sizes:</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              value={selectedProductData.size}
              onChange={(e) =>
                handleSelectedProductData({
                  type: "size",
                  value: e.target.value,
                })
              }
            >
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* colors */}
          <div className="flex flex-col gap-2 px-2 py-1">
            <span className="text-gray-500 font-medium">Colors:</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border rounded-full p-[1px] ${
                    selectedProductData.color === color
                      ? "border-gray-500"
                      : "border-gray-300"
                  }`}
                  onClick={() =>
                    handleSelectedProductData({
                      type: "color",
                      value: color,
                    })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="flex flex-col gap-1">
            <span className="text-gray-500 font-medium">colors:</span>
            <select
              name="color"
              id="color"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              value={selectedProductData.size}
              onChange={(e) =>
                handleSelectedProductData({
                  type: "color",
                  value: e.target.value,
                })
              }
            >
              {product.colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div> */}
          <div>
            <span className="text-gray-500 font-medium">price:</span>
            <p className="font-medium text-[16px] place-self-end">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* price adjustbale quantity and cart button */}
        <div className="flex items-center justify-between mt-2">
          {/* qunatity */}
          {cartItem ? (
            <div className="flex gap-4 w-full">
              <div className="flex gap-1 items-center">
                <button
                  onClick={handleIncreaseCartProductQty}
                  className="w-8 h-8 rounded-full shadow-sm bg-gray-100 text-gray-400 flex items-center justify-center 
                  cursor-pointer hover:bg-gray-200 hover:text-gray-500 transition-colors"
                >
                  <Plus size={16} />
                </button>

                <input
                  readOnly
                  value={cartItem.quantity}
                  className="border w-8 h-8 text-sm text-gray-500 border-gray-200 rounded-md text-center"
                  type="text"
                />

                <button
                  onClick={handleDecreaseCartProductQty}
                  className="w-8 h-8 rounded-full shadow-sm bg-gray-100 text-gray-400 flex items-center justify-center 
                  cursor-pointer hover:bg-gray-200 hover:text-gray-500 transition-colors"
                >
                  <Minus size={16} />
                </button>
              </div>
              <button
                onClick={handleRemoveProductFromCart}
                className="w-full ring-1 inline-flex justify-center gap-2 items-center ring-gray-200 shadow-md rounded-md p-2 text-sm 
              cursor-pointer text-red-500 hover:text-white hover:bg-black transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" /> remove from cart
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddProductToCart}
              className="w-full ring-1 inline-flex justify-center gap-2 items-center ring-gray-200 shadow-md rounded-md p-2 text-sm 
              cursor-pointer hover:text-white hover:bg-black transition-all duration-200"
            >
              <ShoppingCart className="w-4 h-4" /> Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
