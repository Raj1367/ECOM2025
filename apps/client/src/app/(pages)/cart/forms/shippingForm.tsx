import { shippingFormSchema, shippingSchema } from "@/app/schema/cartSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { shippingFormData } from "../data/shippingFormData";

type setshippingFormType = {
  setShippingForm: (data: shippingFormSchema) => void;
};

const ShippingForm = ({ setShippingForm }: setshippingFormType) => {
  const router = useRouter();

  //  form handler
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<shippingFormSchema>({
    resolver: zodResolver(shippingSchema),
  });

  const handleShippingForm = (data: shippingFormSchema) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      onSubmit={handleSubmit(handleShippingForm)}
      className="flex flex-col gap-4"
    >
      {shippingFormData.map((item, index) => {
        const errorName = errors[item?.name as keyof shippingFormSchema];
        return (
          <div key={index} className="flex flex-col gap-1">
            {/*  form label */}
            <label
              className="text-xs text-gray-500 font-medium capitalize"
              htmlFor={item.name}
            >
              {item.label}
            </label>
            {/*  form input types */}
            {item.type === "textarea" ? (
              <textarea
                id={item.id}
                className={`border-b py-2 outline-none text-sm ${
                  errorName ? "border-red-500" : "border-gray-200"
                }`}
                placeholder={item.placeHolder}
                rows={2}
                {...register(item.name as keyof shippingFormSchema)}
              />
            ) : (
              <input
                id={item.id}
                type="text"
                className={`border-b py-2 outline-none text-sm ${
                  errorName ? "border-red-500" : "border-gray-200"
                }`}
                placeholder={item.placeHolder}
                {...register(item.name as keyof shippingFormSchema)}
              />
            )}
            {/* form errors */}
            {errorName && (
              <p className="text-xs text-red-500">
                {errorName?.message as string}
              </p>
            )}
          </div>
        );
      })}
      {/*  form submit button */}
      <button className="cart-button">
        Continue <ArrowRight size={18} />
      </button>
    </form>
  );
};

export default ShippingForm;
