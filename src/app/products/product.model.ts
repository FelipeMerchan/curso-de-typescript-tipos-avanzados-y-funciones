import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  /* Es una buena práctica que las partes que son anidadas, como
  category que es un objeto dentro del objeto Product, las creemos
  como una interfaz propia: */
  category: Category;
  /* Así Category puede ser reutilizada en otros lados del proyecto. */
}
