import React, { FC } from 'react';
import ITrainingNote from '../../../__types__/ITrainingNote';
import P from '../../atoms/P'
import { Div, H2, Span } from './styles';
import { theme } from '../../../theme/mainTheme';

const TrainingNote: FC<ITrainingNote> = ({ title, text, date }) => {
  return (
    <Div>
      <H2>{ title }</H2>
      <P color={ theme.colors.secondary.color1 }>{ text }</P>
      <Span>{ date }</Span>
    </Div>
  )
}

export default TrainingNote;