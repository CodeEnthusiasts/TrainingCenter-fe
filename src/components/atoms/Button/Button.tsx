import React, { FC } from 'react';
import { ButtonWrapper } from './ButtonStyle'

interface IButton {
  children: React.ReactNode
  radius?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  secondary?: boolean;
  play?: boolean;
}

const Button: FC<IButton> = ({ children, radius, onClick, secondary, play }) => {
  return (
    <ButtonWrapper type="button" play={ play } secondary={ secondary } radius={ radius } onClick={ onClick }>
      { children }
    </ButtonWrapper>
  );
}

export default Button;