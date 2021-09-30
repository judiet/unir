import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      src="/static/bauernverbandLogo.jpg"
      // sx={{ width: 400, height: 100, ...sx }}
    />
  );
}
