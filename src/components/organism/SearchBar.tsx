import { Close } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';
import { memo, useContext, useState } from 'react';
import { MoviesContext } from '../../context/moviesContext';
import { useDebounce } from '../../hooks/useDebounce';
import { ActionsEnum } from '../../utils/enums';

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | undefined;
  placeholder?: string | undefined;
  name?: string | undefined;
};

const SearchBar = ({ placeholder, name }: Props) => {
  const { dispatch } = useContext(MoviesContext);
  const [searchTxt, setSearchTxt] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e?.target?.value);
    /* dispatch({
      type: ActionsEnum.SET_SEARCH_TEXT,
      payload: { searchText: e?.target?.value },
    }); */
  };

  const resetChangeHandler = () => {
    setSearchTxt('');
    dispatch({
      type: ActionsEnum.SET_SEARCH_TEXT,
      payload: { searchText: '' },
    });
  };
  const debounce = useDebounce(() => {
    dispatch({
      type: ActionsEnum.SET_SEARCH_TEXT,
      payload: { searchText: searchTxt },
    });
  }, 500);
  return (
    <>
      <OutlinedInput
        hidden
        endAdornment={
          <Close
            sx={{ color: '#ffffff', cursor: 'pointer', fontSize: 24 }}
            onClick={resetChangeHandler}
          />
        }
        startAdornment={
          <SearchIcon
            sx={{ color: '#ffffff', cursor: 'pointer', fontSize: 24 }}
            onClick={debounce}
          />
        }
        onChange={handleChange}
        value={searchTxt}
        name={name}
        fullWidth
        placeholder={placeholder}
        sx={{ backgroundColor: '#1A2536', color: '#ffffff' }}
      />
    </>
  );
};

export default memo(SearchBar);
