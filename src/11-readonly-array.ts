/*
  ReadonlyArray
  Ayuda a prevenir las mutaciones a los Arrays.
  Por ejemplo, podemos cambiar el array original haciendole
  un .push(), .split(), etc. Si queremos evitar esto y que el array
  sea solo de lectura para que no se premita mutarlo podemos usar
  ReadonlyArray pasándole el tipo, por ejemplo, ReadonlyArray<number>.
*/

const numbers: ReadonlyArray<number> = [1,2,3,4,5];
numbers.push(1); // Property 'push' does not exist on type 'readonly number[]'.
numbers.pop();
numbers.unshift(1);
