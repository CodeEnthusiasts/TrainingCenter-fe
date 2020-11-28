import React from 'react';
import AccessForm from '../AccessForm';
import { SignUp } from '../../../axios/endpoints/auth';
import ISignUpParams from '../../../__types__/ISignUpParams';

const SignUpForm = () => {

  const onSubmit = async (params: any) => {
    const result = await SignUp(params as ISignUpParams);
    console.log(result);
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
      <input name="confirmPassword" type="password" placeholder="confirm password" />
      <button type="submit">
        Sign up
      </button>
    </AccessForm>
  )
}

export default SignUpForm;