import { RouteProps } from 'react-router-dom';
import Main from '../views/Main';
import About from '../views/Trainings';
import NotFound from '../views/404';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/trainings',
    exact: true,
    component: About,
  },
  {
    exact: false,
    component: NotFound,
  }
];

export default routes;