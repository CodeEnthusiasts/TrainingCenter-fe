import { RouteProps } from 'react-router-dom';
import Home from '../views/Home';
import Trainings from '../views/Trainings';
import Training from '../views/Training';
import Account from '../views/Account';
import EditAccount from '../views/EditAccount';
import Profile from '../views/Profile';
import Registeration from '../views/Registration';
import Achievements from '../views/Achievements';
import Settings from '../views/Settings';
import Statistics from '../views/Statistics';
import NotFound from '../views/404';

export enum RoutePaths {
  HOME = '/',
  TRAININGS = '/trainings',
  TRAINING = '/trainings/:trainingId',
  ACCOUNT = '/account',
  EDIT_ACCOUNT = '/edit-account',
  PROFILE = '/profile',
  REGISTRATION = '/registration',
  ACHIEVEMENTS = '/achievements',
  SETTINGS = '/settings',
  STATISTICS = '/statistics',
}

const routes: RouteProps[] = [
  {
    path: RoutePaths.HOME,
    exact: true,
    component: Home,
  },
  {
    path: RoutePaths.TRAININGS,
    exact: true,
    component: Trainings,
  },
  {
    path: RoutePaths.TRAINING,
    exact: true,
    component: Training,
  },
  {
    path: RoutePaths.ACCOUNT,
    exact: true,
    component: Account,
  },
  {
    path: RoutePaths.EDIT_ACCOUNT,
    exact: true,
    component: EditAccount,
  },
  {
    path: RoutePaths.PROFILE,
    exact: true,
    component: Profile,    
  },
  {
    path: RoutePaths.REGISTRATION,
    exact: true,
    component: Registeration,
  },
  {
    path: RoutePaths.ACHIEVEMENTS,
    exact: true,
    component: Achievements,
  },
  {
    path: RoutePaths.SETTINGS,
    exact: true,
    component: Settings,
  },
  {
    path: RoutePaths.STATISTICS,
    exact: true,
    component: Statistics,
  },
  {
    exact: false,
    component: NotFound,
  },
];

export default routes;