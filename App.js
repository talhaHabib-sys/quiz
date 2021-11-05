import './App.css'
import {AppBar} from '@material-ui/core';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
function App() {
  const [a,b]=useState([
    {
      question:'pakistan capital name',
      answer:'islamabad'
    },
    {
      question:'india capital',
      answer:'mumbai'
    }
  ])
  return (
    <div className="App">
     
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Quiz
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <FormControl component="fieldset">
      <FormLabel component="legend">{a[0].question}</FormLabel>
      <RadioGroup
        aria-label='abc'
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

    </div>
  );
}
export default App;
