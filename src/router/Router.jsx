import { useRoutes } from 'react-router-dom';

import { routesWithProps as getRoutesWithProps } from './routes';

export const RouterApp = (props) => {
  const routes = useRoutes(getRoutesWithProps(props));
  return <>{routes}</>;
};
