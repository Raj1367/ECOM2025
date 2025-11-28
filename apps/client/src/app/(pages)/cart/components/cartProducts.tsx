"use client";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import UseCartStore from "@/app/zutsand/store/useCartStore";
import Link from "next/link";

const CartProducts = () => {
  const {
    increaseCartProductQty,
    decreaseCartProductQty,
    removeProductFromCart,
    cart,
    updateCartProductVariant,
  } = UseCartStore();

  // Helper to handle size/color change
  const handleVariantChange = (
    product: any,
    field: "selectedSize" | "selectedColor",
    value: string
  ) => {
    updateCartProductVariant(product, field, value);
  };

  return (
    <>
      {cart.map((product: any) => (
        <div
          className="flex items-center justify-between p-4 shadow-md rounded-md border border-gray-100"
          key={`${product.id}-${product.selectedSize}-${product.selectedColor}`}
        >
          {/* Product image and details */}
          <div className="flex gap-8">
            <div className="relative shadow-sm w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
              <Link href={`/products/${product.id}`}>
                <Image
                  alt={product.name}
                  src={product.images[product.selectedColor]}
                  className="object-contain"
                  fill
                />
              </Link>
            </div>

            <div className="flex flex-col justify-between">
              <div className="space-y-1">
                <p className="font-medium text-sm">{product.name}</p>

                {/* Quantity */}
                <p className="text-xs text-gray-500">Qty: {product.quantity}</p>

                {/* Size Select */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Size:</span>
                  <select
                    value={product.selectedSize}
                    onChange={(e) =>
                      handleVariantChange(
                        product,
                        "selectedSize",
                        e.target.value
                      )
                    }
                    className="border border-gray-300 text-gray-600 rounded-md text-xs  focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    {product.sizes?.map((size: string) => (
                      <option key={size} value={size}>
                        {size.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color Select */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Color:</span>
                  <select
                    value={product.selectedColor}
                    onChange={(e) =>
                      handleVariantChange(
                        product,
                        "selectedColor",
                        e.target.value
                      )
                    }
                    className="border capitalize border-gray-300 text-gray-600 rounded-md text-xs  focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    {product.colors?.map((color: string) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                price:{" "}
                <span className="text-[13px] text-black font-medium">
                  ${product.price}
                </span>
              </p>
            </div>
          </div>

          {/* Quantity and delete buttons */}
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => increaseCartProductQty(product)}
                className="w-8 h-8 rounded-full shadow-sm
                  bg-gray-100 text-gray-400 flex items-center
                  justify-center cursor-pointer hover:bg-gray-200
                  hover:text-gray-500 transition-colors"
              >
                <Plus size={16} />
              </button>

              <input
                readOnly
                value={product.quantity}
                className="border w-8 h-8 text-sm text-gray-500 border-gray-200 rounded-md shadow-xs text-center"
                type="text"
              />

              <button
                onClick={() => decreaseCartProductQty(product)}
                className="w-8 h-8 rounded-full shadow-sm
                  bg-gray-100 text-gray-400 flex items-center
                  justify-center cursor-pointer hover:bg-gray-200
                  hover:text-gray-500 transition-colors"
              >
                <Minus size={16} />
              </button>
            </div>

            <button
              onClick={() => removeProductFromCart(product)}
              className="w-8 h-8 rounded-full shadow-sm
                bg-red-100 text-red-400 flex items-center
                justify-center cursor-pointer hover:bg-red-200
                hover:text-red-500 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartProducts;
