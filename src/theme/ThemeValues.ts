import { IColors } from '../__types__/IColors'

export const colors:IColors = {
  primmary: {
    color1: '#11A8FD',
    color2: '#4ABEFF',
    color3: '#005EA3',
  },
  secondary: {
    color1: '#FFFFFF',  /*headers*/
    color2: '#A7A7A7',  /*Parahraphs*/
    color3: '#999999',
  },
  button: {
    primmary: {
     color1:'#1F1F1F',
     color2:'#333333',
     text: '#A7A7A7' 
    },
    secondary: {
      color1: '#005EA3',
      color2: '#11A8FD',
      text: '#E0E1E1'
    }, 
    shadow: {
      dark: ' rgba(0,0,0,0.85);',
      light: 'rgba(217,217,217,0.27)'
    }
  },
  background: {
    solid: '#34393E',
    gradient: {
      color1: '#17191C',
      color2: '#34393E'
    }
    
  }
}