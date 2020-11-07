export interface IButton {
  children: React.ReactNode
  radius?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}