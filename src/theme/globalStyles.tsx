import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';

const GlobalTheme = {
  textColor: '#ffffff',
  fontSize: '62.5%'
}

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: ${GlobalTheme.fontSize};  
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    color: ${GlobalTheme.textColor};
    background: ${theme.colors.background.gradient.color1};
    background: -moz-linear-gradient(0deg, 
              ${theme.colors.background.gradient.color1} 0%, 
              ${theme.colors.background.gradient.color2} 100%);
    background: -webkit-linear-gradient(0deg, 
              ${theme.colors.background.gradient.color1} 0%, 
              ${theme.colors.background.gradient.color2} 100%);
    background: linear-gradient(0deg,
              ${theme.colors.background.gradient.color1} 0%, 
              ${theme.colors.background.gradient.color2} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr=${theme.colors.background.gradient.color1},
      endColorstr=${theme.colors.background.gradient.color2},
      GradientType=1
      );
  }
`;
 
export default GlobalStyle;