import React from "react";
import { Link } from "react-router-dom";
// import { UilStar } from "@iconscout/react-unicons";

export default function SinglePokemon({ item }) {
  // //console.log("Page: SinglePokemon:", item, pokedata);
  return (
    <div>
      <>
        <Link>
          <div className="m-3 border p-3 rounded-md w-52 " key={item.id}>
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
