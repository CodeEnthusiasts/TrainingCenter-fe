import React, {FC} from 'react'
import { IRadioButton } from '../../../__types__/IRadioButton'
import { 
  RadioWrapper,
  RadioInput,
  StyledRadioButton,
  Label,
  LabelDetails
} from './style'


const RadioButton:FC<IRadioButton> = ({id, name, register, label, labelDetails}) => {
  return (
    <RadioWrapper htmlFor={id}>
      <RadioInput 
        id={id} 
        ref={register}
        type="radio" 
        name={name} 
        value={id} 
       />
      <StyledRadioButton /> 
      <Label>
        {label}
        {labelDetails && <LabelDetails>
          {labelDetails}
        </LabelDetails>}
      </Label>

  </RadioWrapper>     
  )
}

export default RadioButton;
