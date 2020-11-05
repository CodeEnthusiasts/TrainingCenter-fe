import { ReactNode } from "react";
import { RoutePaths } from '../routes';

export default interface INavigationButton {
  children: ReactNode,
  path: RoutePaths,
  location: string,
  isSpecial?: true,
}