import React from 'react';
import styled from 'styled-components';
import ProfileLink from '../components/molecules/ProfileLink';
import Navigation from '../components/organisms/Navigation';
import { RoutePaths } from '../routes';
import HeaderNavigation from '../components/molecules/HeaderNavigation'
import RouteProps from '../routes/index'

const ProfileWrapper = styled.div`
  margin: 0 auto;
  width: 350px;
  padding: 100px 0;
  height: 100vh;
  max-height: 800px;
  min-height: 600px;
`;

const getRouteData = (path:string) => {
    const Data = RouteProps.filter((element) => {
      return element.path === path
    })
    return Data[0];
}

export default function Profile() { 
  return (
    <>
      <HeaderNavigation 
        title={getRouteData(RoutePaths.ACCOUNT).data.title} 
        buttons={{
          leftBtn: "Back",
          rightBtn: "Menu",
        }}/>
      <ProfileWrapper>
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
      </ProfileWrapper>
      <Navigation />
    </>
  )
}
