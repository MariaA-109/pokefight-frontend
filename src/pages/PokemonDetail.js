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

  const calculatePercentage = (stat) => {
    return (stat / 100) * 100;
  };

  return (
    <div>
      <div className="flex ">
        <div className="flex-col justify-center ">
          <Link to="../allpokemon/">
            <button className="bg-rose-500 rounded-sm text-white text-sm p-3 font-bold">
              Back
            </button>
          </Link>
        </div>
        <div className=" border rounded max-w-sm overflow-hidden p-6 m-8 w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4">
          <p className="text-xxl lowercase font-bold p-4">
            {pokemonData.name.english || pokemonData.name}
          </p>
          {pokemonData.sprites && (
            <div className="flex justify-center">
              <img
                src={pokemonData.sprites.other.dream_world.front_default}
                alt="Sprite"
                className=" w-60 h-40 m-8 "
                viewBox="0 0 24 24"
              />
            </div>
          )}
          <div className="flex flex-row flex-wrap my-1.5 justify-around items-center p-4">
            {pokemonData.types.map((type, index) => {
              console.log("type:", type);
              return (
                <div key={index}>
                  <p className="p-0.5 mt-1 text-xs border text-white mx-4 font-extrabold bg-amber-600 border-none w-20 rounded-full">
                    {type.type.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div class="w-full">
            <div className="my-1.5 p-7">
              <p className="text-lg font-bold py-2">Base Stats</p>
              <p className="text-base m-2">
                HP: {pokemonData.stats[0].base_stat}
              </p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-50">
                  <div
                    style={{
                      width: `${calculatePercentage(
                        pokemonData.stats[0].base_stat
                      )}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
              <p className="text-base m-2">
                Attack: {pokemonData.stats[1].base_stat}
              </p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-50">
                  <div
                    style={{
                      width: `${calculatePercentage(
                        pokemonData.stats[1].base_stat
                      )}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                  ></div>
                </div>
              </div>
              <p className="text-base m-2">
                Defense: {pokemonData.stats[2].base_stat}
              </p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-50">
                  <div
                    style={{
                      width: `${calculatePercentage(
                        pokemonData.stats[2].base_stat
                      )}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400"
                  ></div>
                </div>
              </div>
              <p className="text-base m-2">
                Speed: {pokemonData.stats[5].base_stat}
              </p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-50">
                  <div
                    style={{
                      width: `${calculatePercentage(
                        pokemonData.stats[5].base_stat
                      )}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-300"
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex-row justify-items-center">
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
              <p className="flex-row justify-items-center text-xl m-4">
                {data}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
