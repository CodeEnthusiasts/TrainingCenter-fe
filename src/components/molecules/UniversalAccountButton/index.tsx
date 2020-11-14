import React, { FC, ReactNode } from 'react';
import Icon from '../../atoms/Icon';
import { theme } from '../../../theme/mainTheme';
import { Button } from './styles';

const UniversalAccountButton: FC<{ children: ReactNode }> = ({ children }) => 

  <Button>
    { children }
    <Icon size={ 1 } className="fas fa-chevron-right" color={ theme.colors.secondary.color2 } />
  </Button>

export default UniversalAccountButton;