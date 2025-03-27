/* Tuples
  Permiten definir un conjunto o un array fuertemente tipado, tanto
  en la posición de cada elemento como en el límtie de elementos
  que podemos agregar al array.
*/

/* Tipado de un array */
const prices: (number | string)[] = [1,2,3,4,5, 'as'];
/* Con un tipado de array podemos agregar elementos de cualquier tipo
(number o string en este caso) en cualquier posición del array */
prices.push(1);
prices.push('1');

/* Tipado de una tupla */
/* Con una tupla podemos definir fuertemente el tipado del array, es decir,
podemos tipar el tipo de cada posición del array.
Para lograr esto debemos tipar cada posición del array, por ejemplo,
[string, number] esto indica que el dato de la primera posición
del array es un string y el segundo dato es un number. Además,
indica que el array solo puede tener 2 elementos: */
let user: [string, number];
user = ['felipe', 15];
/* user = [12, 15];  */// Dará error el primer dato porque no es de tipo string

/* user = [];  */// Un array vacío da error porque deben haber 2 elementos
/* user = ['Felipe'];  */// Dará error porque deben haber 2 elementos no 1
user = ['Felipe', 12];

/* Con las tuplas podemos hacer desestructuración */
const [username] = user;
console.log(username); // resultado: Felipe

