import * as React from 'react';

import Button from '@mui/material/Button';
import Axios from 'axios' ;
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from "react";
import Tabtribunaux from './Tabtribunaux';




export default function NestedModal() {
  const [open, setOpen] =useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}></Button>
        <Dialog fullScreen open={open} onClose={handleClose} maxWidth="lg" style={{backgroundColor:"#CCF9F3"}}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1290px",width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
          <DialogTitle style={{color:'#6e5244' , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"30px"}} >
            Liste des Tribunaux et administration
            </DialogTitle>
      
         <Tabtribunaux/>
      
       </Dialog>
    </div>
    
  );
}
