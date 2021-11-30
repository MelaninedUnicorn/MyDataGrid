import './App.css';

import * as React from 'react';

import { Grid, Typography } from '@mui/material';

import MyProductDataGrid from './Page/MyProductDataGrid';
import ProductForm from './Components/Forms/ProductForm';

function App() {
  return (
    <Grid container spacing={4} justifyContent={'center'}>
      <Grid item>
        <MyProductDataGrid />
      </Grid>
      <Grid item xs={10}>
        <Typography variant={'h4'} align="center">
          Mugisha&apos;s Product Data Grid
        </Typography>
        <Typography align="center">
          Feel free to delete or add products to the inventory using the form below!
        </Typography>
      </Grid>
      <Grid item>
        <ProductForm />
      </Grid>
    </Grid>
  );
}

export default App;
