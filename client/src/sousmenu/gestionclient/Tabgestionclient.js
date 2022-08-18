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
  /*{
    field: 'adress',
    headerName: 'adress',
    width: 150,
    editable: true,
  },*/
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
 /* {
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
  },*/

];
export default function Tabgestion() {
  const [users, setUsers] = useState([]);
  //const [page, setPage] = useState(0);
  //const [limit, setLimit] = useState(10);
  //const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getUsers();
  }, [users, keyword]);

  const getUsers = async () => {
    const response = await Axios.get(
      `http://localhost:5000/search?search_query=${keyword}`
    );
    setUsers(response.data.result);
   // setPage(response.data.page);
  //  setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };
  const searchData = (e) => {
    e.preventDefault();
    //setPage(0);
    setMsg("");
    setKeyword(query);
  };
  return (
    <div>
     <form onSubmit={searchData} >
     <TextField 
            autoFocus
            margin="dense"
            id="recherche"
            label="recherche"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
            sx={{ m:0.5, width: 300 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
     <Button type="submit" style={{width:"20px" }}> <SearchIcon  /></Button>
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
      rows={users}
        columns={columns}
      />
    </Box>
   </form>
    </div>
  )}