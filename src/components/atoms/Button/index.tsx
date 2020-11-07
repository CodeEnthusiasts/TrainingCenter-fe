import React,{FC} from 'react';
import { ButtonWrapper, LightBoxShadow} from './styles'
import { IButton } from '../../../__types__/IButton'

const Button:FC<IButton> = ({children, radius, onClick}) => {
  return (
    <ButtonWrapper radius={radius} onClick={onClick}>
      <LightBoxShadow radius={radius}/>
      {children}
    </ButtonWrapper>
  );
}

export default Button;