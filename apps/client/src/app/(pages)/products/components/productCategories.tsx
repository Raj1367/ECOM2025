"use client";
import React from "react";
import { categories } from "../data/productCategories";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductCategories = () => {
  
  const pathName = usePathname();
  const router = useRouter();
  
  const seachParams = useSearchParams();
  const selectedCategory = seachParams.get("category");

  const handleSelectCategory = (value: string | null) => {
    const params = new URLSearchParams(seachParams);
    params.set("category", value || "all");
    router.push(`${pathName}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-gray-100 grid grid-cols-2  md:grid-cols-4 lg:grid-cols-8 gap-2 p-2 mb-6 text-sm rounded-md shadow-sm">
      {categories.map((catgeory, index) => (
        <div
          className={`flex gap-2 items-center justify-center p-1  rounded-md cursor-pointer ${
            catgeory.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={index}
          onClick={() => handleSelectCategory(catgeory.slug)}
        >
          {catgeory.icon} {catgeory.name}
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
