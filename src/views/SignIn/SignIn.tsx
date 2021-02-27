import React from 'react';
import SignInForm from '../../components/molecules/SignInForm/SignInForm';
import Logo from '../../components/molecules/Logo/Logo';
import { SignInWrapper } from './SignInStyle'


export default function SignIn() {
  return (
    <SignInWrapper>
      <Logo/>
      <SignInForm/>
    </SignInWrapper>
  )
}
