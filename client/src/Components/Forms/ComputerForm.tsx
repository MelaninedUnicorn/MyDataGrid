import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { addComputer } from '../../Store/inventory/services';

function ComputerForm() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [brand, setBrand] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [keyboardLayout, setKeyboardLayout] = useState<'qwerty' | 'azerty'>('qwerty');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addComputer({ title, description, price, brand, year, keyboardLayout }).then(() => {
      setTitle('');
      setDescription('');
      setPrice(0);
      setBrand('');
      setYear('');
      setKeyboardLayout('azerty');
    });
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' }
      }}
      style={{ width: '35vw' }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={'h5'} align="center">
            Create a computer entry
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
          <TextField
            required
            fullWidth
            id="brand"
            label="Brand"
            variant="outlined"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="year"
            label="Year"
            variant="outlined"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="keyboard-layout-label">Keyboard Layout</InputLabel>
            <Select
              labelId="keyboard-layout-label"
              id="keyboard-layout"
              value={keyboardLayout}
              label="Keyboard Layout"
              onChange={(e) => setKeyboardLayout(e.target.value as 'qwerty' | 'azerty')}
            >
              <MenuItem value={'qwerty'}>QWERTY</MenuItem>
              <MenuItem value={'azerty'}>AZERTY</MenuItem>
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

export default ComputerForm;
