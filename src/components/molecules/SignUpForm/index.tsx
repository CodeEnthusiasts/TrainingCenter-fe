import React from 'react';
import AccessForm from '../AccessForm';
// import { SignUp } from '../../../axios/endpoints/auth';
// import ISignUpParams from '../../../__types__/ISignUpParams';

const SignUpForm = () => {

  const onSubmit = async () => {
    // this part will be handled after authorization errors will be resolved
    // const result = await SignUp(getValues() as ISignUpParams);
  }
  
  return (
    <AccessForm onSubmit={ onSubmit }>
      <label htmlFor="username"></label>
      <input name="username" type="text" placeholder="username" />
      <label htmlFor="email"></label>
      <input name="email" type="text" placeholder="e-mail" />
      <label htmlFor="password"></label>
      <input name="password" type="password" placeholder="password" />
      <label htmlFor="confirm-password"></label>
      <input name="confim-password" type="password" placeholder="confirm password" />
      <button type="submit">
        Sign up
      </button>
    </AccessForm>
  )
}

export default SignUpForm;