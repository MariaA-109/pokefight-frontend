import { Route, Routes } from "react-router-dom";
import UilReact from "@iconscout/react-unicons/icons/uil-react";

import logo from "./logo.svg";
import "./App.css";

// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AllPokemon from "./pages/AllPokemon";
import Home from "./pages/Home";

import SinglePokemon from "./components/SinglePokemon";

import PokemonDetails from "./pages/PokemonDetail";
import Highscore from "./pages/Highscore";
import Arena from "./pages/Arena";


function App() {
  const [pokemon, setPokemon] = useState([]); // Rename state variable
  // const { pathname } = useLocation();

  useEffect(() => {
    async function fetchPokemon() {
      // Define asynchronous function
      try {
        const response = await axios.get("http://localhost:8080/pokemon"); // Make GET request to localhost:8080/pokemon
        setPokemon(response.data); // Set state with response data
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemon(); // Call asynchronous function
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  console.log(pokemon);
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="allpokemon"
              element={<AllPokemon pokemondb={pokemon} />}
            />
            <Route path="highscore" element={<Highscore />} />
            <Route path="allpokemon/:id" element={<PokemonDetails />} />
            <Route path="arena" element={<Arena />} />
          </Routes>

          <img src={logo} className="App-logo" alt="logo" />
        </main>
      </header>
    </div>
  );
}

export default App;
