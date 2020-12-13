export interface IRadioButton {
  id: string,
  name: string,
  register: () => void;
  label: string,
  labelDetails?: string
}