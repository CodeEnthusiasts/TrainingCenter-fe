import React, { ChangeEvent, useState } from 'react';
import AccessForm from '../AccessForm';
import { tryToSignUp } from '../../../axios/endpoints/auth';
import ISignUpParams from '../../../__types__/ISignUpParams';
import Icon from '../../atoms/Icon';
import { RoutePaths } from '../../../routes';
import IInputFormProps from '../../../__types__/IInputFormProps';
import { noSpacesPattern, emailPattern } from '../../../regex';

const SignUpForm = () => {

  const [pass, setPass] = useState<string>('');

  const props: IInputFormProps[] = [
    { registerRules: { required: true, pattern: noSpacesPattern } }, // username
    { registerRules: { required: true, pattern: emailPattern } }, // email
    { registerRules: { required: true } }, // password
    { registerRules: { required: true, validate: value => value === pass } }, // confirm password
  ]

  const onSubmit = async (params: any) => {
    const result = await tryToSignUp(params as ISignUpParams);

    if (!(result instanceof Error)) {
      console.log('Registration succesful!')
    } else {
      console.log(result.message)
    }
  }

  return (
    <AccessForm 
      inputFormProps={ props }
      onSubmit={ onSubmit }
      sideLinkContent="Already have an account? Sign in now!"
      sideLinkTo={ RoutePaths.SIGN_IN }
    >
      <label htmlFor="username"></label>
      <input name="username" type="text" placeholder="username" />
      <label htmlFor="email"></label>
      <input name="email" type="text" placeholder="e-mail" />
      <label htmlFor="password"></label>
      <input 
        name="password" 
        type="password" 
        placeholder="password" 
        value={ pass }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => { setPass(e.target.value) } } 
      />
      <label htmlFor="confirmPassword"></label>
      <input name="confirmPassword" type="password" placeholder="confirm password" />
      <button type="submit">
        <Icon className="fas fa-sign-in-alt" size={ 1.3 } color="inherit" />
        &nbsp;Sign up
      </button>
    </AccessForm>
  )
}

export default SignUpForm;