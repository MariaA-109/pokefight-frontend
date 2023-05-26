import React, { useState } from "react";
import SinglePokemon from "../components/SinglePokemon";
import Pagination from "../components/Pagination";

export default function AllPokemon({ pokemondb }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);
  console.log("Page: AllPokemon1:", pokemondb);
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokemondb.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  console.log("Page: AllPokemon2:", currentPokemon);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log("Page: AllPokemon3:", currentPokemon);
  return (
    <>
      <div>AllPokemon</div>
      {currentPokemon.length > 0 ? (
        currentPokemon.map((pokemon) => (
          <SinglePokemon key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <h1>No Pokemon Found</h1>
      )}

      <Pagination
        postsPerPage={pokemonPerPage}
        totalPosts={pokemondb.length}
        paginate={paginate}
      />
    </>
  );
}
