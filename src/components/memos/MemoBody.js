import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MemoInput from './components/MemoInput';
import { withProvider } from './store/Store';

const MemoBody = () => {
  return (
    <Box p={2} boxShadow={3}>
      <Grid container direction="column">
        <Grid item>
          <MemoInput />
        </Grid>
      </Grid>
    </Box>
  );
};

export default withProvider(MemoBody);