import React, { FC } from 'react';
import Navigation from '../../organisms/Navigation';
import HeaderNavigation from '../../molecules/HeaderNavigation';
import IMainTemplate from '../../../__types__/IMainTemplate';
import { ContentContainer, Template } from './styles';

const MainTemplate: FC<IMainTemplate> = ({ buttons, children, routePath }) => {
  return (
    <Template>
      <HeaderNavigation 
        buttons={ buttons } 
        title={ routePath } 
      />
      <ContentContainer id="container">
        { children }
      </ContentContainer>
      <Navigation />
    </Template>
  )
}

export default MainTemplate;
