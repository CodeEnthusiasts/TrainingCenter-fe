import React, { useState } from 'react';
import GlobalStyle  from '../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../routes';
import { theme } from '../theme/mainTheme';
import { IsUserLoggedContext, isUserLoggedDefault } from '../contexts/signedUser';
import ISignedUserContext from '../__types__/ISignedUserContext';
import NotFound from './404';


function Root() {

  const [isLogged, setIsLogged] = useState<boolean>(isUserLoggedDefault.isSigned);

  const providerValue: ISignedUserContext = {
    isSigned: isLogged,
    setIsSigned: setIsLogged,
  }

  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <IsUserLoggedContext.Provider value={ providerValue }>
          <Switch>
            { routes.map(({ component, signedInRequired, ...route }, i) => 
              <Route { ...route } 
                component={ (isLogged || !signedInRequired) ? component : NotFound } 
                key={ i } 
              />) 
            }
          </Switch>
        </IsUserLoggedContext.Provider>
        <GlobalStyle/>
      </Router>
    </ThemeProvider>
  );
}

export default Root;
