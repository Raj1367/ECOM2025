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
import { ArrowRight, PenBox } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { editUserFormSchema, editUserSchema } from "@/schema/userSchema";

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

const EditUserform = () => {
  const form = useForm<editUserFormSchema>({
    resolver: zodResolver(editUserSchema),
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
        <Button size="icon">
          <PenBox className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit User Deatils</DialogTitle>
          <DialogDescription>
            Edit or update your personal details here.
          </DialogDescription>
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
                name={field.name as keyof editUserFormSchema}
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
              update
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserform;
