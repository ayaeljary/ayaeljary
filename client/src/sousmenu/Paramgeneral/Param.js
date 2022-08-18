import Button from '@mui/material/Button';
import Axios from 'axios' ;
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tabparamg from './Tabparam.js';



function Modifier() {
  //last id
  /*const [last_id,setlastid]= useState([]);
 
    const [tabid, settabid] = useState([]);
    
  useEffect(() => {   
  Axios.get("http://localhost:5000/getid").then((response) => {
  settabid(response.data);   
  });
  },[tabid]);
  //console.log(tabid.id);
  
  {
    tabid.map((e,index)=>
     { 
      if(index===(tabid.length-1)){
      setlastid(e.id[0]);
      return(e.id[0]);
     }
     }
    )
  } 
*/

  const[msg, setMsg]=useState("");
  const [timbrefiscale,settimbrefiscale]=useState("");
  const [tva,settva]=useState("");
  const [open, setOpen] =useState(false);
   const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/addparamg', {
             timbrefiscale:timbrefiscale,
              tva:tva,
         });
         settimbrefiscale("");
         settva("");
         
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }
   }
   /*const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppparamg', {
             id:1,
         });
        setid("");
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }
   }
    */
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
        , fontWeight:"bold", fontSize:"20px"}}>Modifier la valeur du timbre fiscale ou TVA</DialogTitle>
          <p>{msg}</p>
          <DialogContent>
          <TextField 
            autoFocus
            id="timbrefiscale"
            label="Timbre fiscale"
            type="number"
            width="100px"
            variant="outlined"
            marginRight="10px"
            value={timbrefiscale}
            onChange={(e) => settimbrefiscale(e.target.value)}
          />
          <TextField 
           autoFocus
           id="tva"
           label="TVA"
           type="number"
           width="100px"
           variant="outlined"
           marginLeft="10px"
           value={tva}
           onChange={(e) => settva(e.target.value)}
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
 

function Paramgeneral(){
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
          <Tabparamg/>
          <Modifier/>
          </DialogContent> 
        </Dialog>
      </div>
    );
          
  
};
export default Paramgeneral;