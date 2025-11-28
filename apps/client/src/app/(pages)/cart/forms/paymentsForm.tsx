import { paymentsFormSchema, paymentsSchema } from "@/app/schema/cartSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { payemntsFormData } from "../data/payemnstFormData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PaymentsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<paymentsFormSchema>({
    resolver: zodResolver(paymentsSchema),
    mode: "onChange",
  });

  const expirydate = watch("expirydate");
  const cardNumber = watch("cardNumber");

  const handlePayementsForm = (data: paymentsFormSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handlePayementsForm)}
      className="flex flex-col gap-4"
    >
      {payemntsFormData.map((item, index) => {
        const errorName = errors[item?.name as keyof paymentsFormSchema];
        return (
          <div key={index} className="flex flex-col gap-1">
            {/* Label */}
            <label
              className="text-xs text-gray-500 font-medium capitalize"
              htmlFor={item.name}
            >
              {item.label}
            </label>
            {/* input */}
            {item.name === "cardNumber" ? (
              <input
                id={item.id}
                type={item.type}
                placeholder={item.placeHolder}
                maxLength={19}
                inputMode="numeric"
                value={cardNumber || ""}
                className={`border-b py-2 outline-none text-sm ${
                  errorName ? "border-red-500" : "border-gray-200"
                }`}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "").slice(0, 16);
                  value = value.replace(/(.{4})/g, "$1 ").trim();
                  setValue("cardNumber", value, { shouldValidate: true });
                }}
              />
            ) : item.name === "expirydate" ? (
              <input
                id={item.id}
                type={item.type}
                placeholder={item.placeHolder}
                inputMode="numeric"
                maxLength={5}
                value={expirydate || ""}
                className={`border-b py-2 outline-none text-sm ${
                  errorName ? "border-red-500" : "border-gray-200"
                }`}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length >= 3) {
                    value = value.slice(0, 2) + "/" + value.slice(2, 4);
                  }
                  setValue("expirydate", value, { shouldValidate: true });
                }}
              />
            ) : item.name === "CVV" ? (
              <input
                id={item.id}
                type={item.type}
                placeholder={item.placeHolder}
                className={`border-b py-2 outline-none text-sm ${
                  errorName ? "border-red-500" : "border-gray-200"
                }`}
                maxLength={3}
                {...register(item.name as keyof paymentsFormSchema)}
              />
            ) : (
              <input
                id={item.id}
                type={item.type}
                placeholder={item.placeHolder}
                className={`border-b py-2 outline-none text-sm ${
                  errorName ? "border-red-500" : "border-gray-200"
                }`}
                {...register(item.name as keyof paymentsFormSchema)}
              />
            )}

            {/* Error Message */}
            {errorName && (
              <p className="text-xs text-red-500">
                {errorName?.message as string}
              </p>
            )}
          </div>
        );
      })}

      {/* Payment Provider Logos */}
      <div className="flex items-center gap-2 mt-4">
        <Image alt="klarna" src="/klarna.png" width={50} height={25} />
        <Image alt="cards" src="/cards.png" width={50} height={25} />
        <Image alt="stripe" src="/stripe.png" width={50} height={25} />
      </div>

      {/* Submit Button */}
      <button className="cart-button mt-4 flex items-center justify-center gap-1">
        Checkout <ArrowRight size={16} />
      </button>
    </form>
  );
};

export default PaymentsForm;
