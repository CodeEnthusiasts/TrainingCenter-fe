import React, { FC } from 'react';
import INavigationButton from '../../../__types__/INavigationButton';
import { Link } from './styles';

const NavigationButton: FC<INavigationButton> = ({ path, children, location, isSpecial }) => {


  return (
    <Link to={ path } active={ path === location } isSpecial={ isSpecial }>
    { children }
    </Link>
  )
}

export default NavigationButton;