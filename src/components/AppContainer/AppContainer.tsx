import React, { ReactNode } from 'react';
import { AppDialogProvider } from '../AppDialog/AppDialog.context';
import { AppDialog } from '../AppDialog/AppDialog';
import { BrowserRouter } from 'react-router-dom';

interface AppContainerProps {
  App: ReactNode;
}

export const AppContainer = ({ App }: AppContainerProps) => {
  return (
    <BrowserRouter>
      <AppDialogProvider>
        {App}

        <AppDialog />
      </AppDialogProvider>
    </BrowserRouter>
  );
};
