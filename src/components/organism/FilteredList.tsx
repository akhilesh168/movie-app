import { memo, useContext } from 'react';
import { MoviesContext } from '../../context/moviesContext';
import MoviesList from './MoviesList';

const FilteredList = () => {
  const { state } = useContext(MoviesContext);
  return (
    <>
      {state?.searchText?.length ? (
        state?.filteredList?.length ? (
          <MoviesList movies={state?.filteredList} />
        ) : (
          <div>Result Not Found</div>
        )
      ) : (
        <MoviesList movies={state?.movies} />
      )}
    </>
  );
};

export default memo(FilteredList);
