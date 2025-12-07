
export interface OrderProducts {
  created_at: string;
  email: string;
  id: number;
  products: Product[];
  total: number;
  userName: string;
  user_id: string;
}

export interface Product {
  brand: string;
  category: string;
  created_at: string;
  id: number;
  image: string;
  price: number;
  productDescription: string;
  productName: string;
  quantity: number;
  user_id: string;
}
