import { Grid, Stack } from '@mui/material';
import MuiContainer from '../Layout/MuiContainer';
import HandleCard from './HandleCard';
import useFetchData from './useFetchData';
import { useLocation, useNavigate } from 'react-router-dom';
import RHFButton from '../FormComponents/RHFButton';
import { PATHS } from '../routes/path';
import LoadingScreen from '../utils/LoadingScreen';
import { useMemo } from 'react';

function UsersList() {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, isLoading } = useFetchData();

  const userData = useMemo(() => {
    const locationData = location?.state?.data;

    if (location?.state?.state === 'add') {
      return locationData;
    } else if (location?.state?.state === 'update') {
      return locationData;
    } else {
      return data;
    }
  }, [data, location]);

  if (isLoading && userData) {
    return <LoadingScreen />;
  }

  return (
    <MuiContainer maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Stack flexDirection="row" justifyContent="flex-end">
            <RHFButton
              title="Add User"
              fullWidth={false}
              onClick={() =>
                navigate(PATHS.ADD_USER.fullPath, {
                  state: { addData: userData || [] },
                })
              }
            />
          </Stack>
        </Grid>

        {(userData || [])?.map?.((items, index) => {
          const { name } = items;
          const userIcon = name?.substring(0, 1)?.toUpperCase();

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              key={index}
              ele={items}
            >
              <HandleCard
                data={items}
                userIcon={userIcon}
                userData={userData}
              />
            </Grid>
          );
        })}
      </Grid>
    </MuiContainer>
  );
}

export default UsersList;
