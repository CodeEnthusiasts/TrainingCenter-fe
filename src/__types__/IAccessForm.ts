import { ReactElement } from "react";
import IInputFormProps from './IInputFormProps';
import { RoutePaths } from "../routes";

export default interface IAccessForm {
  children: ReactElement[],
  onSubmit: (params: any) => Promise<void>,
  sideLinkTo: RoutePaths,
  sideLinkContent: string,
  inputFormProps:IInputFormProps[],
}