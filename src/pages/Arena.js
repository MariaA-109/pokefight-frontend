import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import img1 from "../img/blitz.png";
import "../css/arena.css";

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

  return (
    <div>
      <div className="wrapper">
        <h2>Arena</h2>
        <div className="pk_flex">
          <div>Name Pokemon 1</div>
          <div>Name Pokemon 2</div>
        </div>
        <div className="main_Flex">
          <div className="cardLeft"></div>
          {/* <div><Pokemon /></div> */}
          <div className="vs">
            <h3> V S </h3>
            <img className="blitz" src={img1} alt="Pokemon Blitz" />
          </div>
          <div className="cardRight">
            <p>{randomPokemon.name}</p>
            <img
              className="rightPokePic"
              src={randomPokemon.sprites.other.dream_world.front_default}
              alt={randomPokemon.name}
            />
          </div>
        </div>
        <div>
          {" "}
          <button onClick={[]} className="fight_button">
            {" "}
            Fight
          </button>{" "}
        </div>
      </div>
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
