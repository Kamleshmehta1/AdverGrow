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

function HandleCard({ data, userIcon }) {
  const { username, email, phone } = data;

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
        title={username}
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
            <IconButton color="primary" onClick={() => {}}>
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
};

export default HandleCard;
