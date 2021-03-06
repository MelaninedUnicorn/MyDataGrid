import { Button, Grid, Typography } from '@mui/material';
import { GetPage, InventoryState, Product } from '../../Store/inventory/types';
import React, { useState } from 'react';
import { addProductRequest, fetchInventoryRequest } from '../../Store/inventory/action';

import { AnyAction } from 'redux';
import { ApplicationState } from '../../Store';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.error,
  limit: inventory.limit,
  currentPage: inventory.currentPage,
  order: inventory.order,
  data: inventory.data,
  total: inventory.total,
  sortField: inventory.sortField
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addProductRequest: async (product: Product) => {
      dispatch(addProductRequest(product));
    },
    fetchInventoryRequest: (pageDetails: GetPage) => {
      dispatch(fetchInventoryRequest(pageDetails));
    }
  };
};

type ProductFormProps = InventoryState & ReturnType<typeof mapDispatchToProps>;

function ProductForm({
  limit,
  currentPage,
  sortField,
  order,
  fetchInventoryRequest,
  addProductRequest
}: ProductFormProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('computer');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addProductRequest({ title, description, price, category }).then(() => {
      fetchInventoryRequest({ limit, page: currentPage, sortField, order });
    });

    setTitle('');
    setDescription('');
    setPrice(0);
    setCategory('');
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 'auto', width: '40vw' }
      }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid container spacing={2} alignSelf="center">
        <Grid item xs={12}>
          <Typography variant={'h5'} align="center">
            Create a product entry
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="title"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="description"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="price"
            label="Price"
            variant="outlined"
            value={price}
            type="number"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-layout"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={'computer'}>Computer</MenuItem>
              <MenuItem value={'jewelry'}>Jewelry</MenuItem>
              <MenuItem value={'clothes'}>Clothes</MenuItem>
              <MenuItem value={'shoes'}>Shoes</MenuItem>
              <MenuItem value={'glasses'}>Glasses</MenuItem>
              <MenuItem value={'furniture'}>furniture</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type="submit">
            Add to inventory
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
