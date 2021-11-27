import './App.css';

import * as React from 'react';

import { Grid, Typography } from '@mui/material';

import ComputerForm from './Components/Forms/ComputerForm';
import JewelryForm from './Components/Forms/JewelryForm';
import MyProductDataGrid from './Page/MyProductDataGrid';

function App() {
  return (
    <Grid container spacing={4} justifyContent={'center'}>
      <Grid item>
        <MyProductDataGrid />
      </Grid>
      <Grid item>
        <Typography variant={'h4'} align="center">
          Mugisha&quot;s Product Data Grid
        </Typography>
        <Typography align="center">
          Feel free to delete or add products to the inventory using the forms below!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid spacing={5} container>
          <Grid item xs={6}>
            <ComputerForm />
          </Grid>
          <Grid item xs={6}>
            <JewelryForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
