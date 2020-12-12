export interface IHeaderNavigation {
  title: string;
  buttons: {
    leftBtn: string,
    rightBtn: string
  }
  actions?: {
    leftBtnAction?:  (() => void) | undefined;
    rightBtnAction?:  (() => void) | undefined;
  }
  links?: {
    leftBtnLink?: string | undefined;
    rightBtnLink?: string | undefined;
  }
}