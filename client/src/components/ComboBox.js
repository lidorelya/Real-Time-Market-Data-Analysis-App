import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/core';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    top: theme.spacing(0),
    //bottom: theme.spacing(2),
    //right: theme.spacing(2),
    left: theme.spacing(70),
  },
}));

export default function ComboBox() {
  const classes = useStyles();

  // const [value, setValue] = React.useState(top100Films[3]);
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState('');

  const assetsList = useSelector((state) => state['AssetsList'])
  
  return (
    <div>
    {/* <Stack sx={{ height: 55, margin: 'auto'}} style={{ height: "400px", width: "400px"}}> */}
      <Autocomplete
        className={classes.speedDial}
        style={{ width: "400px"}}
        //sx={{ width: 220 }}
        componentsProps={{
          paper: {
            sx: {
              width: "700px",
              //height: "800px"
            }
          }
        }}
        disablePortal
        id="combo-box-demo"
        options={assetsList}
        getOptionLabel={(assetsList) => `${assetsList.SecurityID} ${"|"} ${assetsList.NameHebrew} ${"|"} ${assetsList.MarketID}`}
        renderInput={(params) => <TextField {...params} label="Search" variant="outlined" size="small" />}

        //value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if(newValue != null){
            // -------------- THE ASSET PICKED ----------------
            console.log(newValue.SecurityID)
          }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}

        noOptionsText={"No search results were found"}
      />
    {/* </Stack> */}
   </div>
  );
};