import React, { FC } from 'react';
import Button from '../UniversalAccountButton';
import { Div, Span } from './styles';

interface IEditAccountButton {
  detail: string,
  value: string,
}

const EditAccountButton: FC<IEditAccountButton> = ({ detail, value }) =>

  <Button>
    <Div>
      <Span>{ detail }</Span>
      <Span>{ value }</Span>
    </Div>
  </Button>

export default EditAccountButton;