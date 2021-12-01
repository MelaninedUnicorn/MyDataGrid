import './App.css';

import * as React from 'react';

import { Grid, Typography } from '@mui/material';

import MyProductDataGrid from './Sections/MyProductDataGrid';
import ProductForm from './Components/Forms/ProductForm';
import StaticDataGrid from './Sections/StaticDataGrid';

function App() {
  return (
    <Grid container spacing={4} justifyContent={'center'}>
      <Grid item xs={10}>
        <Typography variant={'h4'} align="center">
          Mugisha&apos;s Product Data Grid
        </Typography>
        <Typography align="center">
          Feel free to delete or add products to the inventory using the form below!
        </Typography>
      </Grid>
      <Grid item>
        <MyProductDataGrid />
      </Grid>

      <Grid item xs={12}>
        <ProductForm />
      </Grid>
      <Grid item xs={6}>
        <Typography variant={'h4'} align="center">
          Static Use
        </Typography>
        <Typography align="center">
          Here is an example of the data grid component being used statically
        </Typography>
        <Typography align="center">It&apos;s a list of public apis</Typography>
      </Grid>
      <Grid item>
        <StaticDataGrid />
      </Grid>
    </Grid>
  );
}

export default App;
