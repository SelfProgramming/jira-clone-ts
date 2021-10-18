import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

export const HomeButton = () => {
  const history = useHistory();

  function handleHomeClick() {
    history.push('/');
  }

  return (
    <Button size="large" onClick={handleHomeClick}>
      Jira Clone Software
    </Button>
  );
};
