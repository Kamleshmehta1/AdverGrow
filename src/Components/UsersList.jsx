import { Grid, Stack } from '@mui/material';
import MuiContainer from '../Layout/MuiContainer';
import HandleCard from './HandleCard';
import useFetchData from './useFetchData';
import { useNavigate } from 'react-router-dom';
import RHFButton from '../FormComponents/RHFButton';
import { PATHS } from '../routes/path';

function UsersList() {
  const navigate = useNavigate();
  const { data, isLoading } = useFetchData();
  console.log(isLoading, data);

  return (
    <MuiContainer maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Stack flexDirection="row" justifyContent="flex-end">
            <RHFButton
              title="Add User"
              fullWidth={false}
              onClick={() => navigate(PATHS.ADD_USER.fullPath)}
            />
          </Stack>
        </Grid>

        {(data || [])?.map((items, index) => {
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
              <HandleCard data={items} userIcon={userIcon} />
            </Grid>
          );
        })}
      </Grid>
    </MuiContainer>
  );
}

export default UsersList;
