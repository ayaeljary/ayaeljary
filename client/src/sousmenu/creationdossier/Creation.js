import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Tabclient from './Tabclient';
import Tabdonneé from './Tabdonneé';
import Tabtache from './Tabtache';
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';
import { useState } from 'react';
import Tabreglement from './Tabreglement';
import MultipleSelect from './Select';
import { List } from '@mui/material';
import Selectgreffier from './Selectgreffier';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
//sous dossier
function Sousdossier() {
  const [open, setOpen] = React.useState(false);
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <Button variant="outlined" style={{color:"white",width:"200px",borderColor:"#1f4b77"}} onClick={handleClickOpen}>
       Sous Dossier</Button>
       <Dialog open={open}  maxWidth="lg" onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1000px",width:"3px"}} >X</Button>
        <table>
       
       <tr>
            <td>
              <label for="nom">Code Dossier:</label>
            </td>
            <td> <pre><select style={{width:"180px"}}></select>  <Button style={{width:"20px" }}>  <SearchIcon  /></Button>   <Button style={{width:"20px"}}>  <DeleteForeverIcon sx={{ color:"red"}} /> </Button>   <Button style={{width:"20px"}}>  <AddIcon sx={{ color:"green"}} /> </Button></pre> </td> 
          
            <td>
              <label for="nom">Date de creation :</label>
            </td>
            <td>
            
                <input type="date"></input>  
             
             </td>
            
        </tr>
        <tr>
          <td>
            <label for="nom"> Mission :</label>
          </td>
          <td colSpan={3}>
            <textarea cols={100} rows={3}></textarea>
          </td>
          
        </tr>
        <tr>
          <td>
            <label for="nom"> Emplacement:</label>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td><label for="nom"> Num Affaire :</label></td>
          <td>
           
                <input type="text"></input>
             </td>

           
        </tr>
        <tr>
          <td>
            <label for="nom"> Observation :</label>
          </td>
          <td colSpan={3}>
            <textarea cols={100} rows={3}></textarea>
          </td>  
          </tr>
      </table>
      <Button>Valider Dossier</Button>
     
       </Dialog>
      
     </div>
   );
 }

// collaborateur
function Collaborateur() {
  const [open, setOpen] = React.useState(false);
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <Button variant="outlined" style={{color:"white",width:"200px",borderColor:"#1f4b77"}} onClick={handleClickOpen}>
       Collaborateur</Button>
       <Dialog open={open}  maxWidth="lg" onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1000px",width:"3px"}} >X</Button>
        <table>
       
       <tr>
            <td>
              <label for="nom">Code collaborateur :</label>
            </td>
            <td> <select style={{width:"180px"}}> </select></td>
            <td>
              <label for="nom">Mode Réglement :</label>
            </td>
            <td>
 
             
              < pre> <input type="radio"/>  Mensuel   <input type="radio"/>  Sur dossier   </pre>
             
           
             </td>
            
        </tr>
        <tr>
          <td>
            <label for="nom"> Nom et Prenom :</label>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <label for="nom"> Part Collaborateur :</label>
          </td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>
            <label for="nom"> CIN :</label>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td><label for="nom"> Type Réglement :</label></td>
          <td>
          
                
            <pre> <input type="radio"/> Pourcentage <input type="radio"/>  Forfait</pre>
             
             
             </td>
        </tr>
        <tr>
          <td>
            <label for="nom"> Adress :</label>
          </td>
          <td>
            <fieldset style={{width :"200px"}}>
              <legend> Détail </legend>
              <table>
                <tr>
                  <td> <label for="nom"> ville:</label> </td>
                  <td> <input type="text"></input></td>
                </tr>
                <tr>
                  <td> <label for="nom"> Rue:</label> </td>
                  <td> <input type="text"></input></td>
                </tr>
                <tr>
                  <td> <label for="nom"> Numéro:</label> </td>
                  <td> <input type="text"></input></td>
                </tr>
                <tr>
                  <td> <label for="nom"> Code Postale:</label> </td>
                  <td> <input type="text"></input></td>
                </tr>
              </table>
            </fieldset>
          
          </td>
        </tr>
         
        <tr>
                  <td> <label for="nom"> Activité:</label> </td>
                  <td> <input type="text"></input></td>
          </tr>
          <tr>
                  <td> <label for="nom"> Tel:</label> </td>
                  <td> <input type="text"></input></td>
                </tr>
      </table>
      <Button>Valider Dossier</Button>
     
       </Dialog>
      
     </div>
   );
 }

 
     


//regement
function Suppreglement(){
  const [open, setOpen] = React.useState(false);
  const [montant,setmontant]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/suppreglement', {
           montant:montant,
       });
       setmontant("");
      
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
       <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
       Retirer Réglement</Button>
       <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
         <h3 style={{color:"red"}}> Retirer Réglement</h3>
         <p>{msg}</p>
         <form onClick={supprimer}>
      <table>
          <tr>
          <td>
             <label for="nom"> montant :</label> 
          </td>
          <td>
              <input type="number" value={montant} onChange={(e) => setmontant(e.target.value)} ></input>
          </td>
          </tr>
         </table>
         <Button> Retirer</Button>
         </form>
        </Dialog>
        </div>
        )  
}


function Ajouterreglement(){
  const [montant, setmontant] = useState("");
  const [type,settype]=useState("");
  const [baré,setbaré]=useState("");
  const [operation,setoperation]=useState("");
  const [banque,setbanque]=useState("");
  const [echeance,setecheance]=useState("");
  const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/adreglement', {
          montant:montant,
          type:type,
          baré:baré,
          operation:operation,
          banque:banque,
          echeance:echeance,
        });
       setmontant("");
       settype("");
       setbaré("");
       setoperation("");
       setbanque("");
       setecheance("");
      
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
  const [open, setOpen] = React.useState(false);
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
       Ajouter Réglement</Button>
       <Dialog open={open} maxWidth="xl" onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "450px",width:"3px"}} >X</Button>
         <h3 style={{color:"red"}}> Ajouter Réglement</h3>
         <p>{msg}</p>
         <form onClick={ajouter}>
         <table>
          <tr>
          <td>
             <label for="nom"> Montant :</label> 
          </td>
          <td>
              <input type="number"value={montant} onChange={(e) => setmontant(e.target.value)} ></input>
          </td>
          </tr>
          <tr>
          <td>
             <label for="nom"> type:</label> 
          </td>
          <td>
              <input type="text" value={type} onChange={(e) => settype(e.target.value)} ></input>
          </td>
          </tr>
          <tr>
          <td>
             <label for="nom"> Baré:</label> 
          </td>
          <td>
              <input type="text" value={baré} onChange={(e) => setbaré(e.target.value)} ></input>
          </td>
          </tr>
          <tr>
          <td>
             <label for="nom"> N°opertion:</label> 
          </td>
          <td>
           
              <input type="text"value={operation} onChange={(e) => setoperation(e.target.value)}  ></input>  
           
          
           </td>
         </tr>
         <tr>
          <td>
             <label for="nom"> Banque:</label> 
          </td>
          <td>
           
              <input type="text"value={banque} onChange={(e) => setbanque(e.target.value)}  ></input>  
           
          
           </td>
         </tr>
         
         <tr>
          <td>
             <label for="nom"> Echeance:</label> 
          </td>
          <td>
          <input type="text"value={echeance} onChange={(e) => setecheance(e.target.value)} ></input>
           </td>
         </tr>
        
       
         </table>
         <Button> Ajouter</Button>
         </form>
        </Dialog>
        </div>
        )  
}
function Réglement() {
  const [open, setOpen] = React.useState(false);
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <Button variant="outlined" style={{color:"white",width:"200px",borderColor:"#1f4b77"}} onClick={handleClickOpen}>
        Réglement</Button>
       <Dialog open={open}  maxWidth="lg" onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1000px",width:"3px"}} >X</Button>
        <table>
          <tr>
            <td>
              <label for="nom"> Honoraire Avocat:</label>
            </td>
            <td> <input type="text"></input></td>
            <td>
              <label for="nom"> Net à payer:</label>
            </td>
            <td> <input type="text"></input></td>
          </tr>
          <tr>
              <td><Button style={{width:"200px"}}><Ajouterreglement/></Button></td>
              <td> <Button style={{width:"200px"}} ><Suppreglement/> </Button></td>
          </tr>
      </table>
      <Tabreglement/>
     <table>
     <tr>
     <td>
              <label for="nom"> Total payé:</label>
            </td>
            <td> <input type="text"></input></td>
            <td>
              <label for="nom"> Reste à payé:</label>
            </td>
            <td> <input type="text"></input></td>
     </tr>
     </table>
       </Dialog>
      
     </div>
   );
 }

 
  
//tache
function Supptache() {
  const [open, setOpen] =useState(false);
  const [tache,settache]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/supptache', {
           tache:tache,
       });
       settache("");
      
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
      <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
      Retirer Tache</Button>
      <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
        <h3 style={{color:"red"}}> Retirer Tache</h3>
        <p>{msg}</p>
        <form onSubmit={supprimer}>
     <table>
         <tr>
         <td>
            <label for="nom"> tache :</label> 
         </td>
         <td>
             <input type="text" value={tache} onChange={(e) => settache(e.target.value)} ></input>
         </td>
         </tr>
        </table>
        <Button onClick={supprimer} > Retirer</Button>
        </form>
       </Dialog>
       </div>
       )
}
function Ajoutertache(){
    const [open, setOpen] = React.useState(false);
    const [tache,settache]=useState("");
    const [date_critique,setdatecritique]=useState("");
    const [date_rappel,setdaterappel]=useState("");

    const [personne_chargé,setpersonne]=useState("");
    const [resolu,setresolu]=useState("");
    
    const [date_audience,setdateaudience]=useState("");
    const [date_echeance,setdateecheance]=useState("");
    const [greffier,setgreffier]=useState("");
    const [course,setcourse]=useState("");
    const [service,setservice]=useState("");
    const [lieux,setlieux]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
    try {
         await Axios.post('http://localhost:5000/addtache', {
        tache:tache,    
         date_critique:date_critique,
        date_rappel:date_rappel,
        resolu:resolu,
        personne_chargé:personne_chargé,
        greffier:greffier,
        course:course,
        lieux:lieux,
        service:service,
        date_audience:date_audience,
        date_echeance:date_echeance,   
         });
        settache("");
        setdatecritique("");
        setdaterappel("");
        setresolu("");
        setpersonne("");
        setgreffier("");
        setcourse("");
        setlieux("");
        setservice("");
        setdateaudience("");
        setdateecheance("");
       
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
         <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Ajouter Tache</Button>
         <Dialog open={open} maxWidth="xl" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "450px",width:"3px"}} >X</Button>
           <h3 style={{color:"red"}}> Ajouter tache</h3>
           <form onClick={ajouter} >                 
           <DialogTitle>Ajouter une tache :</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           
              <table  >
                <tr>
                  <td style={{padding:"10px"}}><label>Tache:</label></td>
                  <td style={{padding:"10px"}}>      <TextField 
               autoFocus
               margin="dense"
               id="tache"        
               type="text"
               fullWidth
               variant="outlined"
               value={tache}
               onChange={(e) => settache(e.target.value)}   /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>   <label>Date de creaction</label></td>
                  <td style={{padding:"10px"}}>     <TextField 
               autoFocus
               margin="dense"
               id="ddate_critique"        
               type="date"
               fullWidth
               variant="outlined"
               value={date_critique}
               onChange={(e) => setdatecritique(e.target.value)}   /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}><label>Date Rappel :</label></td>
                  <td style={{padding:"10px"}}>      <TextField 
               autoFocus
               margin="dense"
               id="date_rappel"
               type="date"
               fullWidth
               variant="outlined"
               value={date_rappel}
               onChange={(e) => setdaterappel(e.target.value)}  /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> <label>Resolu : </label>  </td>
                  <td style={{padding:"10px"}}> <input type="radio" id='resolu' name='oui' value={resolu}
               onChange={(e) => setresolu("oui")}  /> Oui
        <input type="radio" id='resolu' name='non' value={resolu}
               onChange={(e) => setresolu("non")} />Non</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> <label>Personne chargée : </label> </td>
                  <td style={{padding:"10px"}}><input type="radio" id='personne_chargé' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("collaborateur")} /> Collaborateur
        <input type="radio" id='personne_chargé1s' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("greffier")}/>Greffier</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> Greffier :</td>
                  <td style={{padding:"10px"}}>   <TextField
               autoFocus
               margin="dense"
               id="greffier"
               label="greffier"
               type="text"
               fullWidth
               variant="outlined"
               value={greffier}
               onChange={(e) => setgreffier(e.target.value)}        /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> course :</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="course"
               label="course"
               type="text"
               fullWidth
               variant="outlined"
               value={course}
               onChange={(e) => setcourse(e.target.value)}        /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> lieux :</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="lieux"
               label="lieux"
               type="text"
               fullWidth
               variant="outlined"
               value={lieux}
               onChange={(e) => setlieux(e.target.value)}    /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>Services:</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="service"
               label="service"
               type="text"
               fullWidth
               variant="outlined"
               value={service}
               onChange={(e) => setservice(e.target.value)} /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>Date d'audiance:</td>
                  <td style={{padding:"10px"}}> <TextField 
               autoFocus
               margin="dense"
               id="date_audience"      
               type="date"
               fullWidth
               variant="outlined"
               value={date_audience}
               onChange={(e) => setdateaudience(e.target.value)}      /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> Date d'echeance:</td>
                  <td style={{padding:"10px"}}><TextField 
               autoFocus
               margin="dense"
               id="date_echeance"        
               type="date"
               fullWidth
               variant="outlined"
               value={date_echeance}
               onChange={(e) => setdateecheance(e.target.value)}     /></td>
                </tr>
                </table>      
           </DialogContent>       
           
             <Button >Ajouter</Button>
                    
          </form>
          
          </Dialog>
          </div>
          )  
}
function Tache() {
    const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
       <div>
         <Button variant="outlined" style={{color:"white",width:"200px",borderColor:"#1f4b77"}} onClick={handleClickOpen}>
         Tache(s)</Button>
         <Dialog open={open}  maxWidth="lg" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1000px",width:"3px"}} >X</Button>
          <table>
            <tr>
                <td><Button style={{width:"200px"}}><Ajoutertache/></Button></td>
                <td> <Button style={{width:"200px"}} ><Supptache/> </Button></td>
            </tr>
        </table>
        <Tabtache/>
       
         </Dialog>
        
       </div>
     );
   }

   
       
//client
function Suppclient(){
    const [open, setOpen] = React.useState(false);
    const [nom,setnom]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppdemandeur', {
             nom:nom,
         });
         setnom("");
        
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
         <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Retirer Demandeur</Button>
         <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
           <h3 style={{color:"red"}}> Retirer Demandeur</h3>
           <p>{msg}</p>
           <form onClick={supprimer}>
        <table>
            <tr>
            <td>
               <label for="nom"> Nom :</label> 
            </td>
            <td>
                <input type="text" value={nom} onChange={(e) => setnom(e.target.value)} ></input>
            </td>
            </tr>
           </table>
           <Button> Retirer</Button>
           </form>
          </Dialog>
          </div>
          )  
}
function Ajouterclient(){
  const [nom, setnom] = useState("");
  const [cin,setcin]=useState("");
  const [adress,setadress]=useState("");
  const [adress_designé,setadress_designé]=useState("");
  const [tel,settel]=useState("");
  const [fax,setfax]=useState("");
  const [email,setemail]=useState("");
   const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/addemandeur', {
          nom:nom,
            cin:cin,
            adress:adress,
            adress_designé:adress_designé,
            tel:tel,
            fax:fax,
            email:email,
           
        });
       setnom("");
       setcin("");
       setadress("");
       setadress_designé("");
       settel("");
       setfax("");
       setemail("");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
    const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
       <div>
         <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Ajouter Demandeur</Button>
         <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
           <h3 style={{color:"red"}}> Ajouter Demandeur</h3>
           <form  onClick={ajouter}>
           <p>{msg}</p>
        <table>
            <tr>
            <td>
               <label for="nom"> Nom :</label> 
            </td>
            <td>
                <input type="text"  value={nom} onChange={(e) => setnom(e.target.value)} ></input>
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> CIN :</label> 
            </td>
            <td>
                <input type="text" value={cin} onChange={(e) => setcin(e.target.value)} ></input>
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> Adress :</label> 
            </td>
            <td>
                <input type="text" value={adress} onChange={(e) => setadress(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> adress designé:</label> 
            </td>
            <td>
                <input type="text" value={adress_designé} onChange={(e) => setadress_designé(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> Tel :</label> 
            </td>
            <td>
                <input type="text" value={tel} onChange={(e) => settel(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> Fax :</label> 
            </td>
            <td>
                <input type="text" value={fax} onChange={(e) => setfax(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> Email :</label> 
            </td>
            <td>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} ></input>
            </td>
            </tr>
           </table>
           
           <Button> Ajouter</Button>
           </form>
          </Dialog>
          </div>
          )  
}
function Client() {
    const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
       <div>
         <Button variant="outlined" style={{color:"white",width:"200px",borderColor:"#1f4b77"}} onClick={handleClickOpen}>
         Client et Demandeur</Button>
         <Dialog open={open}  maxWidth="lg" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1000px",width:"3px"}} >X</Button>
        <table>
            <tr>
            <td>
               <label for="nom"> Code Client :</label> 
            </td>
            <td>
                <input type="text" ></input>
            </td>
            <td>
              <MultipleSelect/> 
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> Matricule Fiscale/CIN :</label> 
            </td>
            <td>
                <input type="text"></input>
            </td> 
            <td>
               <label for="nom"> Raison SocialeNom  :</label> 
            </td>
            <td>
              <input type="text"></input>
            </td>
            </tr>
            <tr></tr>
            <tr>
            <td>
               <label for="nom"> Situation Fiscale</label> 
            </td>
          
                <tr>
            <td>
               <pre>  <input type="radio"/> Non Assujetie <input type="radio"/>  Assujetie <input type="radio"/> Exonoré  </pre>
            </td>
                
            </tr>
           
           
           <td>
            <label> Activité  Contribuale:</label>
            </td> 
            <td>
                <input type="text"></input>
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom"> Type Client :</label> 
            </td>
            <td>
                <input type="text"></input>
            </td> 
            <td>
               <label for="nom"> Tel :</label> 
            </td>
            <td>
              <input type="text"></input>
            </td>
            </tr>
            <tr>
                <td><Button style={{width:"200px"}}><Ajouterclient/></Button></td>
                <td> <Button style={{width:"200px"}} ><Suppclient/> </Button></td>
            </tr>
        </table>
        <Tabclient/>
       
         </Dialog>
        
       </div>
     );
   }
//donnees
   function Ajouterdonneé(){
        const [open, setOpen] = React.useState(false);
        const [nom, setnom] = useState("");
        const [registre,setregistre]=useState("");
        const [adresse,setadresse]=useState("");
        const [adresse_designé,setadresse_designé]=useState("");
        const [avocat,setavocat]=useState("");
        const [adresse_avocat,setadresse_avocat]=useState("");
        const [msg, setMsg] = useState('');
        const ajouter = async (e) => {
          e.preventDefault();
          try {
              await Axios.post('http://localhost:5000/addadversaire', {
                  nom:nom,
                  registre: registre,
                  adresse:adresse,
                  adresse_designé:adresse_designé,
                  avocat: avocat,
                  adresse_avocat: adresse_avocat
              });
             setnom("");
             setregistre("");
             setadresse("");
             setadresse_designé("");
             setavocat("");
             setadresse_avocat("");
    
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
           <div>  <Button variant="outlined" style={{color:"blue",width:"200px",}} onClick={handleClickOpen}>
           Ajouter Adversaire</Button>
           <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
           <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
             <h3 style={{color:"red"}}> Ajouter Adversaire</h3>
             <form  onClick={ajouter}>
             <p>{msg}</p>
          <table>
              <tr>
              <td>
                 <label for="nom" > Nom :</label> 
              </td>
              <td>
                  <input type="text" value={nom} onChange={(e) => setnom(e.target.value)}></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> Registre de commerce :</label> 
              </td>
              <td>
                  <input type="text" value={registre} onChange={(e) => setregistre(e.target.value)}></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> Adresse :</label> 
              </td>
              <td>
                  <input type="text" value={adresse} onChange={(e) => setadresse(e.target.value)}></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> Adresse designé:</label> 
              </td>
              <td>
                  <input type="text" value={adresse_designé} onChange={(e) => setadresse_designé(e.target.value)}></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> avocat :</label> 
              </td>
              <td>
                  <input type="text" value={avocat} onChange={(e) => setavocat(e.target.value)} ></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> Adresse avocat :</label> 
              </td>
              <td>
                <input type="text" value={adresse_avocat} onChange={(e) => setadresse_avocat(e.target.value)}></input>
              </td>
              </tr>
             </table>
             <Button> Ajouter</Button>
             </form>
            </Dialog>
            </div>
            )  
 }
   function Suppdonneé(){
    const [open, setOpen] = React.useState(false);
    const [nom,setnom]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppadversaire', {
             nom:nom,
         });
         setnom("");
        
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
         <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Retirer Adversaire</Button>
         <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
           <h3 style={{color:"red"}}> Retirer Adversaire</h3>
           <p>{msg}</p>
           <form onClick={supprimer}>
        <table>
            <tr>
            <td>
               <label for="nom"> Nom :</label> 
            </td>
            <td>
                <input type="text" value={nom} onChange={(e) => setnom(e.target.value)}></input>
            </td>
            </tr>
           </table>
           <Button> Retirer</Button>
           </form>
          </Dialog>
          </div>
          )  
}
   function Données() {
    const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
       <div>
         <Button variant="outlined" style={{color:"white",width:"200px",borderColor:"#1f4b77"}} onClick={handleClickOpen}>
         Données Dossier</Button>
         <Dialog open={open}  maxWidth="lg"  onClose={handleClose}  >
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1000px",width:"3px"}} >X</Button>
        <table>
            <tr>
            <td>
               <label for="nom"> Type de dossier :</label> 
            </td>
            <td>
            <select style={{width:"180px"}} ></select>
            </td>
            <td>
               <label for="nom" > Code Dossier :</label> 
            </td>
            <td><pre> <input type="text" style={{width:"80px"}}></input>  /  <input type="text" style={{width:"50px"}}></input>   <input type="radio"></input>
                <label>Saisie Manuel </label> </pre> 
            </td>
            </tr>
            <tr>
            <td>
               <label for="nom">Mission :</label> 
            </td>
            <td colSpan={3} >
                <input type="text" style={{width:"900px"}}></input>
            </td> 
            </tr>
            <tr>
            <td>
               <label for="nom"> Emplacement: </label> 
            </td>
            <td>
            <select style={{width:"180px"}} ></select>
            </td>
            <tr>
            <td>
               <label for="nom"> Num Affaire :</label> 
           </td>
            <td>
            <input type="text"></input>
            </td>
            </tr>
            
           </tr> 
           <tr>
           <td>
               <label for="nom"> Lieux: </label> 
            </td>
            <td>
           <pre><input type="text" style={{width:"70px"}}></input>  <select style={{width:"150px"}} ></select></pre>
            </td>
            <td>
            <label for="nom"> Service : </label> 
            </td>
            <td>
                <input type="text"></input>
            </td>
           </tr>
            <tr>
            <td>
               <label for="nom"> Observation :</label> 
            </td>
            <td>
                <input type="text"></input>
            </td> 
            <td>
               <label for="nom"> Date Creation :</label> 
            </td>
            <td>
              <input type="date"></input>
            </td>
            </tr>
            <tr>
                <td><Button style={{width:"200px"}}> <Ajouterdonneé/></Button> </td>
               <td> <Button style={{width:"200px"}} ><Suppdonneé/>  </Button></td> 
            </tr>
        </table>
        <Tabdonneé/>
       
         </Dialog>
        
       </div>
     );
   }
//navbar 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Creation() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
 
  return (
    <div>
      <Button variant="outlined"  onClick={handleClickOpen}  style={{borderColor:"#1f4b77"}}>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} style={{background:"#1f4b77"}}>
        <Toolbar    >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
             style={{width:"10px"}}
            >
              <CloseIcon />
            </IconButton>
  
            <Button autoFocus color="inherit"  >
               <Client/> 
             
            </Button>
            <Button autoFocus color="inherit" >
              <Données/>
            </Button>
            <Button autoFocus color="inherit" >
            <Tache/>
            </Button>
            <Button autoFocus color="inherit" >
              <Réglement/>
            </Button>
           <Button autoFocus color="inherit" >
              <Collaborateur/>  
            </Button>
            <Button autoFocus color="inherit" >
              <Sousdossier/>
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>   
    </div>
  );
}

