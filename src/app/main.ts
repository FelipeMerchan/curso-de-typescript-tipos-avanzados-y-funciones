import { addProduct } from "./products/products.service";

addProduct({
  createdAt: new Date(),
  updatedAt: new Date(),
  id: '1',
  title: 'p1',
  stock: 90,
  category: {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '12',
    name: 'c1',
  }
});
