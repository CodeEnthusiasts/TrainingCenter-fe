import React from 'react';
import SignUpForm from '../../components/molecules/SignUpForm';
import Logo from '../../components/molecules/Logo';
import styled from 'styled-components';

const RegistrationWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export default function Registration() {


  return (
    <RegistrationWrapper>
      <Logo/>
      <SignUpForm/>
    </RegistrationWrapper>
  )
}
