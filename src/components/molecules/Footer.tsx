import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';
import FastRewindRoundedIcon from '@mui/icons-material/FastRewindRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import BorderLinearProgress from '../atoms/CustomLinearProgress';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#394B61',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        maxHeight: '100vh',
        width: '100vw',
        /* marginTop: 'calc(1% + 10px)', */
        bottom: 0,
      }}
      component="footer"
    >
      <Grid container spacing={1}>
        <Grid item xs={1} md={1}>
          <IconButton aria-label="forward">
            <FastRewindRoundedIcon
              sx={{
                /* mt: { xs: 1, sm: 6, md: 1, lg: -1 }, */
                fontSize: { xs: 25, sm: 16, md: 25, lg: 30 },
                color: '#ffffff',
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={1} md={1}>
          <IconButton aria-label="rewind">
            <PlayCircleOutlineRoundedIcon
              sx={{
                /* mt: { xs: 1, sm: 6, md: 1, lg: -1 }, */
                fontSize: { xs: 25, sm: 16, md: 25, lg: 30 },
                color: '#ffffff',
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={1} md={1}>
          <IconButton aria-label="play">
            <FastForwardRoundedIcon
              sx={{
                /* mt: { xs: 1, sm: 6, md: 1, lg: -1 }, */
                fontSize: { xs: 25, sm: 16, md: 25, lg: 30 },
                color: '#ffffff',
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={4} md={3}>
          <Grid container>
            <Grid item xs={8} md={9}>
              <Typography
                variant="h5"
                sx={{
                  mt: { xs: 1, sm: 6, md: 1, lg: 1 },
                  fontSize: { xs: 12, sm: 12, md: 12, lg: 22 },
                  color: '#ffffff',
                }}
              >
                Ed Shareen .Shape of you
              </Typography>
            </Grid>
            <Grid item xs={4} md={3}>
              <Typography
                variant="h5"
                sx={{
                  mt: { xs: 1, sm: 6, md: 1, lg: 1 },
                  fontSize: { xs: 12, sm: 12, md: 12, lg: 22 },
                  color: '#ffffff',
                }}
              >
                1:06/ 4.23
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} md={6}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={3}
              md={1}
              sx={{ ml: { xs: 0.5, sm: 2, md: 2, lg: 24 } }}
            >
              <IconButton aria-label="volume up">
                <VolumeUpIcon
                  sx={{
                    mt: { xs: 0.2, sm: 2, md: 1, lg: -0.2 },
                    ml: { xs: 0.5, sm: 2, md: 2, lg: 3 },
                    fontSize: { xs: 25, sm: 16, md: 25, lg: 30 },
                    color: '#ffffff',
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={3} md={4}>
              <BorderLinearProgress
                sx={{
                  mt: { xs: 2, sm: 2, md: 1, lg: 2 },
                }}
                variant="determinate"
                value={60}
                color="primary"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
