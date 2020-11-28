import React from 'react';
import AccessForm from '../AccessForm';
import { tryToSignIn } from '../../../axios/endpoints/auth';
import ISignUpParams from '../../../__types__/ISignUpParams';

const SignUpForm = () => {

  const onSubmit = async (params: any) => {
    const result = await tryToSignIn(params as ISignUpParams);

    if (!(result instanceof Error)) {
      console.log('Registration succesful!')
    } else {
      console.log(result.message)
    }
  }
  
  return (
    <AccessForm onSubmit={ onSubmit }>
      <label htmlFor="username"></label>
      <input name="username" type="text" placeholder="username" />
      <label htmlFor="email"></label>
      <input name="email" type="text" placeholder="e-mail" />
      <label htmlFor="password"></label>
      <input name="password" type="password" placeholder="password" />
      <label htmlFor="confirmPassword"></label>
      <input  name="confirmPassword" type="password" placeholder="confirm password" />
      <button type="submit">
        Sign up
      </button>
    </AccessForm>
  )
}

export default SignUpForm;