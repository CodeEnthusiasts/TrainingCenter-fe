import React from 'react';
import GlobalStyle  from '../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../routes';
import { theme } from '../theme/mainTheme'

function Root() {
  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <Switch>
          { routes.map(route => <Route { ...route } />) }
        </Switch>
        <GlobalStyle/>
      </Router>
    </ThemeProvider>
  );
}

export default Root;
