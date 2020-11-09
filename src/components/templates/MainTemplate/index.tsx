import React, { FC } from 'react';
import Navigation from '../../organisms/Navigation';
import HeaderNavigation from '../../molecules/HeaderNavigation';
import IMainTemplate from '../../../__types__/IMainTemplate';
import Routes from '../../../routes';

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
        { children }
      <Navigation />
    </>
  )
}

export default MainTemplate;
