// import { AxiosResponse } from "axios";
import { ReactElement } from "react";
// import IRegistrationParams from './IRegistrationParams';
// import ISignInParams from './ISignInParams';

export default interface IAccessForm {
  children: ReactElement[],
  onSubmit: () => Promise<void>,
}