import { Button, DialogContentText, Icon, Paper, Grid } from '@mui/material';
import { useDialogState } from '../AppDialog/AppDialog.context';

interface TaskProps {
  id: string;
  name: string;
  onDelete?: (id: string) => void;
  dataHook?: string;
}

export const TaskCard = ({ id, name, dataHook, onDelete }: TaskProps) => {
  const [, dialogApi] = useDialogState();

  const handleDelete = () => {
    dialogApi.showDialog({
      title: (
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Icon sx={{ display: 'block' }} color="error">
              error
            </Icon>
          </Grid>
          <Grid item>Delete {name}?</Grid>
        </Grid>
      ),
      content: (
        <>
          <DialogContentText>
            You're about to permanently delete this issue, its comments and
            attachments, and all of its data.
          </DialogContentText>
          <DialogContentText>
            If you're not sure, you can resolve or close this issue instead.
          </DialogContentText>
        </>
      ),
      actions: (
        <>
          <Button
            data-hook={`${dataHook}-dialog-delete-btn`}
            variant="contained"
            color="error"
            onClick={() => {
              dialogApi.closeDialog();
              onDelete && onDelete(id);
            }}
          >
            Delete
          </Button>
          <Button
            data-hook={`${dataHook}-dialog-cancel-btn`}
            variant="text"
            color="info"
            onClick={dialogApi.closeDialog}
          >
            Cancel
          </Button>
        </>
      ),
    });
  };

  return (
    <Paper data-hook={dataHook}>
      <Button onClick={handleDelete}>Delete</Button>
    </Paper>
  );
};
