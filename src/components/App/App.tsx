import React from 'react';
import { Grid } from '@mui/material';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { AppHeader } from '../AppHeader/AppHeader';
import { YourWorkPage } from '../../pages/YourWorkPage/YourWorkPage';

export const App = () => (
  <Grid container>
    <Grid item xs={12}>
      <AppHeader />
    </Grid>

    <Grid item container>
      <Switch>
        <Route exact path="/">
          <Redirect to="/jira/your-work" />
        </Route>
        <Route exact path="/jira/your-work">
          <YourWorkPage />
        </Route>
      </Switch>
    </Grid>
  </Grid>
);
