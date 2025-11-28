"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import UseCartStore from "../zutsand/store/useCartStore";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

type Props = {};

const Navbar = (props: Props) => {
  const { cart } = UseCartStore();

  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* left section */}
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

      {/* right section */}
      <div className="flex items-center gap-6">
        <Searchbar />
        {/* nav icons */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Home className="w-4 h-4 text-gray-400" />
          </Link>

          {/*  notifications */}
          <Bell className="w-4 h-4 text-gray-400" />

          {/* cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-4 h-4 text-gray-400" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs font-bold  text-gray-600 bg-amber-400 rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {/*  user auth */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <ProfileButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
