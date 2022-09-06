import { User, ROLES } from './03-enum';
const currentUser: User = {
  usrname: 'Juan Pablo',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const check = checkAdminRole();
console.log('🚀 ~ file: 09-rest-parametrs.ts ~ line 15 ~ check', check);
