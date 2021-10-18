import { Grid, Paper } from '@mui/material';
import { HomeButton } from './HomeButton';
import { MainNavigation } from './MainNavigation';

export const AppHeader = () => (
  <Paper>
    <Grid container>
      <Grid item alignSelf="center">
        <HomeButton />
      </Grid>

      <Grid item container xs alignItems="center">
        <MainNavigation />
      </Grid>
    </Grid>
  </Paper>
);
