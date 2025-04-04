import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  /* Como marcamos la propiedad id como readonly
  no vamos a poder sobreescribirla, solo la podrémos leer
  (Cannot assign to 'id' because it is a read-only property): */
  // data.id = 'ashjdhjasdhj' // estamos sobreescribiendo el id
  // data.createdAt = new Date(1998, 1, 1);
  products.push(data);
}
