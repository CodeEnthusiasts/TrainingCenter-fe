import { get, post, destroy } from '../config';
import IUser from '../../__types__/IUser';

export const Users = {
  getAll: () => get('/users/all'),
  deleteById: (id: number) => destroy(`/users/${id}`),
  getById: async (id: number): Promise<IUser> => {
    const data = (await get(`/users/${id}`)).data;
    const userData = data;
    return userData;
  },
  create: (details: IUser) => post('/users', {
    "dto": details,
  }),
}