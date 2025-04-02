/*
  Interfaces
  Son una forma de trabajar con objetos y clases. Es una mejor forma de definir
  objetos.
*/

/* Literal type */
type Sizes = 'S' | 'M' | 'L' | 'XL';
/* type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
} */
/* Sirven exactamente igual que type, por lo cual, podríamos crear a
Product usando una interface: */
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}
/*
  Diferencias de interface vs type
  1. Con type podemos definir tipos primitivos o directos, por ejemplo:
  type userId = string | number // no se puede lograr con una interfaz
  userId está resuelto de forma directa en una sola línea, en cambio, una interfaz
  requiere todo el cuerpo entre llaves {}.

  2. Las interfaces se pueden extender, un type no. Solo por esta característica
  vamos a ver que la mayoría de proyectos con TypeScript utilizan interface en lugar de type.
  Por ende, se recomienda que cuando tengamos conjuntos de datos (objetos con varias propiedades)
  como nuestra interface Product se utilice interface.
*/

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
})

const addProduct = (data: Product) => {
  products.push(data);
}
