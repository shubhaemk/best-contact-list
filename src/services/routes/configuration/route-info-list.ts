import { v4 as uuid4 } from 'uuid';

import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import NotFoundScreen from 'screens/NotFoundScreen';

import RouteInfoType from '../types/route-info-type';


export const RouteInfoList: RouteInfoType[] = [
  {
    id: uuid4(),
    routePath: '/',
    fallbackTo: '/home',
    name: 'login',
    isProtected: false,
    isExact: true,
    routeComponent: LoginScreen
  },
  {
    id: uuid4(),
    routePath: '/home',
    fallbackTo: '/',
    name: 'home',
    isProtected: true,
    isExact: false,
    routeComponent: HomeScreen
  },
  {
    id: uuid4(),
    routePath: "/*",
    fallbackTo: null,
    name: "error",
    isProtected: false,
    isExact: false,
    routeComponent: NotFoundScreen
  }
];
