import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import background from "../img/pokemon-arena.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from "../img/blitz.png";
import "../css/arena.css";

export default function Arena() {
  const location = useLocation();
  const { chosenPokemon } = location.state;
  // console.log("chosenPokemon: " + chosenPokemon);
  const [randomPokemon, setRandomPokemon] = useState("null");
  const [isLoading, setIsLoading] = useState(true);
  const [winner, setWinner] = useState(null);

  // API-Daten abrufen
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Zufällige Zahl zwischen 1 und 898
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        setRandomPokemon(response.data);
        console.log("randomPokemon:", randomPokemon.stats[1].base_stat);
        setIsLoading(false);
      } catch (error) {
        console.log("Fehler bei der Datenabfrage", error);
        setIsLoading(false);
      }
    };

    fetchAPI();
  }, []);

  //Battle logic ////////
  const [hpPokemonState, setHPPokemonState] = useState(
    chosenPokemon.stats[0].base_stat
  );
  console.log("hp: ", hpPokemonState);

  const [attackPokemonState, setAttackPokemonState] = useState(
    chosenPokemon.stats[1].base_stat
  );
  console.log("atttack: ", attackPokemonState);

  const [defensePokemonState, setDefensePokemonState] = useState(
    chosenPokemon.stats[2].base_stat
  );
  console.log("defense: ", defensePokemonState);

  const [speedPokemonState, setSpeedPokemonState] = useState(
    chosenPokemon.stats[5].base_stat
  );
  console.log("speed: ", speedPokemonState);

  const [secondPokemonState, setSecondPokemonState] = useState(null);
  console.log("secondPokemon: ", secondPokemonState);

  useEffect(() => {
    if (randomPokemon.stats && randomPokemon.stats[0]) {
      const secondPokemonBaseStat = randomPokemon.stats[0].base_stat;
      setSecondPokemonState(secondPokemonBaseStat);
      console.log("secondPokemon: ", secondPokemonBaseStat);
    } else if (randomPokemon.stats && randomPokemon.stats[1]) {
      const attackPokemonBaseStat = randomPokemon.stats[1].base_stat;
      //setSecondPokemonState(attackPokemonBaseStat);
      console.log("attacksecondPokemon: ", attackPokemonBaseStat);
    } else if (randomPokemon.stats && randomPokemon.stats[2]) {
      const defensePokemonBaseStat = randomPokemon.stats[2].base_stat;
      //setSecondPokemonState(defensePokemonBaseStat);
      console.log("defensesecondPokemon: ", defensePokemonBaseStat);
    }
  }, [randomPokemon]);

  function handleAttack() {
    const newFirstPokemonState = hpPokemonState - 30;
    setHPPokemonState(newFirstPokemonState);

    if (newFirstPokemonState <= 0) {
      // First Pokemon loses the fight
      setHPPokemonState(0);
      setWinner(randomPokemon.name);
    } else {
      // Continue with the attack on the second Pokemon
      const newSecondPokemonState = secondPokemonState - 25;
      setSecondPokemonState(newSecondPokemonState);

      if (newSecondPokemonState <= 0) {
        // Second Pokemon loses the fight
        setSecondPokemonState(0);
        setWinner(chosenPokemon.name);
      }
    }
  }

  ////////////
  if (isLoading || !randomPokemon) {
    // Ladezustand anzeigen oder null zurückgeben, solange die Daten geladen werden
    return <div>Loading...</div>;
  }

  // console.log("randomPokemon", randomPokemon);

  const calculatePercentage = (stat) => {
    return (stat / 100) * 100;
  };

  const imageUrlRandom =
    randomPokemon.sprites?.other?.dream_world?.front_default ||
    "https://via.placeholder.com/150";
  const imageUrlChosen =
    chosenPokemon.sprites?.other?.dream_world?.front_default ||
    "https://via.placeholder.com/150";

  //

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-screen pt-8 justify-center grid grid-cols-1  md:grid-cols-3 md:pt-10 md:h-screen"
    >
      <div className="bg-slate-50/50 rounded-md p-8 m-8 ml-8 flex-col justify-center">
        <div className="justify-center ">
          <p className="font-bold text-black">{chosenPokemon.name}</p>
          <img
            className="mx-auto "
            viewBox="0 0 24 24"
            src={imageUrlChosen}
            alt=""
          />

          <div className="mt-8 pt-8">
            <p className="text-lg font-bold text-black">Base Stats</p>
            <p className="text-base m-2 font-bold text-black">
              HP: {hpPokemonState}
            </p>
            <div className="relative pt-1 ">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(hpPokemonState)}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                ></div>
              </div>
            </div>
            <p className="text-base m-1 font-bold text-black">
              Attack: {chosenPokemon.stats[1].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      chosenPokemon.stats[1].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                ></div>
              </div>
            </div>
            <p className="text-base m-1 font-bold text-black">
              Defense: {chosenPokemon.stats[2].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      chosenPokemon.stats[2].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400"
                ></div>
              </div>
            </div>
            <p className="text-base m-1 font-bold text-black">
              Speed: {chosenPokemon.stats[5].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      chosenPokemon.stats[5].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-300"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center">
        <h3 className="font-extrabold text-xxl"> VS </h3>
        {winner ? (
          <p className="font-extrabold m-10 text-red-500 text-7xl rounded bg-slate-700/50">
            {winner} wins!
          </p>
        ) : (
          <button
            onClick={handleAttack}
            className=" m-16 font-bold rounded-md bg-gradient-to-r from-red-500 to-red-400 p-3 self-center border-b-4 border-red-600 hover:border-red-700 cursor-pointer transition ease-out hover:scale-125"
          >
            FIGHT
          </button>
        )}
        <Link to="../highscore/">
          <button className="m-16 font-bold text-lg rounded-md bg-gradient-to-r from-red-500 to-red-400 p-3 border-b-4 border-red-600 hover:border-red-700 cursor-pointer transition ease-out hover:scale-125">
            HIGHSCORE
          </button>
        </Link>
      </div>
      <div className="bg-slate-50/50 rounded-md p-8 m-8 ml-8 flex-col justify-center">
        <div className="justify-center ">
          <p className="font-bold text-black">{randomPokemon.name}</p>
          <img
            className="mx-auto "
            viewBox="0 0 24 24"
            src={imageUrlRandom}
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
              Attack: {secondPokemonState}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(secondPokemonState)}%`,
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
