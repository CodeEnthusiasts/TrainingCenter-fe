import React from 'react';
import styled from 'styled-components';
import ProfileLink from '../components/molecules/ProfileLink';
import { RoutePaths } from '../routes';
import MainTemplate from '../templates/MainTemplate';

const ProfileWrapper = styled.div`
  margin: 0 auto;
  width: 350px;
  padding: 100px 0;
  height: 100vh;
  max-height: 800px;
  min-height: 600px;
`;

export default function Profile() { 
  return (
      <ProfileWrapper>
        <MainTemplate 
          routePath={ RoutePaths.PROFILE }
          buttons={{
            leftBtn: 'Back',
            rightBtn: 'Menu',
          }}>
          <ProfileLink path={ RoutePaths.EDIT_ACCOUNT } iconClassName="fas fa-user" />
          <ProfileLink path={ RoutePaths.STATISTICS } iconClassName="fas fa-chart-bar" />
          <ProfileLink path={ RoutePaths.TRAININGS } iconClassName="fas fa-chart-line" />
          <ProfileLink path={ RoutePaths.SETTINGS } iconClassName="fas fa-cog" />
          <ProfileLink path={ RoutePaths.ACHIEVEMENTS } iconClassName="fas fa-award" />
          <ProfileLink 
            path = { RoutePaths.REGISTRATION }
            iconClassName="fas fa-door-open"
            content="log out"    
          />
        </MainTemplate>
      </ProfileWrapper>
  )
}
