"use client";
import { useState, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, UploadIcon, X } from "lucide-react";
import { ProductFormSchema, ProductSchema } from "@/schema/productSchema";
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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import { SidebarMenuButton } from "@/components/ui/sidebar";

const AddProductForm = () => {

  const form = useForm<ProductFormSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      shortDescription: "",
      description: "",
      price: "",
      category: "",
      sizes: [],
      colors: [],
      stockMatrix: [],
      images: [],
    },
  });

  const [open, setOpen] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);

  const sizes = useWatch({ control: form.control, name: "sizes" });
  const colors = useWatch({ control: form.control, name: "colors" });

  const stockMatrix = useMemo(() => {
    if (!sizes?.length || !colors?.length) return [];
    const combinations = [];
    for (const size of sizes) {
      for (const color of colors) {
        combinations.push({ size, color });
      }
    }
    return combinations;
  }, [sizes, colors]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: any
  ) => {
    const files = Array.from(e.target.files || []);
    onChange(files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setPreviews(fileURLs);
  };

  const handleRemoveImage = (index: number, fieldOnChange: any) => {
    const currentImages = form.getValues("images") || [];
    const updatedImages = currentImages.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    form.setValue("images", updatedImages);
    setPreviews(updatedPreviews);
    fieldOnChange(updatedImages);
  };

  const onSubmit = (data: any) => {
    console.log("Product Data:", data);
    setOpen(false);
    form.reset();
    setPreviews([]);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) {
          form.reset();
          setPreviews([]);
        }
      }}
    >
      <DialogTrigger asChild>
        <SidebarMenuButton className="font-normal">
          <Plus />
          Add Product
        </SidebarMenuButton>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Add your product details below.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-2 max-h-[600px] overflow-y-auto my-2"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Short Description */}
            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter short description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter detailed description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter price"
                      value={field.value ?? ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*\.?\d*$/.test(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
                      className="w-full rounded-md border border-input bg-background p-2 text-sm"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <option value="">Select category</option>
                      {["Shirts", "Pants", "Swimwear", "Formals"].map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Sizes */}
            <FormField
              control={form.control}
              name="sizes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sizes</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={["S", "M", "L"].map((s) => ({
                        label: s,
                        value: s,
                      }))}
                      value={field.value || []}
                      onValueChange={field.onChange}
                      placeholder="Select sizes"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Colors */}
            <FormField
              control={form.control}
              name="colors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Colors</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={["Red", "Blue", "Green"].map((c) => ({
                        label: c,
                        value: c,
                      }))}
                      value={field.value || []}
                      onValueChange={field.onChange}
                      placeholder="Select colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stock Matrix */}
            {stockMatrix.length > 0 && (
              <div>
                <FormLabel>Stock per Size & Color</FormLabel>
                <div className="grid grid-cols-3 gap-3 mt-2 border p-3 rounded-md">
                  {stockMatrix.map(({ size, color }) => (
                    <div key={`${size}-${color}`} className="space-y-1">
                      <p className="text-sm font-medium">
                        {size} - {color}
                      </p>
                      <Input
                        className="w-20"
                        type="number"
                        min={0}
                        placeholder="Qty"
                        value={
                          form
                            .watch("stockMatrix")
                            ?.find((s) => s.size === size && s.color === color)
                            ?.quantity ?? ""
                        }
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          const currentStock =
                            form.getValues("stockMatrix") || [];
                          const updated = currentStock.filter(
                            (s) => !(s.size === size && s.color === color)
                          );
                          updated.push({ size, color, quantity: val });
                          form.setValue("stockMatrix", updated);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* image */}
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <div className="border h-[200px] w-full rounded-md bg-primary-foreground flex items-center justify-center relative overflow-hidden cursor-pointer">
                      {previews.length === 0 ? (
                        <Label className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer">
                          <UploadIcon className="text-gray-400" size={30} />
                          <span className="text-muted-foreground text-sm">
                            Upload images here
                          </span>
                          <span className="text-xs text-gray-400">
                            png, svg, jpeg
                          </span>
                          <Input
                            type="file"
                            accept="image/png, image/jpeg, image/svg+xml"
                            multiple
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) =>
                              handleImageChange(e, field.onChange)
                            }
                          />
                        </Label>
                      ) : (
                        <div className="mt-3 grid grid-cols-3 gap-2 p-2 w-full overflow-auto">
                          {previews.map((src, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={src}
                                alt={`preview-${index}`}
                                className="w-full h-24 object-cover rounded-md border"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveImage(index, field.onChange)
                                }
                                className="absolute cursor-pointer top-1 right-1 bg-black/60 hover:bg-red-500/90 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                          <Label className="flex flex-col items-center justify-center gap-2 cursor-pointer border-2 border-dashed rounded-md h-24">
                            <UploadIcon className="text-gray-400" size={20} />
                            <span className="text-xs text-muted-foreground">
                              Add more
                            </span>
                            <Input
                              type="file"
                              accept="image/png, image/jpeg, image/svg+xml"
                              multiple
                              className="absolute inset-0 opacity-0 cursor-pointer"
                              onChange={(e) =>
                                handleImageChange(e, field.onChange)
                              }
                            />
                          </Label>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2 cursor-pointer">
              Add Product
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductForm;
