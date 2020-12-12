import { ReactNode } from 'react';
import { IHeaderNavigation } from './IHeaderNavigation';
import { RoutePaths } from '../routes'

export default interface MainTemplate {
  children: ReactNode,
  routePath: RoutePaths,
  buttons: IHeaderNavigation['buttons'],
  actions?: {
    leftBtnAction?:  (() => void) | undefined;
    rightBtnAction?:  (() => void) | undefined;
  },
  links?: {
    leftBtnLink?: string | undefined;
    rightBtnLink?: string | undefined;
  }
}