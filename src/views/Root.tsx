import React from 'react';
import GlobalStyle  from '../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { theme } from '../theme/mainTheme'

function Root() {
  return (
    <ThemeProvider theme={{theme}}>
      <Router>
        <GlobalStyle/>
      </Router>
    </ThemeProvider>
  );
}

export default Root;
