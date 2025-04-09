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

/* Utility types
  TypeScript provides several utility types to facilitate common type
  transformations. These utilities are available globally.

  DTOs, Data Transfer Objects (objetos de transferencia de datos):
  Nosotros tenemos unos objetos que tienen unos atributos:
  {
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    ...
  }
  Hay momentos en los cuales nosotros no necesitamos de todos los tipos,
  por ejemplo, cuando estamos haciendo la creación no necesitamos el id o el
  createdAt, porque estos se generan automáticamente en la base de datos. Por lo cual,
  en momentos en particulares como la creación en base de datos debemos omitir
  algunos campos, no significa que no estén en la entidad sino que en el particular
  momento de la creación nosotros solo necesitamos enviar ciertas propiedades:
  Este objeto es un DTO:
  {
    title: faker.commerce.productName(),
    ...
  }
  Ya no cuenta con todas las propiedaes sino solo las que se necesitan para
  crear el objeto en la base de datos.
  A estos datos se le llaman DTOs que solo son objetos de transferencia.
*/


/* Omit recibe una interfaz y luego de la coma enviamos los campos que
queremos omitir de esa interfaz: */
/* type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
La anterior es una forma de usar Omit, pero podemos usar una interfaz también si queremos
extender el resultado del nuevo tipo que crea Omit para poder crearle atributos
que no tenga Product (categoryId): */

/* export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
} */

/* Una buena práctica es que estos DTOs tengan su propio archivo apartado del model,
en este caso creamos el archivo product.dto.ts */
