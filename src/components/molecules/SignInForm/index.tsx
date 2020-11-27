import React from 'react';
import AccessForm from '../AccessForm';
// import ISignInParams from '../../../__types__/ISignInParams';
// import { SignIn } from '../../../axios/endpoints/auth';

const SignInForm = () => {

  const onSubmit = async () => {
    // this part will be handled after authorization errors will be resolved
    // const result = await SignIn(getValues() as ISignInParams);
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