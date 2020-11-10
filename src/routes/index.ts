import IRoute from '../__types__/IRoute';
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

const routes: IRoute[] = [
  {
    path: RoutePaths.HOME,
    exact: true,
    component: Home,
    data: {
      'title': 'Home'
    }
  },
  {
    path: RoutePaths.TRAININGS,
    exact: true,
    component: Trainings,
    data: {
      'title': 'Trainings'
    }
  },
  {
    path: RoutePaths.TRAINING,
    exact: true,
    component: Training,
    data: {
      'title': 'Training'
    }
  },
  {
    path: RoutePaths.ACCOUNT,
    exact: true,
    component: Account,
    data: {
      'title': 'Account'
    }
  },
  {
    path: RoutePaths.EDIT_ACCOUNT,
    exact: true,
    component: EditAccount,
    data: {
      'title': 'Account'
    }
  },
  {
    path: RoutePaths.PROFILE,
    exact: true,
    component: Profile,    
    data: {
      'title': 'Profile',
    }
  },
  {
    path: RoutePaths.REGISTRATION,
    exact: true,
    component: Registeration,
    data: {
      'title': 'Registration'
    }
  },
  {
    path: RoutePaths.ACHIEVEMENTS,
    exact: true,
    component: Achievements,
    data: {
      'title': 'Achievements'
    }
  },
  {
    path: RoutePaths.SETTINGS,
    exact: true,
    component: Settings,
    data: {
      'title': 'Settings'
    }
  },
  {
    path: RoutePaths.STATISTICS,
    exact: true,
    component: Statistics,
    data: {
      'title': 'Statistics'
    }
  },
  {
    path: '',
    exact: false,
    component: NotFound,
    data: {
      title: 'Page not found :('
    }
  },
];

export default routes;