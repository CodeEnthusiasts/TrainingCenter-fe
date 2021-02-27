import React, { FC } from 'react';
import Icon from '../Icon/Icon'
import { InfoBtnWrapper } from './InfoButtonStyle'

interface IInfoButton {
  children?: React.ReactNode;
}

const InfoButton: FC<IInfoButton> = ({ children }) => {
  return (
    <InfoBtnWrapper>
      <Icon color="#000" className="fas fa-info-circle"/>
      { children }
    </InfoBtnWrapper>
  )
}
export default InfoButton;

