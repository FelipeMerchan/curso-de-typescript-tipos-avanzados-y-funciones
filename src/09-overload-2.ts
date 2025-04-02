/* Si le enviamos 'Nico' que es un string la función debe retornar un array
de strings ['N','i','c','o'], pero también queremos hacer lo contrario, si enviamos
un array de strings ['N','i','c','o'] lo compacte y devuelva un string 'Nico' */

/* La sobre carga de funciones solo funciona con function y no funcionan con
const, es decir con array functions (const func = () => {}). */
/* Para hacer la sobrecarga debemos hacer la sobrecarga de los inputs y las
salidas, no debemos hacer nada de cómo resolver el problema. Solo debemos sobrecargar
el firmado de inputs y outputs: */
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;
/* Si hacemos hover sobre los parseString anteriores veremos esto:
function parseString(input: string): string[] (+2 overloads).
Es decir, con las líneas 10 y 11 simplemente estamos tipando, a eso
es a lo que se conocería como sobrecarga que permite TypeScript. */

/* export function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // Retorna string
  } else {
    return input.split(''); // Retorna string[]
  }
} */

  /* Si refactorizamos la función para que el tipo del parámetro y el valor
  de retorno sea unknown tendrémos una función más genérica para poder hacer muchas
  más sobrecargas, por ejemplo, además de tener el tipado de las líneas 10 y 11
  podríamos agregar otra sobrecarga: export function parseString(input: number): boolean: */
export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); /* Retorna string */
  } else if (typeof input === 'string') {
    return input.split(''); /* Retorna string[] */
  } else if (typeof input === 'number') {
    return true; /* Retorna boolean*/
  }
}

const rtaArray = parseString('Nico');
/* Ahora TypeScript sabe el tipo de valor exacto en base al tipo de dato
del inputque recibió: const rtaArray: string[] */
rtaArray.reverse();
/*
  Ya no es necesario hacer una aserción de tipo:
  if (Array.isArray(rtaArray)) {
    rtaArray.reverse();
  }
*/

console.log('Nico => ', { rtaArray });
const rtaString = parseString(['N', 'i', 'c', 'o']);
/* const rtaString: string */
rtaString.toLowerCase();

console.log("['N', 'i', 'c', 'o'] => ", { rtaString });

const rtaBoolean = parseString(12);
/* const rtaBoolean: boolean, ya se reconoce como de tipo boolean gracias
a la sobrecarga de la línea 12. */
console.log("12", { rtaBoolean });
/*
Para esto es que nos es útil la sobrecarga de funciones para identificar qué
tipo de dato va a retornar una función en base al tipo de dato del input
que recibe. La sobre carga se puede hacer en los métodos de las clases también.
*/

/* TypeScript tiene una serie de buenas prácticas para no incurrir en malos hábitos:

1. Cuando tengamos sobrecarga de métodos y por alguna razón tengamos un unknown
en esa sobrecarga, lo mejor es dejar ese unknown al final sino no nos va a funcionar la aserción
de tipo y autocompletado que brinda el editor de código:

Wrong:
declare function fn(x: unknown): unknown;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;
var myElem: HTMLDivElement;
var x = fn(myElem) // x:unknown, wat?

Ok:
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown;
var myElem: HTMLDivElement;
var x = fn(myElem) // x: string

2. Podemos hacer sobrecarga en donde siempre se retorna el mismo tipo de dato y lo único
que cambia son el número de parámetros, pero esto sería una sobrecarga innecesaria:

Wrong:
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}

Debemos evaluar correctamente si realmente necesitamos una sobrecarga o simplemente podríamos
usar parámetros opcionales y dentro de la función realizar las evaluaciones para verificar si viene o no
el parámetro opcional para ejecutar o no ejecutar cierta cosa. Al final el retorno es el mismo (number):
Ok:
interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}

3. Otro caso en el cual podemos tener sobrecargas innecesarias sería el siguiente:
Wrong:
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}

Podemos usar un simple union type, no es necesario tener tres sobrecargas y en su lugar
solo usar 2 en total:
Ok:
interface Moment {
  utcOffset(): number;
  utcOffset(b: number | string): Moment;
}
*/
