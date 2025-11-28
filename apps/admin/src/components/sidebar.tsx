"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  ChevronUp,
  DollarSign,
  ListOrdered,
  Pen,
  Plus,
  Projector,
  Shirt,
  ShoppingCart,
  User,
  User2,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { sidebarData } from "@/data/sidebarData";
import AddProductForm from "@/app/(pages)/products/form/addProductForm";
import AddCategoryForm from "@/app/(pages)/products/form/addCategoryForm";
import AddUserform from "@/app/(pages)/users/form/addUserform";
import AddOrderForm from "@/app/(pages)/payments/form/addOrderForm";
import { MdMoney } from "react-icons/md";

const AppSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sidebar collapsible="icon" side="left">
      {/* Header */}
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="logo" width={24} height={24} />
                <span className="font-semibold text-sm">Admin Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <hr />

      {/* Main Content */}
      <SidebarContent>
        {/* Application Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarData.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge className="ml-auto shadow-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[12px]">
                      26
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Products Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Products</SidebarGroupLabel>
          {/* <SidebarGroupAction asChild>
            <Button variant="ghost" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/products">
                    <Shirt className="w-4 h-4" />
                    <span>See All Products</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <AddProductForm />
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <AddCategoryForm />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* users section */}
        <SidebarGroup>
          <SidebarGroupLabel>Users</SidebarGroupLabel>
          {/* <SidebarGroupAction asChild>
            <Button variant="ghost" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/users">
                    <User className="w-4 h-4" />
                    <span>See All Users</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <AddUserform />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* order and payments section */}
        <SidebarGroup>
          <SidebarGroupLabel>Order/ payemnts</SidebarGroupLabel>
          {/* <SidebarGroupAction asChild>
            <Button variant="ghost" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/payments">
                    <DollarSign className="w-4 h-4" />
                    <span>See All Payments</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <Link href="/orders">
                    <ShoppingCart className="w-4 h-4" />
                    <span>See All Orders</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <AddOrderForm />
                </SidebarMenuButton>
              </SidebarMenuItem> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Collapsible Section */}
        {/* <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between text-sm font-medium"
              >
                <SidebarGroupLabel className="p-0">
                  collapseable section
                </SidebarGroupLabel>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/collapsible/view">
                        <Projector className="w-4 h-4" />
                        <span>View All</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/collapsible/add">
                        <Plus className="w-4 h-4" />
                        <span>Add New</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible> */}

        {/* <SidebarGroup>
          <SidebarGroupLabel>Nested items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Projector className="w-4 h-4" />
                    <span>see All projects</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <Plus /> Add Project
                      </Link>
                    </SidebarMenuSubButton>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <X /> delete Project
                      </Link>
                    </SidebarMenuSubButton>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <Pen /> edit Project
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>*/}
      </SidebarContent> 

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center gap-2 w-full">
                  <User2 className="w-4 h-4" />
                  <span>John Doe</span>
                  <ChevronDown className="ml-auto w-4 h-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
