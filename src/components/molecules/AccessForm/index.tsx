import React, { FC, createElement } from 'react';
import IAccessForm from '../../../__types__/IAccessForm';
import { useForm } from 'react-hook-form';
import { Form } from './styles';

const AccessForm:FC<IAccessForm> = ({ children, onSubmit }) => {

  const { register, handleSubmit, getValues } = useForm();

  const submitFunction = async () => {
    await onSubmit(getValues());
  }

  return (
    <Form onSubmit={ handleSubmit(submitFunction) }>
      {
        children.map((Child) => {
          if (Child.type === 'input') {
            Child = createElement('input', { ...Child.props, ref: register });
          }
          return Child
        })
      }
    </Form>
  )
}

export default AccessForm;