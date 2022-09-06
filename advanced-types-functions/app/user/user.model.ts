import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export interface User extends BaseModel {
  usrname: string;
  role: ROLES;
}
