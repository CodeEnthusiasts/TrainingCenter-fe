import React, { useEffect, useState } from 'react';
import AccountTile from '../../components/molecules/AccountTile/AccountTile';
import ProfileImage from '../../components/atoms/ProfileImage/ProfileImage';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { Data } from '../../ExampleData';
import { Users } from '../../axios/endpoints/user';
import { RoutePaths } from '../../routes/routes';
import { useHistory } from 'react-router-dom';
import { H1, AccountWrapper, TilesWrapper} from './AccountStyle'

export const icons = [
  'fas fa-weight-hanging',
  'fas fa-arrow-up',
  'fas fa-birthday-cake',
  'fas fa-user-friends',
];

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
      buttons={ { leftBtn: 'Back', rightBtn: 'Menu' } }
      actions={ { leftBtnAction: history.goBack } }
    >
      <AccountWrapper>
        <ProfileImage src={ profileImage } alt="" size="150px"/>
        <H1>{ username }</H1>
        <TilesWrapper>
          { Object.entries(details).map(([detail, value], i) =>
            <AccountTile
              detail={ detail }
              value={ value }
              iconClassName={ icons[i] }
              key={ i }
            />
          ) }
        </TilesWrapper>
      </AccountWrapper>
    </MainTemplate>
  )
}
