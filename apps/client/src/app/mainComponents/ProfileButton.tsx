"use client";
import { UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

const ProfileButton = () => {
  const router = useRouter();
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action
          label="see Orders"
          labelIcon={<ShoppingBag size={14} />}
          onClick={() => router.push("/orders")}
        ></UserButton.Action>
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default ProfileButton;
