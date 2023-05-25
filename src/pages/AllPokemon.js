import React from "react";
import SinglePokemon from "../components/SinglePokemon";

export default function AllPokemon({ pokemondb }) {
  console.log("Page: AllPokemon:", pokemondb);
  return (
    <>
      <div>AllPokemon</div>
      {pokemondb.length > 0 ? (
        pokemondb.map((pokemon) => (
          <SinglePokemon key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <h1>No Pokemon Found</h1>
      )}
    </>
  );
}
