import logo from "./logo.svg";
import "./App.css";
// import { Route, Routes } from "react-router";
// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
