import { AxiosResponse } from 'axios'

export default interface ISignInResults extends AxiosResponse {
  email: string,
  id: number,
  roles: string[],
  token: string,
  type: string,
  username: string,
}