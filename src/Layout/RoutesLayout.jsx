import { Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

function RoutesLayout({ children }) {
  return (
    <>
      <Toolbar />
      {children}
    </>
  );
}

RoutesLayout.propTypes = {
  children: PropTypes.any,
};

export default RoutesLayout;
