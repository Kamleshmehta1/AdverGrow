import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

function MuiContainer({ children, ...others }) {
  return (
    <Container sx={{ marginTop: '100px' }} {...others}>
      {children}
    </Container>
  );
}

MuiContainer.propTypes = {
  children: PropTypes.any,
};

export default MuiContainer;
