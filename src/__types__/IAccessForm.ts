import { ReactElement } from "react";

export default interface IAccessForm {
  children: ReactElement[],
  onSubmit: (params: any) => Promise<void>,
}