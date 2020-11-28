import React from 'react';
import AccessForm from '../AccessForm';
import ISignInParams from '../../../__types__/ISignInParams';
import { tryToSignIn } from '../../../axios/endpoints/auth';

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
    <AccessForm onSubmit={ onSubmit }>
      <label htmlFor="username"></label>
      <input name="username" type="text" placeholder="username" />
      <label htmlFor="password"></label>
      <input name="password" type="password" placeholder="password" />
      <button type="submit">
        Sign in
      </button>
    </AccessForm>
  )
}

export default SignInForm;