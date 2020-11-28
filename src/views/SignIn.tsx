import React from 'react'
import styled from 'styled-components';
import SignInForm from '../components/molecules/SignInForm';
import Logo from '../components/molecules/Logo';

const SignInWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export default function SignIn() {
  

  return (
    <SignInWrapper>
      <h1>Sign in</h1>
      <Logo />
      <SignInForm />
    </SignInWrapper>
  )
}
