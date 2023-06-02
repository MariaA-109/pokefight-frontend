import React from "react";

export default function Search({ inputValue, onInputChange, onSearch }) {
  return (
    <form>
      <input
        className="searchBar text-gray-800"
        value={inputValue}
        onChange={onInputChange}
        type="text"
        placeholder="Search..."
      />
      <button onClick={onSearch}>Search</button>
    </form>
  );
}

// import { useState } from "react";

// export default function Search({ pokemondb }) {
//   const [inputValue, setInputValue] = useState("");
//   const [filteredPokemon, setFilteredPokemon] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const filteredResults = pokemondb.filter((item) =>
//       item.name.english.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setFilteredPokemon(filteredResults);
//   };

//   return (
//     <form>
//     <input
//       className="searchBar"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       type="text"
//       placeholder="Search..."
//     />
//     <button onClick={handleSearch}>Search</button>
//   </form>
//   );
// }

// import { useState } from "react";

// export default function Search({ setQuery, pokemondb }) {
//   const [inputValue, setInputValue] = useState("");

//   const addQuery = (event) => {
//     event.preventDefault();
//     if (inputValue.trim() === "") {
//       alert("Your PokeSearch empty!");
//       // return;
//     }
//     setQuery(inputValue.trim());
//     setInputValue("");
//   };

//   return (
//     <div>
//       <form>
//         <input
//           className="searchBar"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           type="text"
//           placeholder="Search..."
//         />
//         <button onSubmit={addQuery}>Search</button>
//       </form>

//       <ul>
//         {pokemondb
//         .filter((singlePokemon) =>{
//           return inputValue.toLowerCase() === ''
//           ? singlePokemon.name.english
//           : singlePokemon.name.english.toLowerCase().includes(inputValue)
//           })
//           .map((singlePokemon) => (
//           <li>{singlePokemon.name.english}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
