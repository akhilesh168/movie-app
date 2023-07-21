import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { IState, MoviesContext } from '../context/moviesContext';
import { IError } from '../models/Error.model';
import { ActionsEnum } from '../utils/enums';

const useFetchApi = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<IError>({
    message: '',
  });
  const { state, dispatch } = useContext(MoviesContext);
  const [data, setData] = useState<IState | undefined>();

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const res = await Promise.all([
        axios.get('/data/movies.json'),
        axios.get('/data/user.json'),
      ]);
      setData({ movies: res[0].data, user: res[1].data });
      dispatch({
        type: ActionsEnum.GET_MOVIES,
        payload: { movies: res[0].data },
      });
      dispatch({ type: ActionsEnum.GET_USER, payload: { user: res[1].data } });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      setError({ message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { isLoading, error, data };
};

export default useFetchApi;
