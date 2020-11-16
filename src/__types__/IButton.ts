export interface IButton {
  children: React.ReactNode
  radius?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  secondary?: boolean;
  play?: boolean;
}