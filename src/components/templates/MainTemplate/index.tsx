import React, { FC } from 'react';
import Navigation from '../../organisms/Navigation';
import HeaderNavigation from '../../organisms/HeaderNavigation';
import IMainTemplate from '../../../__types__/IMainTemplate';
import Routes from '../../../routes';
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  margin-top: 80px;
  overflow: hidden;
`
const getRouteData = (path:string) => {
  const Data = Routes.filter((element) => {
    return element.path === path
  })
  return Data[0];
}

const MainTemplate: FC<IMainTemplate> = ({ buttons, children, routePath }) => {
  return (
    <>
      <HeaderNavigation 
        buttons={ buttons } 
        title={ getRouteData(routePath).data.title } 
      />
      <Container>
      { children }
      </Container>
        
      <Navigation />
    </>
  )
}

export default MainTemplate;
