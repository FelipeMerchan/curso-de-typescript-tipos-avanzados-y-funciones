/*
  Never type
  Se utiliza para funciones que sabemos que nunca van a terminar o que van
  a detener la ejecución del programa. Es una situación rara, pero puede
  darse el caso. TypeScript nos va a ayudar a detectar las funciones que
  nunca terminan, por ejemplo, un ciclo infinito.
*/

/* Automáticamente TypeScript nos tipa implícitamente la función así:
  const withoutEnd: () => never. Quiere decir que una vez llamemos a
  la función nunca va a parar de ejecutarse. Así que es una forma
  en que nos alertan sobre este tipo de funciones que nunca terminan. */
const withoutEnd = () => {
  while (true) {
    console.log('Nunca para de aprender');
  }
}

/* Una función que lanza un error nunca termina porque
una vez ejecutada hasta ahí llegó el programa debido a que
se arrojó un error que detuvo la ejecución del sistema: const fail: (message: string) => never */
const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === "string") {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }

  return fail('No match')
}

console.log(example('Hola'));
console.log(example([1,1,1]));
/* Como un número no entra en ninguna de las validaciones
de example() se va a ejecutar el método fail, lo cual generará que
se termine la aplicación: */
console.log(example(4));

/* Este código no se ejecutará debido a que la aplicación terminó de ejecutarse
con el error que arroja el código de la línea 41: */
console.log(example('Hola después del fail'));

/* No debemos confundir Never con Void porque son 2 cosas diferentes.
Void no retorna nada, tiene un fin, simplemente no tiene un retorno
(string, number, etc), en cambio, never es una función que nunca va a finalizar
o que puede terminar el programa en el caso de arrojar una excepoción/error. */
