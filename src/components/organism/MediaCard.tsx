import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { memo, useContext, useId } from 'react';
import { MoviesContext } from '../../context/moviesContext';
import { IMovie } from '../../models/Movie.model';
import { ActionsEnum } from '../../utils/enums';
import DetailsCard from '../molecules/DetailsCard';

type Prop = {
  movie: IMovie;
};
function MediaCard({ movie }: Prop) {
  const { state, dispatch } = useContext(MoviesContext);
  const uniqueId = useId();
  const handleClick = (e: any, movie: IMovie) => {
    e.preventDefault();
    dispatch({
      type: ActionsEnum.SET_MOVIE,
      payload: { selectedMovie: movie },
    });
  };

  return (
    <>
      {state.selectedMovie?.Title === movie.Title ? (
        <Grid
          item
          xs={12}
          md={11}
          key={`${movie.Title}${movie.Type}${uniqueId}`}
        >
          <Box sx={{ ml: 1, display: 'flex', flexDirection: 'column' }}>
            <DetailsCard movie={state.selectedMovie} />
          </Box>
        </Grid>
      ) : null}
      <Grid
        item
        xs={5}
        md={2}
        m={1}
        key={`${movie.Title}${movie.imdbID}${uniqueId}`}
      >
        <Card
          variant="outlined"
          sx={{
            backgroundColor: '#394B61',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxWidth: '300px',
          }}
        >
          <CardActionArea onClick={(e) => handleClick(e, movie)}>
            <Box sx={{ p: 1 }}>
              <CardMedia
                sx={{
                  width: '300',
                  maxHeight: '300',
                }}
                image={movie.Poster}
                component="img"
                height="300"
                alt={movie.Title}
              />
            </Box>
            <CardContent>
              <Typography
                variant="body2"
                color="#D4D7DD"
                alignContent={'center'}
                justifyContent={'center'}
              >
                {movie.Title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ mt: '1' }}>
              <IconButton size="small" sx={{ color: '#D4D7DD' }}>
                <PlayCircleOutlineIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#D4D7DD' }}>
                <AddCircleOutlineIcon />
              </IconButton>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default memo(MediaCard);
