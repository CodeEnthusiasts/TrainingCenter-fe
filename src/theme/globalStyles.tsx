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
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    color: ${GlobalTheme.textColor};
    background: ${theme.background100};
    background: -moz-linear-gradient(0deg, ${theme.background100} 0%, ${theme.background200} 100%);
    background: -webkit-linear-gradient(0deg, ${theme.background100} 0%, ${theme.background200} 100%);
    background: linear-gradient(0deg,${theme.background100} 0%, ${theme.background200} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr=${theme.background100},
      endColorstr=${theme.background200},
      GradientType=1
      );
  }
`;
 
export default GlobalStyle;