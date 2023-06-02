import React, { useState, useEffect } from "react";
import SinglePokemon from "../components/SinglePokemon";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

export default function AllPokemon({ pokemondb }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(pokemondb.length / itemsPerPage);

  useEffect(() => {
    setFilteredPokemon(pokemondb);
  }, [pokemondb]);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredResults = pokemondb.filter((item) => {
      const englishName = item.name.english || item.name || "";
      return englishName.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredPokemon(filteredResults);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
    const currentItems = filteredPokemon.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    return (
      <div>
        <Search
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />

        <div className="grid grid-cols-3 justify-center mx-1 my-1">
          {currentItems.length > 0 ? (
            currentItems.map((pokemondb) => (
              <SinglePokemon pokemondb={pokemondb} key={pokemondb.id} />
            ))
          ) : (
            <h1>No Pokemon Found</h1>
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
        />
      </div>
    );
  };

  return renderPokemon();
}

// import React, { useState, useEffect } from "react";
// import SinglePokemon from "../components/SinglePokemon";
// import Pagination from "../components/Pagination";
// import Search from "../components/Search"

// export default function AllPokemon({ pokemondb }) {
//   const [inputValue, setInputValue] = useState("");
//   const [filteredPokemon, setFilteredPokemon] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;
//   const totalPages = Math.ceil(pokemondb.length / itemsPerPage);

//   useEffect(() => {
//     setFilteredPokemon(pokemondb);
//   }, [pokemondb]);

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const filteredResults = pokemondb.filter((item) =>
//       item.name.english.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setFilteredPokemon(filteredResults);
//   };

//   const onPageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const onNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const onPrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const renderPokemon = () => {
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = filteredPokemon.slice(
//       indexOfFirstItem,
//       indexOfLastItem
//     );

//     return (
//       <div>
//         <form>
//           <input
//             className="searchBar"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             type="text"
//             placeholder="Search..."
//           />
//           <button onClick={handleSearch}>Search</button>
//         </form>

//         <div className="grid grid-cols-3 justify-center mx-1 my-1">
//           {currentItems.length > 0 ? (
//             currentItems.map((item) => (
//               <SinglePokemon item={item} key={item.id} />
//             ))
//           ) : (
//             <h1>No Pokemon Found</h1>
//           )}
//         </div>

//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={onPageChange}
//           onNextPage={onNextPage}
//           onPrevPage={onPrevPage}
//         />
//       </div>
//     );
//   };

//   return renderPokemon();
// }
