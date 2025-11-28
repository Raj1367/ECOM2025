"use client";
import React, { useState } from "react";
import { steps } from "./data/cartSteps";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Trash2, X } from "lucide-react";
import ShippingForm from "./forms/shippingForm";
import PaymentsForm from "./forms/paymentsForm";
import CartProducts from "./components/cartProducts";
import { shippingFormSchema } from "@/app/schema/cartSchema";
import UseCartStore from "@/app/zutsand/store/useCartStore";
import Image from "next/image";

const CartPage = ({}) => {
  const { cart, clearCart } = UseCartStore();

  const searchparams = useSearchParams();
  const router = useRouter();

  const discount = cart.length > 0 ? 15 : 0;
  const shipping = cart.length > 0 ? 10 : 0;
  const activeStep = parseInt(searchparams.get("step") || "1");

  const [shippingForm, setShippigForm] = useState<null | shippingFormSchema>(
    null
  );

  const cartSubtotal = () =>
    cart
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);

  const cartTotal = () => {
    const subtotal = cartSubtotal();
    return cart.length > 0
      ? (parseInt(subtotal) - discount + shipping).toFixed(2)
      : 0;
  };

  return (
    <div className="flex flex-col gap-8 items-center jutsify-center mt-6">
      {/*  title */}
      <h1 className="text-2xl font-medium">Shopping Cart </h1>

      {/* steps */}
      <div className="flex flex-row items-center gap-8 lg:gap-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 border-b-2 pb-3 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-3 h-3 md:w-6 md:h-6 rounded-full text-white p-4 flex justify-center md:text-sm text-xs items-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`md:text-sm text-xs font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* cart data */}
      <div className="w-full flex flex-col-reverse lg:flex-row gap-16">
        {/* cart products address and payment details */}
        <div className="w-full lg:w-[60%] shadow-sm border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {cart.length > 0 ? (
           <div className="flex items-center justify-between">
             <h2 className="font-semibold">Cart Products</h2>
             <button onClick={clearCart} className="clear-cart-button text-sm">
              Clear Cart 
            </button>
           </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="emptycart"
                width={250}
                height={250}
                src="/emptycart.jpg"
              ></Image>
              <p className="text-gray-500 text-sm font-medium capitalize">
              Your cart is empty add products to your cart !
            </p>
            </div>
          )}
          {activeStep === 1 ? (
            <CartProducts />
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippigForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentsForm />
          ) : (
            <p className="text-red-500 text-sm">
              Please fill the shipping form to continue
            </p>
          )}
        </div>

        {/* cart pricing deatils */}
        <div className="w-full lg:w-[40%] shadow-sm border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Deatils</h2>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm font-medium">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-gray-800">${cartSubtotal()}</p>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <p className="text-gray-500">Discount</p>
              <p className="text-green-500">-${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <p className="text-gray-500">Shipping</p>
              <p className="text-gray-800">${shipping.toFixed(2)}</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between text-sm font-semibold">
            <p className="text-gray-800">Total</p>
            <p className="text-gray-800">${cartTotal()}</p>
          </div>

          {activeStep === 1 && (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push("/cart?step=2", { scroll: false })}
                className="cart-button"
              >
                Continue
              </button>
              <button onClick={() => router.back()} className="cart-button">
                Go Back 
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
