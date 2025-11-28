"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterProductList = () => {
  const pathName = usePathname();
  const router = useRouter();
  const seachParams = useSearchParams();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(seachParams);
    params.set("sort", value);
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const sortOptions = [
    { option: "Newest", value: "newest" },
    { option: "oldest", value: "oldest" },
    { option: "price: Low to High", value: "asc" },
    { option: "price: High to Low", value: "desc" },
  ];

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-sm p-1 rounded-md"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        {sortOptions.map((data, index) => (
          <option key={index} value={data.value}>
            {data.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterProductList;
