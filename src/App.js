import "./App.css";
import { Header } from "./Header.js";
import { SearchBar } from "./searchbar.js";
import { useState } from "react";
import { RecipiesList } from "./RecipiesList.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  //console.log(recipes);
  return (
    <div className="App">
      <Header></Header>
      <SearchBar setRecipes={setRecipes} />
      <RecipiesList recipes={recipes} />
    </div>
  );
}

export default App;
