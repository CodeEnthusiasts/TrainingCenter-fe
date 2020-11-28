import IUserDetails from './IUserDetails';

export default interface IUser {
  id: number,
  email: string,
  imageUrl: string,
  userDetailsDTO: IUserDetails,
  username: string,
}