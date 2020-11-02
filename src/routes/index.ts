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

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/trainings',
    exact: true,
    component: Trainings,
  },
  {
    path: '/trainings/:trainingId',
    exact: true,
    component: Training,
  },
  {
    path: '/account',
    exact: true,
    component: Account,
  },
  {
    path: '/edit-account',
    exact: true,
    component: EditAccount,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,    
  },
  {
    path: '/registration',
    exact: true,
    component: Registeration,
  },
  {
    path: '/achievements',
    exact: true,
    component: Achievements,
  },
  {
    path: '/settings',
    exact: true,
    component: Settings,
  },
  {
    path: '/statistics',
    exact: true,
    component: Statistics,
  },
  {
    exact: false,
    component: NotFound,
  },
];

export default routes;