export type PaymentTypes = {
  id: string;
  userId: number;
  amount: number;
  email: string;
  username: string;
  status: "pending" | "processing" | "success" | "failed";
};

export type UserTypes = {
  id: string;
  avatar: string;
  username: string;
  email: string;
  status: "active" | "inactive";
};

export type ProductTypes = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};
