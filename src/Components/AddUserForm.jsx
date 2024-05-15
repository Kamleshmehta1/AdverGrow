import { useForm } from 'react-hook-form';
import FormProvider from '../FormComponents/FormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCallback } from 'react';
import { Stack } from '@mui/material';
import RHFTextField from '../FormComponents/RHFTextField';
import RHFButton from '../FormComponents/RHFButton';
import MuiContainer from '../Layout/MuiContainer';

function AddUserForm() {
  const schema = yup.object().shape({
    name: yup.string().email().required('Name is required !'),
    email: yup.string().required('Email is required !'),
    phone: yup.string().required('Phone is required !'),
  });

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: { email: '', name: '', phone: '' },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = useCallback(
    async (data) => {
      console.log(data);
      reset();
    },
    [reset]
  );

  return (
    <MuiContainer maxWidth="sm">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} flex={1} width="100%">
          <RHFTextField name="name" label="Name" type="text" />
          <RHFTextField name="email" label="Email" type="email" />
          <RHFTextField name="phone" label="Phone" type="tel" />
          <RHFButton title="Add user" type="submit" />
        </Stack>
      </FormProvider>
    </MuiContainer>
  );
}

export default AddUserForm;
