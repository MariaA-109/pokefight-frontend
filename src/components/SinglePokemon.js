import React from "react";
import { Link } from "react-router-dom";

export default function SinglePokemon({ item, singlePokemon }) {
  console.log("Page: SinglePokemon:", item);
  return (
    <div>
      <>
        <Link to={`../pokemon/${item.id}`}>
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
          </div>
        </Link>
      </>
    </div>
  );
}
