/* Si definimos el parámetro por defecto usando typescript
no es necesario usar el signo (?) para indicar que el parámetro
es opcional, isNew y stock ya no tienen el ? y en su lugar
asignamos el valor por defecto */
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew,
  }
}

const product1 = createProduct(1, true, 12);
console.log({ product1 });

/* Si no enviamos el parámetro isNew o stock
no tendrémos ningún error porque quedan como opcionales.
Si no enviamos estos parámetros TypeScript asignará el valor por defecto
que definimos: */
const product2 = createProduct(1);
console.log({ product2 });

const product3 = createProduct(2, false, 0);
console.log({ product3 });

const product4 = createProduct(2, true, 100);
console.log({ product4 });

const product5 = createProduct(2, true);
console.log({ product5 });
