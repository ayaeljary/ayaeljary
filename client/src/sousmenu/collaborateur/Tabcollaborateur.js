import * as React from 'react';
import { useState,useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
const columns = [
{ field: 'id', headerName: 'Code Client', width: 150 },
{
  field: 'raison',
  headerName: 'raison',
  width: 150,
  editable: true,
},
{
  field: 'collaborateur',
  headerName: 'collaborateur',
  width: 150,
  editable: true,
},

{
    field: 'matricule',
    headerName: 'matricule',
    width: 150,
    editable: true,
  },
  {
    field: 'ville',
    headerName: 'ville',
    width: 150,
    editable: true,
  },
  {
    field: 'rue',
    headerName: 'rue',
    width: 150,
    editable: true,
  },
  {
    field: 'num',
    headerName: 'num',
    width: 150,
    editable: true,
  },
  

  {
    field: 'code_postale',
    headerName: 'code_postale',
    width: 150,
    editable: true,
  },
  {
    field: 'adress',
    headerName: 'adress',
    width: 150,
    editable: true,
  },
  {
    field: 'activite',
    headerName: 'activite',
    width: 150,
    editable: true,
  },
  {
    field: 'situation_fiscale',
    headerName: 'situation_fiscale',
    width: 150,
    editable: true,
  },
  {
    field: 'typeclient',
    headerName: 'typeclient',
    width: 150,
    editable: true,
  },
  {
    field: 'tel',
    headerName: 'tel',
    width: 150,
    editable: true,
  },
  {
    field: 'fax',
    headerName: 'fax',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },

];
export default function Tabcollaborateur() {
  const [gestion, setgestion] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/gestion").then((response) => {
    setgestion(response.data); 
    
    console.log(response.data) ;   
  });
},[gestion]);
  return (
    <div>
    
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
      rows={gestion}
        columns={columns}
      />
    </Box>
   
    </div>
  )}