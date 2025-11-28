"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userFormSchema, userSchema } from "@/schema/userSchema";
import { SidebarMenuButton } from "@/components/ui/sidebar";
// ✅ Form Field Configuration
const EditUserFormData = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    name: "address",
    label: "Address",
    type: "textarea",
    placeholder: "Enter your address",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    name: "state",
    label: "State",
    type: "text",
    placeholder: "Enter your state",
  },
  {
    name: "postalcode",
    label: "Postal Code",
    type: "text",
    placeholder: "Enter your postal code",
  },
];

const AddCategoryForm = () => {
  const form = useForm<userFormSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postalcode: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Edited User Data:", data);
    // TODO: handle API call or mutation logic
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuButton className="font-normal">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 121.04"
          >
            <title>add product category</title>
            <path d="M6.87,0H49.49a6.82,6.82,0,0,1,2.95.67A7,7,0,0,1,54.8,2.53a6.49,6.49,0,0,1,1.15,2,6.55,6.55,0,0,1,.41,2.3V49.3a6.83,6.83,0,0,1-2.12,4.94A6.74,6.74,0,0,1,52,55.67a6.89,6.89,0,0,1-2.55.5H6.87a6.87,6.87,0,0,1-2.53-.5,6.82,6.82,0,0,1-2.19-1.39A7,7,0,0,1,.57,52,6.72,6.72,0,0,1,0,49.3V6.87A7,7,0,0,1,1.7,2.36L2,2.08A6.84,6.84,0,0,1,4,.63,6.69,6.69,0,0,1,6.87,0ZM90.78,66.91h10.37A3.85,3.85,0,0,1,105,70.75V84.81H119a3.84,3.84,0,0,1,3.84,3.83V99a3.84,3.84,0,0,1-3.84,3.83H105V116.9a3.84,3.84,0,0,1-3.83,3.84H90.78A3.84,3.84,0,0,1,87,116.9V102.84H72.89A3.85,3.85,0,0,1,69.05,99V88.64a3.85,3.85,0,0,1,3.84-3.83H87V70.75a3.85,3.85,0,0,1,3.83-3.84Zm-83.91-2H49.49a7,7,0,0,1,2.95.66A7.12,7.12,0,0,1,54.8,67.4a6.56,6.56,0,0,1,1.15,2,6.65,6.65,0,0,1,.41,2.31v42.43A6.89,6.89,0,0,1,52,120.53a6.71,6.71,0,0,1-2.55.51H6.87a7,7,0,0,1-4.72-1.9,7,7,0,0,1-1.58-2.26A6.72,6.72,0,0,1,0,114.17V71.74a6.78,6.78,0,0,1,.45-2.41A6.86,6.86,0,0,1,1.7,67.22L2,66.94A7.21,7.21,0,0,1,4,65.49a6.83,6.83,0,0,1,2.83-.62Zm42.62,6.84H6.87l0,0,0,42.46c3.65,0,42.62,0,42.66,0,0-3.59,0-42.45,0-42.47ZM72.64,0h42.62a6.82,6.82,0,0,1,2.95.67,7,7,0,0,1,2.37,1.86,6.69,6.69,0,0,1,1.15,2,6.78,6.78,0,0,1,.4,2.3V49.3A6.83,6.83,0,0,1,120,54.24a6.64,6.64,0,0,1-2.2,1.43,6.85,6.85,0,0,1-2.55.5H72.64a6.82,6.82,0,0,1-2.52-.5,6.71,6.71,0,0,1-2.19-1.39A6.87,6.87,0,0,1,66.35,52a6.56,6.56,0,0,1-.58-2.71V6.87a6.78,6.78,0,0,1,.45-2.41,7,7,0,0,1,1.25-2.1l.27-.28A7,7,0,0,1,69.81.63,6.72,6.72,0,0,1,72.64,0Zm42.62,6.84H72.64l0,0,0,42.46c3.65,0,42.63,0,42.66,0,0-3.59,0-42.45,0-42.47Zm-65.77,0H6.87l0,0,0,42.46c3.65,0,42.62,0,42.66,0,0-3.59,0-42.45,0-42.47Z" />
          </svg>
          Add Category{" "}
        </SidebarMenuButton>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Add your product details here.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-2 max-h-[500px] overflow-y-scroll"
          >
            {EditUserFormData.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof userFormSchema}
                render={({ field: controllerField }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-primary">
                      {field.label}
                    </FormLabel>
                    <FormControl>
                      {field.type === "textarea" ? (
                        <Textarea
                          placeholder={field.placeholder}
                          className="resize-none"
                          {...controllerField}
                        />
                      ) : (
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          {...controllerField}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-2">
              Add
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryForm;
