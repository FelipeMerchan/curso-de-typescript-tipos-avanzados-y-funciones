import { Product } from "./product.model";
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto";
import faker from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  /* Como marcamos la propiedad id como readonly
  no vamos a poder sobreescribirla, solo la podrémos leer
  (Cannot assign to 'id' because it is a read-only property): */
  // data.id = 'ashjdhjasdhj' // estamos sobreescribiendo el id
  // data.createdAt = new Date(1998, 1, 1);
  /* Simulamos que la base de datos agregó los campos que faltan: */
  const newProduct: Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  };
  products.push(newProduct);

  return newProduct;
}

/*
  Podemos acceder al tipado por el índice, tal cual como lo hacemos
  en JavaScript que podemos acceder a una propiedad usando la key:
  product['id] y esto nos devolverá el valor de la propiedad id.
  Podemos hacer lo mismo con los tipos:
  Product['id'], esto nos devolverá el tipo de la propiedad id: (property) BaseModel.id: string.
  Es útil en caso de que cambie el tipo de la propiedad y de esta forma
  no tenemos que modificar todas las funciones como updateProduct donde recibíamos el parámetro id: string
  (o cualquier propiedad de Product) porque ahora estamos leyendo el tipo desde la interfaz accediendo por el
  índice.

  Es interesante porque podemos reutilizar el tipado de ciertas interfaces
  y obtenerlo por medio del índice para manipularlo o tenerlo en cualquier lado.
*/
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };

  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  /* Como  FindProductDto aplica un readonly a todas las propiedades
  no podemos modificar el parámetro:
  dto.color = 'blue'; // Cannot assign to 'color' because it is a read-only property
  */
 /* A FindProductDto le omitimos la propiedad tags para reescribirla con extends
 para poder redefinir el tipo de tags a ReadonlyArray<string>, esto con el fin
 de evitar que el array tags sea mutado. Ahora tenemos el siguiente error
 si intetamos mutar el array dto.tags?.pop();: Property 'pop' does not exist on type 'readonly string[]' */
  return products;
}
