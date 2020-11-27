import React, { FC, FormEvent } from 'react';
import IAccessForm from '../../../__types__/IAccessForm';
import { Form } from './styles';

const AccessForm:FC<IAccessForm> = ({ children, onSubmit }) => {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(); 
    // here token will be added to localStorage
  }

  return (
    <Form onSubmit={ handleSubmit }>
      { children }
    </Form>
  )
}

export default AccessForm;