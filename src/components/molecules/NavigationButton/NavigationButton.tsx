import React, { FC, ReactNode } from 'react';
import { Link } from './styles';
import { RoutePaths } from '../../../routes';

interface INavigationButton {
  children: ReactNode,
  path: RoutePaths,
  location: string,
  isSpecial?: true,
}

const NavigationButton: FC<INavigationButton> = ({ path, children, location, isSpecial }) => {
  return (
    <Link to={ path } active={ path === location } isSpecial={ isSpecial }>
      { children }
    </Link>
  )
}

export default NavigationButton;