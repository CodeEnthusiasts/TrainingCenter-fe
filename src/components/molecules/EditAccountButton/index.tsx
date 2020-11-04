import React, { FC } from 'react';
import Button from '../UniversalAccountButton';
import IEditAccountButton from '../../../__types__/IEditAccountButton';
import { Span, Div } from './styles';

const EditAccountButton: FC<IEditAccountButton> = ({ detail, value }) => 

  <Button>
    <Div>
      <Span>{ detail }</Span>
      <Span>{ value }</Span>
    </Div>
  </Button>

export default EditAccountButton;