import { useParams } from "react-router-dom";
import React from "react";
import { UilStar } from "@iconscout/react-unicons";

function PokemonDetail({ pokemondb }) {
  //console.log("pokemondb", pokemondb);
  const { pokeId } = useParams();
  const singlePokemon = pokemondb.find((item) => item.id === parseInt(pokeId));
  console.log("singlePokemon", singlePokemon.type);
  return (
    <div>
      <div>
        <p className="text-xxl lowercase font-bold p-4">
          {singlePokemon.name.english}
        </p>
        <div className="flex flex-row flex-wrap my-1.5 justify-around items-center p-4">
          {singlePokemon.type.map((type) => {
            console.log("type:", type);
            return (
              <div>
                <p className=" p-0.5 mt-1 text-xs border text-white mx-4 bg-orange-300 border-none w-20 rounded-full">
                  {type}
                </p>
              </div>
            );
          })}
        </div>

        <div className="my-1.5 p-7">
          <p className="text-lg font-bold py-2">Base Stats</p>
          <p className="text-base m-2 ">HP: {singlePokemon.base.HP}</p>
          <p className="text-base m-2 "> Attack: {singlePokemon.base.Attack}</p>
          <p className="text-base m-2">
            {" "}
            Defense: {singlePokemon.base.Defense}
          </p>
          <p className="text-base m-2"> Speed: {singlePokemon.base.Speed}</p>
        </div>
        <div className="flex justify-center align-middle py-1">
          <UilStar size={50} />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
