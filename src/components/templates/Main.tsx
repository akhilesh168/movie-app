import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Container, Divider, Grid } from '@mui/material';
import { memo } from 'react';
import useFetchApi from '../../hooks/useFetchApi';
import FilteredList from '../organism/FilteredList';
import NavBar from '../organism/NavBar';
import Profile from '../organism/Profile';
import SearchBar from '../organism/SearchBar';
const Main = () => {
  const { data } = useFetchApi();
  const { user } = { ...data };
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: '#273244',
          color: '#ffffff',
          maxHeight: 'calc(100vh - 35px)',
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ backgroundColor: '#1F2A3C' /* height: '100vh' */ }}
          >
            <Grid container mt={3}>
              <Grid item xs={8} md={8} mt={2}>
                <Profile user={user} />
                <Divider sx={{ bgcolor: '#394B61' }} />
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={12} md={8} mt={2}>
                <NavBar />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={8} md={8}>
                <SearchBar
                  placeholder="Title,  Movies,  Keyword"
                  name="search"
                />
              </Grid>
              <Grid item xs={2} md={1} mt={2}>
                <LightModeOutlinedIcon sx={{ fontSize: 30 }} />
              </Grid>
              <Grid item xs={2} md={1} mt={2}>
                <MoreVertOutlinedIcon sx={{ fontSize: 30 }} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              mt={3}
              sx={{
                maxHeight: '100vh',
                maxWidth: '100%',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Grid item xs={12} md={12}>
                <FilteredList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default memo(Main);
