import * as React from 'react';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex' }} style={{ justifyContent: 'center', width: '100vw' }}>
      <LinearProgress />
    </Box>
  );
}
