import { User, ROLES } from './01-enum'

const currentUser: User = {
  username: 'Felipe',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
}

const rta = checkAdminRole();
console.log({ rta });

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }

  if (currentUser.role === role2) {
    return true;
  }

  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log({ rta2 });

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log({ rta3 });

/* Refactor usando rest. al usar ...roles cualquier argumento que se envié
se va a recibir como un array en la función.
Es decir, nuestra función va a tomar todos los parámetros y los reune en un
array, en este caso tendrémos que roles es (['admin', 'seller', 'customer']): */
export const checkRoleV3 = (...roles: string[]) => {
  console.log({ roles }) // { roles: [ 'admin', 'seller', 'customer' ] }
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log({ rta4 });
