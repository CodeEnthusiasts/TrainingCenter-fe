// import { AxiosResponse } from "axios";
import { FormEvent, ReactNode, ReactElement } from "react";
// import IRegistrationParams from './IRegistrationParams';
// import ISignInParams from './ISignInParams';

export default interface IAccessForm {
  children: ReactElement[],
  onSubmit: () => Promise<void>,
  // submitOperation: (params: IRegistrationParams | ISignInParams) => Promise<AxiosResponse>,
}