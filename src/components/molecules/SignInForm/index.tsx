import React from 'react';
import AccessForm from '../AccessForm';
import { useForm } from 'react-hook-form';
// import ISignInParams from '../../../__types__/ISignInParams';
// import { SignIn } from '../../../axios/endpoints/auth';

const SignInForm = () => {

  const { register, handleSubmit, getValues } = useForm()

  const onSubmit = async () => {
    // this part will be handled after authorization errors will be resolved
    // const result = await SignIn(getValues() as ISignInParams);
    console.log(getValues());
  }

  return (
    <AccessForm onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor="username"></label>
      <input name="username" type="text" placeholder="username" ref={ register } />
      <label htmlFor="password"></label>
      <input name="password" type="password" placeholder="password" ref={ register } />
      <button type="submit">
        Sign in
      </button>
    </AccessForm>
  )
}

export default SignInForm;