import { createContext } from 'react';
import ISignedUserContext from '../__types__/ISignedUserContext';

export const isUserLoggedDefault: ISignedUserContext = {
  isSigned: localStorage.loggedUser,
  setIsSigned: () => {  },
}

export const IsUserLoggedContext = createContext<ISignedUserContext>(isUserLoggedDefault);