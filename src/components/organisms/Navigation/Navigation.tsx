import React from 'react';
import { RoutePaths } from '../../../routes/routes';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import ProfileImageSrc from '../../../assets/img/exampleImg.jpg';
import NavButton from '../../molecules/NavigationButton/NavigationButton';
import Icon from '../../atoms/Icon/Icon';
import { Nav } from './NavigationStyle';
import { useLocation } from 'react-router-dom';
import { theme } from '../../../theme/MainTheme';

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
          color={theme.colors.secondary.color2 } />
      </NavButton>

      <NavButton path={ RoutePaths.EXERCISE_FINDER } location={ pathname }>
        <Icon className="fas fa-search" size={ 2.5 } color={ theme.colors.secondary.color2 } />
      </NavButton>
      <NavButton path={ RoutePaths.TRAININGS } location={ pathname } isSpecial={ true }>
        <Icon className="fas fa-dumbbell" size={ 2.5 } color={ theme.colors.primmary.color1 } />
      </NavButton>
      <NavButton path={ RoutePaths.TRAINING_HISTORY } location={ pathname }>
        <Icon className="fas fa-book" size={ 2.5 } color={ theme.colors.secondary.color2 } />
      </NavButton>
      <NavButton path={ RoutePaths.ACCOUNT } location={ pathname }>
        <ProfileImage src={ ProfileImageSrc } size="30px" alt="" />
      </NavButton>
    </Nav>
  )
}
