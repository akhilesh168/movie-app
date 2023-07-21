import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { IMovie } from '../../models/Movie.model';
import BorderLinearProgress from '../atoms/CustomLinearProgress';

type Props = {
  movie?: IMovie;
};
const DetailsCard = ({ movie }: Props) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#394B61',
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: { xs: '100vw', lg: '1080px' },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: { xs: 250, lg: 250 }, padding: 2, height: 250 }}
        image={movie?.Poster}
        alt={movie?.Title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" color="#D4D7DD">
            {movie?.Title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '50%' }}>
              <BorderLinearProgress
                variant="determinate"
                value={Number(movie?.Metascore)}
                color="primary"
                sx={{ maxWidth: '260px' }}
              />
            </Box>
            <Box sx={{ minWidth: 20, ml: 2 }}>
              <Typography variant="h6" color="#D4D7DD">
                {movie?.imdbRating}
              </Typography>
            </Box>
          </Box>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                Year:
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                {movie?.Year}
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                Running Time:
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                {movie?.Runtime}
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                Directed By:
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                {movie?.Director}
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                Language:
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                {movie?.Language}
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="subtitle1" color="#D4D7DD" component="div">
                {movie?.Plot}
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button
                variant="contained"
                size="medium"
                sx={{ bgcolor: '#00E0FF', color: '#000000' }}
              >
                Play Movie
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                variant="outlined"
                size="medium"
                sx={{ color: '#00E0FF' }}
              >
                Watch Trailer
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous"></IconButton>
          <IconButton aria-label="play/pause"></IconButton>
          <IconButton aria-label="next"></IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default DetailsCard;
