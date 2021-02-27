import { destroy, get, post } from '../config';

export enum ESizeUnits {
  KILOGRAMS = 'kilograms',
  METRES = 'meters'
}

export interface IUserDetails {
  age: number,
  weight: number,
  bodyweightUnit: ESizeUnits.KILOGRAMS,
  height: number,
  heightUnit: ESizeUnits.METRES,
  sex: 'MALE' | 'FEMALE',
}

export interface IUser {
  id: number,
  email: string,
  imageUrl: string,
  userDetailsDTO: IUserDetails,
  username: string,
}

export const Users = {
  getAll: () => get('/users/all'),
  deleteById: (id: number) => destroy(`/users/${ id }`),
  getById: async (id: number): Promise<IUser> => {
    const data = (await get(`/users/${ id }`)).data;
    const userData = data;
    return userData;
  },
  create: (details: IUser) => post('/users', {
    "dto": details,
  }),
}