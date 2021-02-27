import { post } from '../config';
import { AxiosResponse } from 'axios';

export interface ISignInParams {
  username: string,
  password: string,
}

export interface ISignUpParams {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface ISignInResults extends AxiosResponse {
  email: string,
  id: number,
  roles: string[],
  token: string,
  type: string,
  username: string,
}

export const SignIn = (params: ISignInParams): Promise<AxiosResponse<ISignInResults>> =>
  post('/home/sign-in', {
    "password": params.password,
    "username": params.username,
  })

export const SignUp = (params: ISignUpParams): Promise<AxiosResponse> =>
  post('/home/sign-up', {
    "username": params.username,
    "email": params.email,
    "password": params.password,
    "confirmPassword": params.confirmPassword,
  })

export const tryToSignIn = async (params: ISignInParams) => {
  try {
    const { data } = await SignIn(params);
    return data;
  } catch (err) {
    return new Error(`An ${ err.status } error occured`);
  }
}

export const tryToSignUp = async (params: ISignUpParams) => {
  try {
    const { data } = await SignUp(params);
    return data;
  } catch (err) {
    return new Error(`An ${ err.status } error occured`);
  }
}