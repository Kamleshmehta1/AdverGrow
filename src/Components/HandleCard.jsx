import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import PersonImage from '../assets/recepie_img.jpg';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../routes/path';

function HandleCard({ data, userIcon, userData }) {
  const navigate = useNavigate();

  const { name, email, phone, id } = data;

  const handleEdit = useCallback(
    (data) => {
      navigate(PATHS.ADD_USER.fullPath, {
        state: { updateData: data, state: 'update', allUsersData: userData },
      });
    },
    [navigate, userData]
  );

  return (
    <Card
      sx={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'red' }}>{userIcon}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={email}
      />
      <CardMedia
        component="img"
        height="194"
        loading="lazy"
        image={PersonImage}
        alt="recepieImg"
        sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          letterSpacing={'1px'}
        >
          PHONE: {phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: 'auto' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          flex={1}
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <IconButton>
              <Stack justifyContent="center" alignItems="center">
                <ShareIcon />
                <Typography variant="caption">share</Typography>
              </Stack>
            </IconButton>
          </Stack>
          <Stack direction="row">
            <IconButton
              color="primary"
              onClick={() => handleEdit({ id, name, email, phone })}
            >
              <Stack justifyContent="center" alignItems="center">
                <EditIcon />
                <Typography variant="caption">Edit</Typography>
              </Stack>
            </IconButton>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
}

HandleCard.propTypes = {
  data: PropTypes.any,
  userIcon: PropTypes.string,
  id: PropTypes.number,
  userData: PropTypes.any,
};

export default HandleCard;
