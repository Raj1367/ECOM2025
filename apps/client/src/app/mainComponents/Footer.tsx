import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-16 gap-8 md:gap-0 flex flex-col items-center md:flex-row md:items-start md:justify-around text-white bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="trendlama"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider">
            TRENDLAMA.
          </p>
        </Link>
        <p className="text-gray-400 text-sm">© 2025 Trendlama</p>
        <p className="text-gray-400 text-sm">All rights reserved.</p>
      </div>

      <div className="flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="">Contact us</Link>
        <Link href="">Terms of servcie</Link>
        <Link href="">private ploicy</Link>
        <Link href="">About</Link>
      </div>

      <div className="flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="">All Products</Link>
        <Link href="">All Arrivals</Link>
        <Link href="">best Sellers</Link>
        <Link href="">Sale</Link>
      </div>

      <div className="flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Categories</p>
        <Link href="">Shirts</Link>
        <Link href="">Pants</Link>
        <Link href="">Jackets</Link>
        <Link href="">Footwear</Link>
      </div>


      <div className="flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Help</p>
        <Link href="">chat support</Link>
        <Link href="">Retuns / Exchnages</Link>
        <Link href="">Cancellations</Link>
      </div>
    </div>
  );
};

export default Footer;
