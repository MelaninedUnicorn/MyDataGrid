import './App.css';

import * as React from 'react';

import { useEffect, useState } from 'react';

import ComputerForm from './Components/Forms/ComputerForm';
import DataGrid from './Components/DataGrid/DataGrid';
import { Grid } from '@mui/material';
import JewelryForm from './Components/Forms/JewelryForm';
import { Product } from '../../server/Models/product';
import { getInventory } from './Services/inventory.services';
import lodash from 'lodash';

function App() {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    getInventory().then(data => {
      console.log(data.inventory);
      setInventory(data.inventory)
    }

    ).catch(err => console.log(err));
    return
  }, []);

  const headers = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title' },
    { field: 'description', headerName: 'Description' },
    {
      field: 'price',
      headerName: 'Price'

    },
    {
      field: 'category',
      headerName: 'Category'

    },
    {
      field: 'specifications',
      headerName: 'Specifications',
      sortable: false,
      valueGetter: (product: Product) =>{
        let {id, title, description, price, category, ...specifications } = product;
        const { startCase } = lodash;
        
        let specsToString = "";
        for (const [key, value] of Object.entries(specifications)) {
          specsToString += `${startCase(key)}: ${value}\n `;
        }
        return specsToString;
      },
    },
  ];
 

  return (
    <Grid container>
      <Grid>
      <Grid item><JewelryForm /></Grid>
      <Grid item><ComputerForm /></Grid>
      </Grid>
      <Grid item xs={12} ><DataGrid data={inventory} headers={headers} /></Grid>

    </Grid>

  );
}


export default App;
