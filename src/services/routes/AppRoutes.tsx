import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import { RouteInfoList } from './configuration/route-info-list';

import { isLoggedInType } from './types/route-type';

const AppRoutes = ({ isLoggedIn }: { isLoggedIn: isLoggedInType }) => {
  return (
    <Switch>
      {RouteInfoList.map((info) => {
        const { id, routePath, isProtected, fallbackTo, isExact, routeComponent: RouteComponent, ...rest }: any = info;

        const _routeRender = (props: RouteProps) => {
          return (isLoggedIn && isProtected) || (!isLoggedIn && !isProtected) || !fallbackTo ? (
            <RouteComponent {...props} />
          ) : (
            <Redirect
              to={{
                pathname: fallbackTo,
                state: { from: props.location },
              }}
            />
          );
        };

        return <Route key={id} path={routePath} exact={isExact} render={_routeRender} {...rest} />;
      })}
    </Switch>
  );
};

export default AppRoutes;
