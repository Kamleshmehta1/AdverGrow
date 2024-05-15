import { Navigate, useRoutes } from 'react-router-dom';
import { PATHS, ROOTS_PATH } from './path';
import { lazy } from 'react';

import Loadable from '../utils/RouteLazyLoading';
import RoutesLayout from '../Layout/RoutesLayout';

const Layout = Loadable(lazy(() => import('../Layout/Header')));
const AddUserForm = Loadable(lazy(() => import('../Components/AddUserForm')));
const UsersList = Loadable(lazy(() => import('../Components/UsersList')));

function Routes() {
  return useRoutes([
    {
      path: ROOTS_PATH,
      element: <Layout />,
      children: [
        {
          path: PATHS.USERS_LIST.path,
          element: (
            <RoutesLayout>
              <UsersList />,
            </RoutesLayout>
          ),
        },
        {
          path: PATHS.ADD_USER.path,
          element: (
            <RoutesLayout>
              <AddUserForm />,
            </RoutesLayout>
          ),
        },
        {
          path: '',
          element: <Navigate to={PATHS.USERS_LIST.path} replace />,
        },
      ],
    },
  ]);
}

export default Routes;
