export interface ProductResponse {
    data: product[];
    error: string | null;
    pageInfo: PageInfo;

}
export interface product {
  Colors: string;
  Quantity: number;
  brand: string;
  category: string;
  created_at: string;
  description: string;
  id: number;
  image: string;
  price: number;
  productName: string;
  subcategory: string;
}
export interface PageInfo {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}
