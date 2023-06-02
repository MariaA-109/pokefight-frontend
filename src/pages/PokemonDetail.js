import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UilStar } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

function PokemonDetail() {
  const { pokeId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokeId]);

  if (!pokemonData) {
    // Add a loading state or return null while the data is loading
    return null;
  }

  console.log("pokemonData", pokemonData);

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <Link to="../allpokemon/">
            <button className="bg-rose-500 text-white text-sm p-3 font-bold">
              Back
            </button>
          </Link>
        </div>
        <p className="text-xxl lowercase font-bold p-4">
          {pokemonData.name.english || pokemonData.name}
        </p>
        {pokemonData.sprites && (
          <div>
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt="Sprite"
            />
          </div>
        )}
        <div className="flex flex-row flex-wrap my-1.5 justify-around items-center p-4">
          {pokemonData.types.map((type, index) => {
            console.log("type:", type);
            return (
              <div key={index}>
                <p className="p-0.5 mt-1 text-xs border text-white mx-4 bg-orange-300 border-none w-20 rounded-full">
                  {type.type.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="my-1.5 p-7">
          <p className="text-lg font-bold py-2">Base Stats</p>
          <p className="text-base m-2">HP: {pokemonData.stats[0].base_stat}</p>
          <p className="text-base m-2">
            Attack: {pokemonData.stats[1].base_stat}
          </p>
          <p className="text-base m-2">
            Defense: {pokemonData.stats[2].base_stat}
          </p>
          <p className="text-base m-2">
            Speed: {pokemonData.stats[5].base_stat}
          </p>
        </div>
        <div className="flex flex-wrap justify-center ml-8">
          <button
            onClick={() =>
              setData(
                "I choose you, " +
                  (pokemonData.name.english || pokemonData.name) +
                  "!"
              )
            }
          >
            <UilStar
              size={50}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
          </button>
          <p className=" text-xl m-4">{data}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
