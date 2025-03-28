/* Unknown type
  Una mejor forma de evitar any. Es un tipo que nos indica que la
  variable es desconocida. Es la forma en que TypeScript sugiere y evitemos
  trabajar constantemente con any.
*/

/* Con any estamos desactivando todo el poder de TypeScript
por lo que no tendríamos analísis de código estático. Por lo cual,
tambien habilita que se pueda asignar cualquier tipo a la variable
lo cuál es una mala práctica: */
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

/* Incluso una variable que está tipada con any puede ser usada como valor
de una variable que sí tiene definido su tipo (boolean) porque anyVar
es cualquier valor (incluído boolean): */
let isNew: boolean = anyVar;
/* unknownVar.doSomething(); - esto no nos arrojará error de TypeScript aunque
el método doSomething no exista. */

/* unknown permite asignarle a una misma variable diferentes tipos.
  */
let unknownVar: unknown;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

/* A diferencia de any que no me daría un error de TypeScript con este código
con unknown sí arrojará un error en el cual nos pide que verifiquemos el tipo
antes de ejecutar: */
/* unknownVar.doSomething(); doSomething no existe así que nos ayuda a
prevenir el error al mostrarnoslo.*/

/* Un ejemplo de lo que se refieren con el concepto de verificar el tipo antes de ejecutar: */
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}


/* También podemos utilizar unknown en funciones para el valor de retorno
en lugar de any. En los casos en que no sepamos que puede devolver una función.
Unknown al menos nos va a forzar a verificar el tipo y prevenir algún error. */
const parse = (str: string): unknown => {
  return JSON.parse(str);
}

/*
  Si intentamos hacer lo siguiente:
  let isNewV2: boolean = unknownVar;
  Tendrémos este error: Type 'unknown' is not assignable to type 'boolean'.
  Con any no lo teníamos, por lo cual unknown nos exige hacer una verificación de tipo
  antes de asignarlo:
*/
if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}
