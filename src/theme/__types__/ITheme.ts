import { IColors } from './IColors';

export interface ITheme {
  colors: IColors,
  fontSize: {
    xs: string,
    s: string,
    m: string,
    l: string,
    xl: string,
  },
}