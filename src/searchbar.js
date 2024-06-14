import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

export function SearchBar({setRecipes}) {
    const[query, setQuery] = useState("chicken");
    async function fetchRecipes() {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=ed380c29&app_key=fcb2a8ef3af10bcc9e249f1987d72e64`);
        const data = await response.json();
        setRecipes(data.hits);
        }

function handleChange(event) {
    setQuery(event.target.value);
}

useEffect(() => {
    fetchRecipes();
},[query] );

  return (
    <>
      <TextField onChange={handleChange} fullWidth label="Wyszukaj" id="searchBar" onClick={fetchRecipes}/>
    </>
  );
}
