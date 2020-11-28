import React,{FC} from 'react';
import Icon from '../Icon'
import { InfoBtnWrapper } from './style'
import { IInfoButton } from '../../../__types__/IInfoButton'

const InfoButton:FC<IInfoButton> = ({children}) => {
  return(
    <InfoBtnWrapper>
      <Icon color="#000"className="fas fa-info-circle" />
      {children}
    </InfoBtnWrapper>
  )
}
export default InfoButton;

