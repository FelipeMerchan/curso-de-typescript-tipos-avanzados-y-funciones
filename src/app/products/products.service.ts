import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto } from "./product.dto";
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

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };

  return products[index];
}
