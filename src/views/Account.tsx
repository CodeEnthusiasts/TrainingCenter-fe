import React from 'react';
import AccountTile from '../components/molecules/AccountTile';
import { Data } from '../ExampleData';
import H1Proto from '../components/atoms/H1';
import ProfileImage from '../components/atoms/ProfileImage';
import styled from 'styled-components';

const icons = [ // assuming that data will be passed in this order
  'fas fa-weight-hanging',
  'fas fa-arrow-up',
  'fas fa-birthday-cake',
  'fas fa-user-friends',
];

const H1 = styled(H1Proto)`
  position: relative;
  margin-bottom: 17px;
  ::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -17px;
    background: ${({ theme }) => theme.color400};
    height: 1px;
  }
`; 

const AccountWrapper = styled.div`
  width: 375px;
  position: relative;
  height: 100vh;
  max-height: 800px;
  min-height: 600px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
`;

const TilesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Account() {
  
  const { name, profileImage, ...details } = Data.UserDetailsAccount;

  return (
    <AccountWrapper>
      <ProfileImage src={ profileImage } alt="" size="150px" />
      <H1>{ name }</H1>
      <TilesWrapper>
        { Object.entries(details).map(([detail, value], i) => 
            <AccountTile 
              detail={ detail }
              value={ value }
              iconClassName={ icons[i] }
            />
          )}
      </TilesWrapper>
    </AccountWrapper>
  )
}
