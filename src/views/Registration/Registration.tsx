import React from 'react';
import SignUpForm from '../../components/molecules/SignUpForm/SignUpForm';
import Logo from '../../components/molecules/Logo/Logo';
import { RegistrationWrapper } from './RegistrationStyle'


export default function Registration() {
  return (
    <RegistrationWrapper>
      <Logo/>
      <SignUpForm/>
    </RegistrationWrapper>
  )
}
