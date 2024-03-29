import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Axios from 'axios' ;
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import Tabutilisateur from './Tabutilisateur';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function Modifutil() {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [domaine,setdomaine]=useState("");
    const [msg, setMsg] = useState('');
    const modifier = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/modifutil', {
             id:id,
             email:email,
             password:password,
             domaine:domaine 
         });
         setid("");
         setemail("");
     setpassword("");
     setdomaine("");
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
         <Button variant="outlined"  onClick={handleClickOpen}  style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}}>
           Modifier  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "530px"
         ,marginTop:"10px",width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
         <form onClick={modifier}>
           <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"25px"}}>Modifier un utilisateur</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
             <TextField 
               autoFocus
               margin="dense"
               id="id"
               label="id"
               type="text"
               fullWidth
               variant="outlined"
               value={id}
               onChange={(e) => setid(e.target.value)}
             />
             <TextField 
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="domaine"
            label="Domaine"
            type="text"
            fullWidth
            variant="outlined"
            value={domaine}
            onChange={(e) => setdomaine(e.target.value)}
          />
           </DialogContent>
           <DialogActions>
             <Button  style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}}>Modifier</Button>
           </DialogActions>
           </form>
         </Dialog>
        
       </div>
     );
   }
  






function Addutil() {
 const [open, setOpen] =useState(false);
 const [email,setemail]=useState("");
 const [password,setpassword]=useState("");
 const [domaine,setdomaine]=useState("");
 const [msg, setMsg] = useState('');
 const ajouter = async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/addutil', {
          email:email,
          password:password,
          domaine:domaine 
      });
     setemail("");
     setpassword("");
     setdomaine("");
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
      <Button variant="outlined"   style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}}onClick={handleClickOpen}>
        Ajouter  </Button>
      <Dialog open={open} onClose={handleClose}>
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "530px"
         ,marginTop:"10px",width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
      <form onClick={ajouter}>
        <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"25px"}} >Ajouter un Utilisateur</DialogTitle>
        <p>{msg}</p>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="domaine"
            label="Domaine"
            type="text"
            fullWidth
            variant="outlined"
            value={domaine}
            onChange={(e) => setdomaine(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}} >Ajouter</Button>
        </DialogActions>
        </form>
      </Dialog>
     
    </div>
  );
}
function Supputil() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/supputil', {
           id:id,
       });
      setid("");
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
       <Button variant="outlined"   style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}} onClick={handleClickOpen}>
         Supprimer  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "370px",marginTop:"10px",width:"3px" , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
       <form onClick={supprimer}>
         <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"25px"}}>Supprimer un utilisateur</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="id"
             label="id"
             type="text"
             fullWidth
             variant="outlined"
             value={id}
             onChange={(e) => setid(e.target.value)}
           />
         </DialogContent>
         <DialogActions>
           <Button  style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}}>Supprimer</Button>
         </DialogActions>
         </form>
       </Dialog>
      
     </div>
   );
 }

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "530px",marginTop:"10px",width:"3px" , backgroundColor:"#c72120", color:"white",height:"25px"}}  >X</Button>
          <DialogTitle  style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive" , fontWeight:"bold", fontSize:"25px"}}>Liste des utilisateurs</DialogTitle>
          <p id="parent-modal-description">
            <Tabutilisateur/>
          </p>
       <DialogActions>
       <Addutil/>
          <Supputil/>
          <Modifutil/>
       </DialogActions>
          
        </Box>
      </Modal>
    </div>
  );
}