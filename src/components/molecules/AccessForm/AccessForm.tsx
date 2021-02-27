import React, { FC, ReactElement } from 'react';
import AccessFormLink from '../AccessFormLink';
import { useForm, ValidationRules } from 'react-hook-form';
import { Form, ValidationError } from './styles';
import { RoutePaths } from '../../../routes';

interface IAccessForm {
  children: ReactElement[],
  onSubmit: (params: any) => Promise<void>,
  sideLinkTo: RoutePaths,
  sideLinkContent: string,
  inputFormProps: IInputFormProps[],
}

export interface IInputFormProps {
  registerRules: ValidationRules,
}

const AccessForm: FC<IAccessForm> = ({ children, onSubmit, sideLinkContent, sideLinkTo, inputFormProps }) => {

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
                           ref={ register({ ...inputFormProps[inputsCounter].registerRules }) }/>

            inputsCounter++;
          }
          return <>
            { Child }
            { errors[Child.props.name] &&
            <ValidationError key={ i + 1 }>Invalid field</ValidationError> }
          </>
        })
      }
      <AccessFormLink to={ sideLinkTo } content={ sideLinkContent }/>
    </Form>
  )
}

export default AccessForm;