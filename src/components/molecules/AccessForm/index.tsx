import React, { FC } from 'react';
import IAccessForm from '../../../__types__/IAccessForm';
import AccessFormLink from '../AccessFormLink';
import { useForm } from 'react-hook-form';
import { Form, ValidationError } from './styles';

const AccessForm:FC<IAccessForm> = ({ children, onSubmit, sideLinkContent, sideLinkTo, inputFormProps }) => {

  const { register, handleSubmit, getValues, errors } = useForm();

  const submitFunction = async () => {
    await onSubmit(getValues());
  }

  let inputsCounter = 0;

  return (
    <Form onSubmit={ handleSubmit(submitFunction) }>
      {
        children.map((Child, i) => {
          if (Child.type === 'input') {
            Child = <input key={ i } { ...Child.props }
                    ref={ register({ ...inputFormProps[inputsCounter].registerRules }) } />

            inputsCounter++;
          }
          return <>
            { Child }
            { errors[Child.props.name] && 
              <ValidationError key={ i + 1 }>Invalid field</ValidationError> }
          </>
        })
      }
      <AccessFormLink to={ sideLinkTo } content={ sideLinkContent } />
    </Form>
  )
}

export default AccessForm;