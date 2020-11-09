import React from 'react';
import { RoutePaths } from '../../../routes';
import ProfileImage from '../../atoms/ProfileImage';
import ProfileImageSrc from '../../../exampleImg.jpg';
import NavButton from '../../molecules/NavigationButton';
import { Nav } from './styles';
import Icon from '../../atoms/Icon';
import { useLocation } from 'react-router-dom';
import { theme } from '../../../theme/mainTheme';

export default function Navigation() {
  
  const { pathname } = useLocation();

  return (
    <Nav>
      <NavButton 
        path={ RoutePaths.HOME } 
        location={ pathname }>
        <Icon 
          className="fas fa-home" 
          size={ 2.5 } 
          color={ theme.color200 } />
      </NavButton>

      <NavButton path={ RoutePaths.HOME } location={ pathname }>
        <Icon className="fas fa-search" size={ 2.5 } color={ theme.color200 } />
      </NavButton>
      <NavButton path={ RoutePaths.TRAININGS } location={ pathname } isSpecial={ true }>
        <Icon className="fas fa-dumbbell" size={ 2.5 } color={ theme.primmary } />
      </NavButton>
      <NavButton path={ RoutePaths.HOME } location={ pathname }>
        <Icon className="fas fa-plus" size={ 2.5 } color={ theme.color200 } />
      </NavButton>
      <NavButton path={ RoutePaths.ACCOUNT } location={ pathname }>
        <ProfileImage src={ ProfileImageSrc } size="30px" alt="" />
      </NavButton>
    </Nav>
  )
}