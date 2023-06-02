import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Placeholder image URL
const placeholderImageUrl = "https://via.placeholder.com/150";

export default function SinglePokemon({ pokemondb }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemondb.id}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokemondb.id]);

  if (!pokemonData) {
    // Add a loading state or return null while the data is loading
    return null;
  }

  console.log("Page: SinglePokemon:", pokemonData);

  return (
    <div>
      <Link to={`../pokemon/${pokemonData.id}`}>
        <div
          className="flex flex-col justify-center m-8 border h-5/6 p-3 rounded-md w-52  "
          key={pokemonData.id}
        >
          {pokemonData.sprites && (
            <div>
              <img
                src={
                  pokemonData.sprites.other.dream_world.front_default ||
                  placeholderImageUrl
                }
                alt={pokemonData.name.english}
                className="w-32 h-28 m-8 "
                viewBox="0 0 24 24"
              />
            </div>
          )}
          <div>
            <p className="text-base lowercase font-bold">
              {pokemonData.name.english || pokemonData.name}
            </p>
            <div className="flex  m-4 justify-around ">
              {pokemonData.types.map((type, index) => (
                <div key={index}>
                  <p className="mt-2 text-xs font-extrabold text-white mx-0.5 bg-yellow-600 border-none w-20 rounded-full">
                    {type.type.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
