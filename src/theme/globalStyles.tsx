import { createGlobalStyle } from 'styled-components';

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
    color: ${GlobalTheme.textColor};
    height: 100vh;
    background: #1C1C1C;
  }
`;
 
export default GlobalStyle;