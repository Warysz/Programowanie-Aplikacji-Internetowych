import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from "@mui/icons-material/Search";


export function SearchBar({setRecipes}) {
    const[query, setQuery] = useState("chicken");
    async function fetchRecipes() {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=ed380c29&app_key=fcb2a8ef3af10bcc9e249f1987d72e64`);
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
        }

function handleChange(event) {
    setQuery(event.target.value);
}

useEffect(() => {
    fetchRecipes();
},[] );

  return (
    <>
     <TextField fullWidth
        InputProps={{
          endAdornment: ( 
            <InputAdornment>
              <IconButton >
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          ),
        }}   
        onChange={handleChange} 
        onClick={fetchRecipes}/>
    </>
  );
}
