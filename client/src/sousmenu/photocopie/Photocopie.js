
import Button from '@mui/material/Button';
import Axios from 'axios' ;
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tabphoto from './Tabphoto.js';
function Modifier() {
  const[msg, setMsg]=useState("");
  const [prixphoto,setprixphoto]=useState("");
  const [open, setOpen] =useState(false);
   const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/adphoto', {
            prixphoto:prixphoto,
         });
         setprixphoto("");
         
         
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }
   }
   
   
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"150px"}} onClick={handleClickOpen}>
          Modifier</Button>
        <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "455px",width:"3px", marginTop:"1px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
        <form onClick={ajouter}>
          <DialogTitle style={{color:'#6e5244' , marginLeft:"30px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"20px"}}>Modifier la valeur du montant</DialogTitle>
          <p>{msg}</p>
          <DialogContent>
          <TextField 
            autoFocus
            id="montant"
            label="montant"
            type="number"
            width="100px"
            variant="outlined"
            marginRight="10px"
            value={prixphoto}
            onChange={(e) => setprixphoto(e.target.value)}
          />
         
          </DialogContent>
          <DialogActions>
          <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"150px"}}>Modifier</Button>
          </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
 

function Photocopie(){
    const [open, setOpen] =useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    

    return(
        <div>
        <Button variant="outlined"   style={{borderColor:" #1f4b77"}}  onClick={handleOpen}>
           </Button>
        <Dialog style={{width:550, marginLeft:430}} open={open} onClose={handleClose}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "415px",width:"3px", marginTop:"1px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
        <DialogTitle style={{color:'#6e5244' , marginLeft:"80px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"20px"}} >Mise à jour des Paramètres</DialogTitle>
          <DialogContent>
          <Tabphoto/>
          <Modifier/>
          </DialogContent> 
        </Dialog>
      </div>
    );
          
  
};
export default Photocopie;