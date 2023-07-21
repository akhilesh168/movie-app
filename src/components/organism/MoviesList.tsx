import { Grid } from '@mui/material';
import { memo, useId } from 'react';
import { IMovie } from '../../models/Movie.model';
import MediaCard from './MediaCard';

type Props = {
  movies: IMovie[] | undefined;
};

const MoviesList = ({ movies }: Props) => {
  const uniqueId = useId();
  return (
    <>
      <Grid container sx={{ maxHeight: '100vh', maxWidth: '100%' }}>
        {movies?.map((movie, id) => (
          <>
            <MediaCard movie={movie} key={`${uniqueId}${id}`} />
          </>
        ))}
      </Grid>
    </>
  );
};

export default memo(MoviesList);
