import { post } from '../config';
import ISignInParams from '../../__types__/ISignInParams';
import ISignUpParams from '../../__types__/ISignUpParams';

export const SignIn = (params: ISignInParams) => post('/home/sign-in', {
    "password": params.password,
    "username": params.username,
})

export const SignUp = (params: ISignUpParams) => post('/home/sign-up', {
    "username": params.username,
    "email": params.email,
    "password": params.password,
    "confirmPassword": params.confirmPassword,
})