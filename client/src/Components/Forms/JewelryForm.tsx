import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addJewelry } from '../../Store/inventory/services';

function JewelryForm() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<string>('');
  const [material, setMaterial] = useState<string>('');

  function onSubmit(): void {
    addJewelry({ title, description, price, type, material }).then(() => {
      setTitle('');
      setDescription('');
      setPrice(0);
      setType('');
      setMaterial('');
    });
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' }
      }}
      onSubmit={onSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant={'h5'} align="center">
            Create a jewelry entry
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="title"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
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
          <TextField
            fullWidth
            required
            id="type"
            label="Type"
            variant="outlined"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="material"
            label="Material"
            variant="outlined"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
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

export default JewelryForm;
