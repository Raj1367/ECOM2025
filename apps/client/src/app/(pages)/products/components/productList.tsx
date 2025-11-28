import React, { FC } from "react";
import { products } from "../data/productData";
import ProductCard from "./productCard";
import ProductCategories from "./productCategories";
import Link from "next/link";
import FilterProductList from "@/app/mainComponents/FilterProductList";
import { ProductType } from "@/app/types/types";

type productCategory = {
  category: string;
  params: "home" | "products";
};

const ProductList = ({ category, params }: productCategory) => {
  return (
    <div className={`w-full ${params === "products" && "mt-4"}`}>
      {/* Catgeories */}
      <ProductCategories />

      {params === "products" && <FilterProductList />}

      {/* product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* products link */}
      <Link
        className="flex justify-end mt-4 underline text-sm text-gray-500 hover:text-black transition-colors"
        href={category ? `/products/?category=${category}` : "/products"}
      >
        View all Products
      </Link>
    </div>
  );
};

export default ProductList;
