import { useForm } from 'react-hook-form';
import FormProvider from '../FormComponents/FormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import RHFTextField from '../FormComponents/RHFTextField';
import RHFButton from '../FormComponents/RHFButton';
import MuiContainer from '../Layout/MuiContainer';
import { RHFCheckbox } from '../FormComponents/RHFCheckBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../routes/path';

function AddUserForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const schema = yup.object().shape({
    name: yup.string().required('Name is required !'),
    email: yup.string().email().required('Email is required !'),
    phone: yup.string().required('Phone is required !'),
  });

  const updateUser = useMemo(
    () => location?.state?.updateData,
    [location?.state]
  );

  const addData = useMemo(
    () => location?.state?.addData,
    [location?.state?.addData]
  );

  const isUpdate = useMemo(
    () => location?.state?.state?.includes('update'),
    [location?.state?.state]
  );

  const allUsersData = useMemo(() => {
    return location?.state?.allUsersData;
  }, [location?.state?.allUsersData]);

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: updateUser?.email || 'k@g.com',
      name: updateUser?.name || 'ss',
      phone: updateUser?.phone || 'ss',
      isActive: updateUser?.isActive || false,
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = methods;

  const onAdd = useCallback(
    async (data) => {
      navigate(PATHS.USERS_LIST.fullPath, {
        state: {
          data: [{ ...data, id: Math.floor(Math.random() * 100) }, ...addData],
          state: 'add',
        },
      });
      reset();
    },
    [addData, navigate, reset]
  );

  const onUpdate = useCallback(
    async (data) => {
      const updatedData = (allUsersData || [])?.map((ele) => {
        if (updateUser?.id === ele?.id) {
          ele.name = data.name;
          ele.email = data.email;
          ele.phone = data.phone;
          ele.isActive = data.isActive;
        }
        return ele;
      });
      navigate(PATHS.USERS_LIST.fullPath, {
        state: { data: updatedData, state: 'update' },
      });
      reset();
    },
    [allUsersData, navigate, reset, updateUser?.id]
  );

  return (
    <MuiContainer maxWidth="sm">
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(isUpdate ? onUpdate : onAdd)}
      >
        <Stack spacing={2} flex={1} width="100%">
          <RHFTextField name="name" label="Name" type="text" />
          <RHFTextField name="email" label="Email" type="email" />
          <RHFTextField name="phone" label="Phone" type="tel" />
          <RHFCheckbox name="isActive" label="Mark as active user" />
          <RHFButton
            title={isUpdate ? 'Update user' : 'Add user'}
            type="submit"
          />
        </Stack>
      </FormProvider>
    </MuiContainer>
  );
}

export default AddUserForm;
