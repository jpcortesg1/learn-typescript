// Enums
// Is recommended in upper case
export enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export type User = {
  usrname: string;
  role: ROLES;
};

const juanUser: User = {
  usrname: 'Juan',
  role: ROLES.ADMIN,
};
