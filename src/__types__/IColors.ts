export interface IColors {
  primmary: IBasicColors,
  secondary: IBasicColors,
  button: IButtonColors,
  background: IBackgroundColors,
  card: ICard
}

interface IBackgroundColors {
  solid: string,
  gradient: {
    color1: string,
    color2: string,
  }
}
interface ICard {
  color1: string,
  color2: string,
}
interface IBasicColors {
  color1: string,
  color2: string,
  color3: string,
}

interface IButtonColors {
  primmary: {
    color1: string,
    color2: string,
    text: string,
  },
  secondary: {
    color1: string,
    color2: string,
    text: string,
  },
  shadow: {
    dark: string
    light: string
  },
}