export interface IRadioButton {
  id: string,
  name: string,
  ref: () => void;
  label: string,
  labelDetails?: string
}