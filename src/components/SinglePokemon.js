import React from "react";
import { Link } from "react-router-dom";
// import { UilStar } from "@iconscout/react-unicons";

export default function SinglePokemon({ item }) {
  console.log("Page: SinglePokemon:", item);
  return (
    <div>
      <>
        <Link>
          <div className=" m-3 border p-3 rounded-md" key={item.id}>
            <div className="flex justify-center">
              <img
                src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png"
                className="w-28 align-middle my-0.5 py-1.5"
                alt=""
              ></img>
            </div>
            <p className="text-sm lowercase font-bold">{item.name.english}</p>
            <div className="flex flex-row flex-wrap my-1.5 justify-around items-center">
              {item.type.map((type) => {
                //console.log("type:", type);
                return (
                  <div>
                    <p className=" mt-1 text-xs border text-white mx-0.5 bg-orange-300 border-none w-20 rounded-full">
                      {type}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* <div className="my-1.5">
              <p className="text-xs font-bold py-2">Base Stats</p>
              <p className="text-xs "> HP: {item.base.HP}</p>
              <p className="text-xs"> Attack: {item.base.Attanck}</p>
              <p className="text-xs "> Defense: {item.base.Defense}</p>
              <p className="text-xs "> Speed: {item.base.Speed}</p>
            </div> */}
            {/* <div className="flex justify-center align-middle py-1">
              <UilStar size={30} />
            </div> */}
          </div>
        </Link>
      </>
    </div>
  );
}
