import { Box } from '@mui/material';
import { memo } from 'react';
import Footer from '../molecules/Footer';
import Main from '../templates/Main';
//import { MovieContext} from '../../context/moviesContext';

const Home = () => {
  return (
    <>
      <Box>
        <Main />
        <Footer />
      </Box>
    </>
  );
};

export default memo(Home);
