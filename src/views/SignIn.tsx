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
  padding: 50px;
`;

export default function SignIn() {
  

  return (
    <SignInWrapper>
      <Logo />
      <SignInForm />
    </SignInWrapper>
  )
}
