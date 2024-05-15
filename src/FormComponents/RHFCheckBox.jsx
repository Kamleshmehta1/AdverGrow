import { Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';

const RHFCheckbox = ({ name, disabled = false, ...other }) => {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              disabled={disabled}
              {...field}
              checked={Boolean(field?.value)}
            />
          )}
        />
      }
      {...other}
    />
  );
};

RHFCheckbox.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

export { RHFCheckbox };
