import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import background from "../img/pokemon-arena.png";

export default function Arena() {
  const { pokeId } = useParams();
  const [pokeData, setPokemonData] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(null);

  // API-Daten abrufen
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Zufällige Zahl zwischen 1 und 898
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        setRandomPokemon(response.data);
      } catch (error) {
        console.log("Fehler bei der Datenabfrage", error);
      }
    };

    fetchAPI();
  }, []);

  if (!randomPokemon) {
    // Ladezustand anzeigen oder null zurückgeben, solange die Daten geladen werden
    return null;
  }

  console.log("randomPokemon", randomPokemon);

  const calculatePercentage = (stat) => {
    return (stat / 100) * 100;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="w-screen pt-8 justify-center grid grid-cols-1  md:grid-cols-3 md:pt-10"
    >
      <div className=" bg-slate-50/50 rounded-md m-10">
        <h2 className="font-bold text-black">Pokemon aus Pokedetail</h2>
      </div>
      <div className="self-center">
        <h3 className="font-extrabold text-xxl"> VS </h3>
        <button
          className=" m-16 rounded-md bg-gradient-to-r from-red-500 to-red-400 p-3 self-center border-b-4 border-red-600 hover:border-red-700 cursor-pointer transition ease-out hover:scale-125"
          onClick={[]}
        >
          FIGHT
        </button>
      </div>
      <div className="bg-slate-50/50 rounded-md p-8 m-8 ml-8 flex-col justify-center">
        <div className="justify-center ">
          <p className="font-bold text-black">{randomPokemon.name}</p>
          <img
            className="mx-auto "
            viewBox="0 0 24 24"
            src={randomPokemon.sprites.other.dream_world.front_default}
            alt=""
          />

          <div className="mt-8 pt-8">
            <p className="text-lg font-bold text-black">Base Stats</p>
            <p className="text-base m-2 font-bold text-black">
              HP: {randomPokemon.stats[0].base_stat}
            </p>
            <div className="relative pt-1 ">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      randomPokemon.stats[0].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                ></div>
              </div>
            </div>
            <p className="text-base m-1 font-bold text-black">
              Attack: {randomPokemon.stats[1].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      randomPokemon.stats[1].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                ></div>
              </div>
            </div>
            <p className="text-base m-1 font-bold text-black">
              Defense: {randomPokemon.stats[2].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      randomPokemon.stats[2].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400"
                ></div>
              </div>
            </div>
            <p className="text-base m-1 font-bold text-black">
              Speed: {randomPokemon.stats[5].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      randomPokemon.stats[5].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-300"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen justify-center "></div>
    </div>
  );
}

//pullen!
// usestae über prop onclik pokemon mit ID auswählt
// zufällig mathrandom API
// button für highscor
// fight vorbei highscore seite
// fight schere stein papier (feuer vs wasser Wasser>Feuer) --> attack gegen defense verrechnen!
// bei fight hover der pokemon

//Aufgabe: ich möchte die Pokemon mit id-ausgewählt vom User bei pokemon 1 anzeigen lassen

// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// import img1 from "../img/blitz.png";
// import "../css/arena.css";
//import { screen } from "@testing-library/react";

// //pullen!
// // usestae über prop onclik pokemon mit ID auswählt
// // zufällig mathrandom API
// // button für highscor
// // fight vorbei highscore seite
// // fight schere stein papier (feuer vs wasser Wasser>Feuer) --> attack gegen defense verrechnen!
// // bei fight hover der pokemon

// //Aufgabe: ich möchte die Pokemon mit id-ausgewählt vom User bei pokemon 1 anzeigen lassen

// export default function Arena() {
//   // const {pokeId} = useParams();
//   // const [pokeData, setPokemonData] = useState([null]);

//   // useEffect(() => {
//   //   const fetchAPI = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         `https://pokeapi.co/api/v2/pokemon/${pokeId}`
//   //       );
//   //         setPokemonData(response.data);
//   //         } catch (error) {
//   //           console.log ("Error fetch", error);
//   //     }
//   //   };

//   //   fetchAPI();
//   // }, [pokeId]);

//   // if (!pokeData) {
//   //   // Add a loading state or return null while the data is loading
//   //   return null;
//   // }

//   // console.log("pokemonData", pokemonData);

//   return (
//     <div>
//       <div className="wrapper">
//         <h2>Arena</h2>
//          <div className="pk-flex">
//             <div>Name Pokemon 1</div>
//             <div>Name Pokemon 2</div>
//          </div>
//             <div className="main-Flex">

//               <div className="cardLeft"></div>
//               {/* <div><Pokemon /></div> */}

//               <div className="vs">
//                 <h3> V S </h3>
//                 <img className="blitz" src={img1} alt="Pokemon Blitz" />
//               </div>

//               <div className="cardRight"></div>
//               {/* <p>Pokemon count: {pokeApiResponse.count}</p> */}
//               {/* <div><Pokemon /></div> */}

//             </div>
//           <div> <button conClick={[ ]} className="fight-button"> Fight</button> </div>
//       </div>
//     </div>
//   );
// }
