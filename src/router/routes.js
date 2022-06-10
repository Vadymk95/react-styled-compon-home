import HomePage from '../pages/HomePage';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

export const routesWithProps = (props) => [
  {
    path: '/',
    element: <HomePage countries={props.countries} setCountries={props.setCountries}/>,
  },
  {
    path: '/country/:name',
    element: <Details />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];