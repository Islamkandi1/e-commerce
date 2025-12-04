import { PostgrestError } from "@supabase/supabase-js";

export interface Res {
data?: Item[] | null
error?: PostgrestError | null
status?: string
}

export interface Item {
  price: number;
  brand: string;
  category: "men";
  created_at: string;
  id: number | string;
  productDescription: string;
  productName: string;
  quantity: number;
  user_id: string;
  image: string;
}
