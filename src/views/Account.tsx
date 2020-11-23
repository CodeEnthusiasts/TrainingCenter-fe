import React, { useEffect, useState } from 'react';
import AccountTile from '../components/molecules/AccountTile';
import { Data } from '../ExampleData';
import H1Proto from '../components/atoms/H1';
import ProfileImage from '../components/atoms/ProfileImage';
import styled from 'styled-components';
import { RoutePaths } from '../routes';
import MainTemplate from '../templates/MainTemplate';
import { Users } from '../axios/endpoints/user';

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
  width: 100%;
  position: relative;
  height: 550px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const TilesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Account() {
  
  const { profileImage, ...details } = Data.UserDetailsAccount;
  // this username stuff is for testing purposes
  const [username, setUsername] = useState<string>('');

  useEffect(() => { 
    (async () => {
      const { username } = await Users.getById(1);
      setUsername(() => username);
    })()
  }, [])

  return (
    <MainTemplate routePath={ RoutePaths.ACCOUNT } buttons={{ leftBtn: 'Back', rightBtn: 'Menu'}}>
      <AccountWrapper>
        <ProfileImage src={ profileImage } alt="" size="150px" />
        <H1>{ username.length > 0 ? username : 'loading' }</H1>
        <TilesWrapper>
          { Object.entries(details).map(([detail, value], i) => 
              <AccountTile 
                detail={ detail }
                value={ value }
                iconClassName={ icons[i] }
                key={ i }
              />
            )}
        </TilesWrapper>
    </AccountWrapper>
    </MainTemplate>
  )
}
