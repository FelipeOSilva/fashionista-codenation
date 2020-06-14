export interface Size {
  available: boolean;
  size: string;
  sku: string;
}

export interface ProductItem {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: Size[];
  id: number;
  qtdCart: number;
  size?: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  products: ProductItem[];
  productsCart: ProductItem[];
}
