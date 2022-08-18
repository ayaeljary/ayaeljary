import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect,useState } from 'react';
import Axios from 'axios';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Selectgreffier() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [nom, setnom] = useState([]);
  useEffect(() => {   
    Axios.get("http://localhost:5000/greffier").then((response) => {
      setnom(response.data); 
     
      console.log(response.data) ;   
    });
  },[nom]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m:0.5, width: 200 }} size='small'>
        <InputLabel id="demo-multiple-name-label"  ></InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput  />}
          MenuProps={MenuProps}

        >
          {nom.map((name) => (
            <MenuItem
              key={name.id}
              value={name.nom}
              style={getStyles(name, personName, theme)}
            >
              {name.nom}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}