import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import H1Proto from '../components/atoms/H1';
import AccountTile from '../components/molecules/AccountTile';
import ProfileImage from '../components/atoms/ProfileImage';
import MainTemplate from '../templates/MainTemplate';
import { Data } from '../ExampleData';
import { Users } from '../axios/endpoints/user';
import { RoutePaths } from '../routes';
import { useHistory } from 'react-router-dom';


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
  const history = useHistory();
  const { profileImage, ...details } = Data.UserDetailsAccount;
  // this username stuff is for testing purposes
  const [username, setUsername] = useState<string>('loading');

  useEffect(() => { 
    (async () => {
      const { username } = await Users.getById(1);
      setUsername(() => username);
    })()
  }, [])

  return (
    <MainTemplate
      routePath={ RoutePaths.ACCOUNT }
      buttons={{ leftBtn: 'Back', rightBtn: 'Menu'}}
      actions={{ leftBtnAction: history.goBack }}
    >
      <AccountWrapper>
        <ProfileImage src={ profileImage } alt="" size="150px" />
        <H1>{ username }</H1>
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
