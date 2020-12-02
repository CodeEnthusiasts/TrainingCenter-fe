import { RouteProps } from 'react-router-dom';
import IRouteData from './IRouteData';

export default interface IRoute extends RouteProps {
  data: IRouteData,
  signedInRequired: boolean,
}