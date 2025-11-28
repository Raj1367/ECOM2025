import Image from "next/image";
import ProductList from "./(pages)/products/components/productList";

type searchParamsType = {
  searchParams: Promise<{ category: string }>;
};

const Homepage = async ({ searchParams }: searchParamsType) => {
  const category = (await searchParams).category;
  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="" fill></Image>
      </div>
      <ProductList category={category} params="home" />
    </div>
  );
};

export default Homepage;
