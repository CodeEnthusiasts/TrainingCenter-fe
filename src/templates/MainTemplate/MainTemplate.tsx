import React, { FC, ReactNode } from 'react';
import Navigation from '../../components/organisms/Navigation/Navigation';
import HeaderNavigation, { IHeaderNavigation } from '../../components/organisms/HeaderNavigation/HeaderNavigation';
import { Container } from './style';
import { RoutePaths } from '../../routes/routes';

interface IMainTemplate {
  children: ReactNode,
  routePath: RoutePaths,
  buttons: IHeaderNavigation['buttons'],
  actions?: {
    leftBtnAction?: (() => void) | undefined;
    rightBtnAction?: (() => void) | undefined;
  },
  links?: {
    leftBtnLink?: string | undefined;
    rightBtnLink?: string | undefined;
  }
}
const MainTemplate: FC<IMainTemplate> = ({ buttons, children, routePath, actions, links }) => {
  return (
    <>
      <HeaderNavigation actions={ actions } buttons={ buttons } title={ routePath } links={ links }/>
      <Container>
        { children }
      </Container>
      <Navigation/>
    </>
  )
}

export default MainTemplate;
