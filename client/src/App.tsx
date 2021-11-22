import './App.css';

import * as React from 'react';

import { Col, Grid, Row } from './Components/Grid/Grid';
import { useEffect, useState } from 'react';

import DataGrid from './Components/DataGrid/DataGrid';
import { Product } from '../../server/Models/product';
import { getInventory } from './Services/inventory.services';

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
    { field: 'id', headerName: 'ID'},
    { field: 'firstName', headerName: 'First name' },
    { field: 'lastName', headerName: 'Last name' },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      valueGetter: (params:any) =>
        `${params.firstName ? params.firstName :"" } ${params.lastName ? params.lastName :"" }`,
    },
  ];
  const data = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div className="App">
     <DataGrid  data={data} headers={headers} />
    </div>
  );
}


export default App;
