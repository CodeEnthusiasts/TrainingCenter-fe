import { post } from '../config';

export const SignIn = (password: string, username: string) => post('/home/sign-in', {
    "password": password,
    "username": username,
})