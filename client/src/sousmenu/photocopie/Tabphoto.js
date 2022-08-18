import { useState,useEffect } from "react";
import Axios from "axios";
/*import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';


const columns = [

{
  field: 'timbrefiscale',
  headerName: 'Timbre fiscale',
  width: 150,
  editable: true,
},
{
    field: 'tva',
    headerName: 'TVA',
    width: 150,
    editable: true,
  },

];
export default function Tabparamg() {


const [tva, settva] = useState([]);
const [timbrefiscale, settimbrefiscale] = useState([]);

useEffect(() => {   
  Axios.get("http://localhost:5000/paramgeneral").then((response) => {
    settimbrefiscale(response.data);
    settva(response.data); 
    console.log(response.data) ;   
  });
},[timbrefiscale]);


  return (
    <div>
        <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
        rows={timbrefiscale}
        columns={columns}
      />
    </Box>
    </div>
  );
}
*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6e5244",
    color: "white",
    height:"10px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    height:"10px"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(montant) {
  return { montant};
}


export default function CustomizedTables() {
  const [prixphoto, setprixphoto ]= useState([]);
  const [rows,setrows] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/photocopie").then((response) => {
    setrows(response.data);
    setprixphoto(response.data); 
    console.log(response.data) ;   
  });
},[rows]);
  return (
    <TableContainer style={{width:200, marginLeft:100, marginBottom:20}} component={Paper}>
      <Table sx={{ maxWidth:500, minWidth:100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{alignContent:"center"}} >Montant</StyledTableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell style={{alignContent:"center"}}>{row.prixphoto}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
