import { useParams } from "react-router-dom";
import React from "react";

function PokemonDetail({ pokemondb }) {
  console.log("pokemondb", pokemondb);
  const { pokeID } = useParams();
  const singlePokemon = pokemondb.find((item) => item.id == pokeID);

  return (
    <div>
      <h3>{singlePokemon.name}</h3>
      <p>{singlePokemon.type}</p>
    </div>
  );
}

export default PokemonDetail;
