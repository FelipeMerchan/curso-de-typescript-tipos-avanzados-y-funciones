import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
  description: string;
  stock: number;
  size?: Sizes;
  /* Es una buena práctica que las partes que son anidadas, como
  category que es un objeto dentro del objeto Product, las creemos
  como una interfaz propia: */
  category: Category;
  /* Así Category puede ser reutilizada en otros lados del proyecto. */
}
