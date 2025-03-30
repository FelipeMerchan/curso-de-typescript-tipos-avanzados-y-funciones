/* Parámetros opcionales
  Nullish-coalescing permite asignar valores por defecto
*/

/* Si definimos un parámetro como opcional (?), y no es el último de los
  parámetros, TypeScript nos arrojará el siguiente error: A required
  parameter cannot follow an optional parameter.
  Esto se debe a que los parámetros opcionales siempre deben ir al final.
 */
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10, // stock || 10,
    isNew: isNew ?? true, // isNew || true,
  }
}

const product1 = createProduct(1, true, 12);
console.log({ product1 });
/* Cuando no enviamos el atributo opcional lo que se obtendrá
es un stock: undefined */
const product2 = createProduct(1);
console.log({ product2 });
/* En caso de que no envién un parámetro que es opcional podemos
asignarle un valor por defecto. Una de las formas es la siguiente:
  En el return de createProduct:
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true,
  }

  Si stock o isNew no se envían se les asigna el valor por defecto 10 o true.
  Sin embargo, este operador || tiene algunos problemas que JavaScript arregló
  hasta hace poco. Por ejemplo, en JavaScript los siguientes valores se consideran como
  false (valor falsy):
  0 === false
  '' === false
  false === false

  Así que si enviamos cualquiera de estos valores JavaScript va a considerar como si
  el parámetro no existe y por defecto (||) enviará el valor por defecto. Así que esto
  puede producir comportamientos extraños como en el product3 de la línea 50.
*/

const product3 = createProduct(2, false, 0);
/* Como se enviaron valores falsy en los parámetros isNew y stock y estamos usando
  (||) se retornará el valor por defecto aunque no es nuestra intención:
  stock: stock || 10,
  isNew: isNew || true,
  Realmente queremos que isNew sea false y no true y que stock sea 0 y no 10 */
console.log({ product3 });

/* Otra forma de asignar valores por defecto es usando el nullish-coalescing:
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
  Este operador solo va a tomar en cuenta null o undefiend, así que si enviamos un 0,
  un '' o un false ese valor será el asignado y no va a usar el valor por defecto que sí
  asignaba el (||).
*/
