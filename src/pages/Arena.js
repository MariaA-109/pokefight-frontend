import React from "react";
import { useLocation } from "react-router-dom";

export default function Arena() {
  const location = useLocation();
  const pokemonData = location.state?.pokemonData ?? null;

  if (!pokemonData) {
    // Handle the case when pokemonData is not available
    return <div>No Pokemon data available.</div>;
  }

  console.log("pokemonData:", pokemonData);

  return (
    <>
      <div>
        <h1>Pokemon Arena</h1>
        <p>Selected Pokemon: {pokemonData.name.english}</p>
        {/* Rest of your code */}
      </div>
    </>
  );
}
