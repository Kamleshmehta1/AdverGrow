/* eslint-disable react/display-name */
import { Suspense } from 'react';
import LoadingScreen from './LoadingScreen';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
export default Loadable;
