import React from 'react';
import AccessForm from '../AccessForm';
import ISignInParams from '../../../__types__/ISignInParams';
import { tryToSignIn } from '../../../axios/endpoints/auth';
import Icon from '../../atoms/Icon';
import { RoutePaths } from '../../../routes';
import IInputFormProps from '../../../__types__/IInputFormProps';

const props: IInputFormProps[] = [
  { registerRules: { required: true } }, // username
  { registerRules: { required: true } }, // password
]

const SignInForm = () => {

  const onSubmit = async (params: any) => {
    const result = await tryToSignIn(params as ISignInParams);

    if (!(result instanceof Error)) {
      // localStorage.setItem('token', result.token);
      console.log(`${result.username} has logged in!`);
    } else {
      console.log(result.message);
    }
  }

  return (
    <AccessForm 
      inputFormProps={ props }
      onSubmit={ onSubmit }
      sideLinkContent="Don't have an account yet? Sign up now!"
      sideLinkTo={ RoutePaths.REGISTRATION }
    >
      <label htmlFor="username"></label>
      <input name="username" type="text" placeholder="username" />
      <label htmlFor="password"></label>
      <input name="password" type="password" placeholder="password" />
      <button type="submit">
        <Icon className="fas fa-angle-double-right" size={ 1.3 } color="inherit" />
        &nbsp;Login
      </button>
    </AccessForm>
  )
}

export default SignInForm;