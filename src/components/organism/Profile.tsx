import { Avatar, Grid, Link } from '@mui/material';
import { IUser } from '../../models/User.model';

type Props = {
  user: IUser | undefined;
};

const Profile = ({ user }: Props) => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6} sx={{ ml: 4, mt: 2 }}>
          <Link href="/discover">
            <Avatar
              alt={user?.name}
              src={user?.avatar}
              sx={{ width: 70, height: 70 }}
            />
          </Link>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6} mt={2} mb={2}>
          {user?.name}
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
