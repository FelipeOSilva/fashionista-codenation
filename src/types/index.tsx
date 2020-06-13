export interface Size {
  available: Boolean;
  size: string;
  sku: string;
}

export interface ProductItem {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: Boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: Size[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  products: ProductItem[];
  productsCart: ProductItem[];
}
