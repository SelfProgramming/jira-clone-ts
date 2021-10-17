import React from 'react';
import './App.scss';
import {
  AppDialogProvider,
  useDialogState,
} from '../AppDialog/AppDialog.context';
import { AppDialog } from '../AppDialog/AppDialog';
import { Container, Grid } from '@mui/material';
import { TaskCard } from '../TaskCard/TaskCard';
import { nanoid } from 'nanoid';

const task = {
  id: nanoid(),
  name: 'Task 1',
  dataHook: 'task-card-1',
  onDelete() {
    console.log('Delete');
  },
};

export const App = () => (
  <AppDialogProvider>
    <Container>
      <Grid item xs={2}>
        <TaskCard {...task} />
      </Grid>
    </Container>
    <AppDialog />
  </AppDialogProvider>
);
