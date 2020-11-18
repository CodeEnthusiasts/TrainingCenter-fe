import React, { FC } from 'react';
import Navigation from '../../components/organisms/Navigation';
import HeaderNavigation from '../../components/organisms/HeaderNavigation';
import IMainTemplate from '../../__types__/IMainTemplate';
import { Container } from './style';

const MainTemplate: FC<IMainTemplate> = ({ buttons, children, routePath }) => {
  return (
    <>
      <HeaderNavigation buttons={ buttons } title={ routePath } />
        <Container>
          { children }
        </Container>
      <Navigation />
    </>
  )
}

export default MainTemplate;
