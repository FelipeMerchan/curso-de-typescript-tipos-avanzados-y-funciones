/* Si le enviamos 'Nico' que es un string la función debe retornar un array
de strings ['N','i','c','o'], pero también queremos hacer lo contrario, si enviamos
un array de strings ['N','i','c','o'] lo compacte y devuelva un string 'Nico' */

/* La sobre carga de funciones solo funciona con function y no funcionan con
const, es decir con array functions (const func = () => {}). */
function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); /* Retorna string */
  } else {
    return input.split(''); /* Retorna string[] */
  }
}

const rtaArray = parseString('Nico');
if (Array.isArray(rtaArray)) {
  /* Tuvimos que revisar si lo que retornó la función
  fue un array para poder acceder alos métodos del array sin errores.
  Lo cual complica el código: */
  rtaArray.reverse();
}
console.log('Nico => ', { rtaArray });
const rtaString = parseString(['N', 'i', 'c', 'o']);
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}
console.log("['N', 'i', 'c', 'o'] => ", { rtaString });

/* El problema:
TypeScript no sabe qué retorna exactamente la función parseString, él identifica
lo siguiente: const rtaArray: string | string[], sin embargo, si enviamos
un string nosotros sabemos que retornará un string[] y si enviamos un string[]
retornará un string. Esto debería poderlo identificar TypeScript.

Para esto es que nos es útil la sobrecarga de funciones para identificar qué
tipo de dato va a retornar una función en base al tipo de dato del input
que recibe.
*/
