import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { AppDialogContext } from './AppDialog.context';

export const AppDialog = () => (
  <AppDialogContext.Consumer>
    {([dialog, dialogApi]) => (
      <Dialog
        data-hook="app-dialog"
        open={dialog.isOpen}
        onClose={dialogApi.closeDialog}
      >
        {dialog.title && <DialogTitle>{dialog.title}</DialogTitle>}
        {dialog.content && <DialogContent>{dialog.content}</DialogContent>}
        {dialog.actions && <DialogActions>{dialog.actions}</DialogActions>}
      </Dialog>
    )}
  </AppDialogContext.Consumer>
);
