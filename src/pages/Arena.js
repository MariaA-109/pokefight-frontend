import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import img1 from "../img/blitz.png";
import "../css/arena.css";

export default function Arena() {
  const location = useLocation();
  const { pokemonData } = location.state;
  console.log("from: " + pokemonData);
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // API-Daten abrufen
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Zufällige Zahl zwischen 1 und 898
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        setRandomPokemon(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Fehler bei der Datenabfrage", error);
        setIsLoading(false);
      }
    };

    fetchAPI();
  }, []);

  if (isLoading || !randomPokemon) {
    // Ladezustand anzeigen oder null zurückgeben, solange die Daten geladen werden
    return <div>Loading...</div>;
  }

  // console.log("randomPokemon", randomPokemon);

  const imageUrlRandom =
    randomPokemon.sprites?.other?.dream_world?.front_default ||
    "https://via.placeholder.com/150";
  const imageUrlChosen =
    pokemonData.sprites?.other?.dream_world?.front_default ||
    "https://via.placeholder.com/150";

  return (
    <div>
      <div className="wrapper">
        <h2>Arena</h2>
        <div className="pk_flex">
          <div>Chosen Pokemon</div>
          <div>Random Pokemon</div>
        </div>
        <div className="main_Flex">
          <div className="cardLeft"></div>
          <p>{pokemonData.name}</p>
          <img
            className="rightPokePic"
            src={imageUrlChosen}
            alt={pokemonData.name}
          />
          <div className="vs">
            <h3> V S </h3>
            <img className="blitz" src={img1} alt="Pokemon Blitz" />
          </div>
          <div className="cardRight">
            <p>{randomPokemon.name}</p>
            <img
              className="rightPokePic"
              src={imageUrlRandom}
              alt={randomPokemon.name}
            />
          </div>
        </div>
        <div>
          <button onClick={[]} className="fight_button">
            Fight
          </button>
        </div>
      </div>
    </div>
  );
}
