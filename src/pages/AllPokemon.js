import React, { useState } from "react";
import SinglePokemon from "../components/SinglePokemon";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

export default function AllPokemon({ pokemondb }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(pokemondb.length / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const renderPokemon = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pokemondb.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div className="grid grid-cols-3 justify-center mx-1 my-1">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <SinglePokemon item={item} key={item.id} />
          ))
        ) : (
          <h1>No Pokemon Found</h1>
        )}
      </div>
    );
  };

  return (
    <>
      <Search pokemondb={pokemondb} />
      <Filter pokemondb={pokemondb} />

      {renderPokemon()}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </>
  );
}
