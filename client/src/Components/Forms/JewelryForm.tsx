import React, { useState } from 'react'

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { addJewelry } from '../../Services/inventory.services';

function JewelryForm() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [type, setType] = useState<string>("");
    const [material, setMaterial] = useState<string>("");

    function onSubmit(): void {
        addJewelry({ title, description, price, type, material });
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
            <TextField id="type" label="Type" variant="outlined" value={type} onChange={e => setType(e.target.value)} />
            <TextField id="material" label="Material" variant="outlined" value={material} onChange={e => setMaterial(e.target.value)} />
            <Button type="submit">Add to inventory</Button>
        </Box>
    )
}

export default JewelryForm;
