import { createContext, useReducer } from 'react';
import { IMovie } from '../models/Movie.model';
import { IUser } from '../models/User.model';
import { ActionsEnum } from '../utils/enums';

type Props = {
  children: React.ReactNode;
};

export interface IState {
  movies?: IMovie[] | undefined;
  user?: IUser | undefined;
  selectedMovie?: IMovie;
  searchText?: string;
  filteredList?: IMovie[] | undefined;
}

export interface IAction {
  type: ActionsEnum;
  payload: IState;
}

const initialState: IState = {
  movies: [] as IMovie[],
  user: {} as IUser,
  selectedMovie: {} as IMovie,
  searchText: '',
  filteredList: [] as IMovie[],
};

export const MoviesContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionsEnum.GET_MOVIES:
      return { ...state, movies: action.payload?.movies };
    case ActionsEnum.GET_USER:
      return { ...state, user: action.payload?.user };
    case ActionsEnum.SET_MOVIE:
      return { ...state, selectedMovie: action.payload?.selectedMovie };
    case ActionsEnum.RESET_SEARCH_TEXT:
      return { ...state, searchText: action.payload?.searchText };
    case ActionsEnum.SET_SEARCH_TEXT: {
      const filterResult = state?.movies?.filter(
        (movie) =>
          movie.Title.toLowerCase().includes(
            action.payload?.searchText!.toLowerCase()
          ) ||
          movie.Plot.toLowerCase().includes(
            action.payload?.searchText!.toLowerCase()
          )
      );
      return {
        ...state,
        searchText: action.payload?.searchText,
        filteredList: action.payload?.searchText?.length
          ? filterResult
          : state.movies,
      };
    }

    /*  case ActionsEnum.SET_FILTERED_LIST: {
      const filterResult = state?.movies?.filter(
        (movie) =>
          movie.Title.includes(state.searchText!) ||
          movie.Plot.includes(state.searchText!)
      );
      return { ...state, filteredList: filterResult };
    } */

    default:
      return state;
  }
};
export const MovieContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
