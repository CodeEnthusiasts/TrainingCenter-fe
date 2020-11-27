import React from 'react';
import AccessForm from '../AccessForm';
import { useForm } from 'react-hook-form';
// import { SignUp } from '../../../axios/endpoints/auth';
// import ISignUpParams from '../../../__types__/ISignUpParams';

const SignUpForm = () => {

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = async () => {
    // this part will be handled after authorization errors will be resolved
    // const result = await SignUp(getValues() as ISignUpParams);
    console.log(getValues());
  }
  
  return (
    <AccessForm onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor="username"></label>
      <input name="username" type="text" ref={ register } placeholder="username" />
      <label htmlFor="email"></label>
      <input name="email" type="text" ref={ register } placeholder="e-mail" />
      <label htmlFor="password"></label>
      <input name="password" type="password" ref={ register } placeholder="password" />
      <label htmlFor="confirm-password"></label>
      <input name="confim-password" type="password" ref={ register } placeholder="confirm password" />
      <button type="submit">
        Sign up
      </button>
    </AccessForm>
  )
}

export default SignUpForm;