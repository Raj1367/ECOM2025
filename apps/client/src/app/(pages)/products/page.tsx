import React from "react";
import ProductList from "./components/productList";

type searchParamsType = {
  searchParams: Promise<{ category: string }>;
};

const ProductsPage = async ({ searchParams }: searchParamsType) => {
  const category = (await searchParams).category;

  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;
