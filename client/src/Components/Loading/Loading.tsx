import * as React from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex' }} style={{ justifyContent: 'center', width: '100vw' }}>
      <Stack>
        <Skeleton variant="text" animation="wave" height={'15vh'} />
        <Skeleton variant="rectangular" animation="wave" width={'100vw'} height={'80vh'} />
      </Stack>
    </Box>
  );
}
