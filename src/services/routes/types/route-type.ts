import { RouteProps } from 'react-router-dom';
import RouteInfoType from './route-info-type';

export type isLoggedInType = boolean;

interface RouteType extends RouteInfoType, RouteProps {
  /**
   * isLogged : boolean value if user is logged in or not
   */
  isLoggedIn: isLoggedInType;
}

export default RouteType;
