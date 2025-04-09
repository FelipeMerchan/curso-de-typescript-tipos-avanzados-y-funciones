import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

/* Es la misma idea del Omit, solo que en lugar de omitir ciertos campos
vamos a escogerlos. Pick crea un nuevo tipo solo con los datos que
seleccionemos:
type example = {
    color: string;
    description: string;
}
*/
type example = Pick<Product, 'color' | 'description'>
