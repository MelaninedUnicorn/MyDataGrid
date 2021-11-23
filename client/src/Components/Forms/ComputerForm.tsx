import React, { useState } from 'react'

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { addComputer } from '../../Services/inventory.services';

function ComputerForm() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [brand, setBrand] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [keyboardLayout, setKeyboardLayout] = useState<"qwerty" | "azerty">("qwerty");

    function onSubmit(): void {
        addComputer({ title, description, price, brand, year, keyboardLayout });
    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <TextField id="title" label="Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
            <TextField id="description" label="Description" variant="outlined" value={description} onChange={e => setDescription(e.target.value)} />
            <TextField id="price" label="Price" variant="outlined" value={price} type="number" onChange={e => setPrice(parseFloat(e.target.value))} />
            <TextField id="brand" label="Brand" variant="outlined" value={brand} onChange={e => setBrand(e.target.value)} />
            <TextField id="year" label="Year" variant="outlined" value={year} onChange={e => setYear(e.target.value)} />
            <FormControl fullWidth>
                <InputLabel id="keyboard-layout-label">Keyboard Layout</InputLabel>
                <Select
                    labelId="keyboard-layout-label"
                    id="keyboard-layout"
                    value={keyboardLayout}
                    label="Keyboard Layout"
                    onChange={e => setKeyboardLayout(e.target.value as "qwerty"|"azerty")}
                >
                    <MenuItem value={"qwerty"}>QWERTY</MenuItem>
                    <MenuItem value={"azerty"}>AZERTY</MenuItem>

                </Select>
            </FormControl>
            <Button type="submit">Add to inventory</Button>
        </Box>
    )
}

export default ComputerForm;