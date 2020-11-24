import IRoute from '../__types__/IRoute';
import Home from '../views/Home';
import Account from '../views/Account';
import EditAccount from '../views/EditAccount';
import Profile from '../views/Profile';
import Registeration from '../views/Registration';
import Achievements from '../views/Achievements';
import Settings from '../views/Settings';
import Statistics from '../views/Statistics';
import NotFound from '../views/404';
import Trainings from '../views/Trainings';
import TrainingExercises from '../views/TrainingExercises'
import TrainingBrakes from '../views/TrainingBrakes';
import TrainingNotes from '../views/TrainingNotes'
import Atlas from '../views/Atlas'
import TrainingHistory from '../views/TrainingHistory';
import SignIn from '../views/SignIn';

export enum RoutePaths {
  HOME = '/',
  TRAININGS = '/trainings',
  TRAINING = '/trainings/:trainingId',
  TRAINING_EXERCISES = '/trainings/:trainingId/exercises',
  TRAINING_BRAKES = '/trainings/:trainingId/brakes',
  TRAINING_NOTES = '/trainings/:trainingId/notes',
  TRAINING_HISTORY = '/traininghistory',
  ATLAS = '/atlas',
  ACCOUNT = '/account',
  EDIT_ACCOUNT = '/edit-account',
  PROFILE = '/profile',
  REGISTRATION = '/registration',
  ACHIEVEMENTS = '/achievements',
  SETTINGS = '/settings', 
  STATISTICS = '/statistics',
  SIGN_IN = '/sign-in',
}

const routes: IRoute[] = [
  {
    path: RoutePaths.TRAININGS,
    exact: true,
    component: Trainings,
    data: {
      'title': 'Trainings'
    }
  },
  {
    path: RoutePaths.ATLAS,
    exact: true,
    component: Atlas,
    data: {
      'title': 'Atlas'
    }
  },
  {
    path: RoutePaths.TRAINING_HISTORY,
    exact: true,
    component: TrainingHistory,
    data: {
      'title': 'Training history'
    }
  },
  {
    path: RoutePaths.TRAINING_EXERCISES,
    exact: true,
    component: TrainingExercises,
    data: {
      'title': 'Training'
    }
  },
  {
    path: RoutePaths.TRAINING_BRAKES,
    exact: true,
    component: TrainingBrakes,
    data: {
      'title': 'Training'
    }
  },
  {
    path: RoutePaths.TRAINING_NOTES,
    exact: true,
    component: TrainingNotes,
    data: {
      'title': 'Training'
    }
  },
  {
    path: RoutePaths.HOME,
    exact: true,
    component: Home,
    data: {
      'title': 'Home'
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
    path: RoutePaths.SIGN_IN,
    exact: true,
    component: SignIn,
    data: {
      'title': 'Sign in'
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