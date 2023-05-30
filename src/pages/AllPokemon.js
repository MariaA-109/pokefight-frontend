import SinglePokemon from "../components/SinglePokemon"; 
import { useState } from "react";
import Search from "../components/Search";

export default function AllPokemon({ pokemondb }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredResults = pokemondb.filter((item) =>
      item.name.english.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredPokemon(filteredResults);
  };

  return (
    <div>
      <form>
        <input
          className="searchBar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </form>

      <div className="grid grid-cols-3 justify-center mx-1 my-1">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((item) => (
            <SinglePokemon item={item} key={item.id} />
          ))
        ) : (
          <h1>No Pokemon Found</h1>
        )}
      </div>
    </div>
  );
}
