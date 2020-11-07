import React from 'react';
import styled from 'styled-components';
import H1 from '../components/atoms/H1';
import P from '../components/atoms/P';
import ProfileImage from '../components/atoms/ProfileImage';
import Navigation from '../components/organisms/Navigation/index'
import { Data } from '../ExampleData';

const HomeWrapper = styled.div`
  padding: 30px 0;
  width: 350px;
  margin: 0 auto;
  height: 100vh;
  max-height: 800px;
  min-height: 600px;
  position: relative;
  & > div {
    margin-left: auto;
    margin-right: auto;
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 335px;
      & > div {
        padding-right: 20px;
      }
    }
  }
`;

const Rectangle = styled.div`
  width: 335px;
  height: 150px;
  background: ${({ theme }) => theme.color100};
  border-radius: 15px;
  margin-top: 50px;
`;

export default function Home() {
  
  const { firstName, profileImage } = Data.UserDetailsHome;

  return (
    <HomeWrapper>
      <div>
        <div>
          <H1>Hey { firstName },</H1>
          <P>Let's workout! (jakiś tekst na dzień dobry)</P>
        </div>
        <ProfileImage size="65px" src={ profileImage } alt="" />
      </div>
      <Rectangle />
      <Navigation />
    </HomeWrapper>
  )
}
 