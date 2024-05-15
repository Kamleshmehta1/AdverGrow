import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function LazyLoadStyles({ children }) {
  return (
    <Box
      sx={{
        flex: 1,
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}

LazyLoadStyles.propTypes = {
  children: PropTypes.any,
};

export default LazyLoadStyles;
