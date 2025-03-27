/*
  Enums: permite confiugrar un set de opciones, tiene un gran parecido
  a los literal types. Tiene la ventaja de crear autodocumentación.
  Además permite saber cuáles son las opciones que podemos asignarle
  a una variable, por ejemplo, debemos escribir ROLES.ADMIN, es decir,
  las opciones vienen dadas luego de escribir el enum así no nos equivocamos
  al escribir o enviamos un valor que no es permitido.

  Es aconsejable que los enums se escriban en mayúscula.
  Podemos asignarle strings o números a cada opción del enum.
*/

enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  /* Al definir un enum en el tipo de una propiedad indica que
  lo que se asigne a la propiedad debe ser una de las opciones incluídas
  en el conjunto de opciones del enum: */
  role: ROLES;
}

const felipeUser: User = {
  username: "Felipe",
  role: ROLES.ADMIN,
}
