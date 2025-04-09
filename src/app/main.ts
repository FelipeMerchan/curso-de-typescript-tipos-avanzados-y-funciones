import faker from '@faker-js/faker';
import { addProduct, products, updateProduct, findProducts } from "./products/products.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    description: faker.commerce.productDescription(),
    size: faker.random.arrayElement(['M', 'S', 'XL', 'L']),
  });
}

console.log({ products });
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
  price: 90,
});

findProducts({
  stock: 10,
  color: 'red',
  isNew: true,
  tags: ['as', 'as'],
});
