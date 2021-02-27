import React from 'react';
import ProfileLink from '../../components/molecules/ProfileLink/ProfileLink';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { RoutePaths } from '../../routes/routes';
import { useHistory } from 'react-router-dom';
import {ProfileWrapper} from './ProfileStyle'


export default function Profile() {
  const history = useHistory();
  return (
    <MainTemplate
      routePath={ RoutePaths.PROFILE }
      buttons={ { leftBtn: 'Back', rightBtn: '' } }
      actions={ { leftBtnAction: history.goBack } }
    >
      <ProfileWrapper>
        <ProfileLink path={ RoutePaths.EDIT_ACCOUNT } iconClassName="fas fa-user"/>
        <ProfileLink path={ RoutePaths.STATISTICS } iconClassName="fas fa-chart-bar"/>
        <ProfileLink path={ RoutePaths.TRAININGS } iconClassName="fas fa-chart-line"/>
        <ProfileLink path={ RoutePaths.SETTINGS } iconClassName="fas fa-cog"/>
        <ProfileLink path={ RoutePaths.ACHIEVEMENTS } iconClassName="fas fa-award"/>
        <ProfileLink
          path={ RoutePaths.REGISTRATION }
          iconClassName="fas fa-door-open"
          content="log out"
          additionalFunction={ () => {
            localStorage.removeItem('loggedUser')
          } }
        />
      </ProfileWrapper>
    </MainTemplate>
  )
}
