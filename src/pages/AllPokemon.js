import SinglePokemon from "../components/SinglePokemon";
import Filter from "../components/Filter";
import Search from "../components/Search";

export default function AllPokemon({ pokemondb }) {
  return (
    <>
      <Search pokemondb={pokemondb} />
      <Filter pokemondb={pokemondb} />
      <div className="grid grid-cols-3 justify-center mx-1 my-1">
        {pokemondb.length > 0 ? (
          pokemondb.map((item) => {
            return <SinglePokemon item={item} key={item.id} />;
          })
        ) : (
          <h1>No Pokemon Found</h1>
        )}
      </div>

{/* import React from "react";
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
      )} */}

    </>
  );
}
