import React from "react";
import SingleHighscore from "../components/SingleHighscore";
import { Link } from "react-router-dom";

export default function Highscore({ score }) {
  const sortedScore = [...score]; // Create a new array to avoid mutating the original data
  sortedScore.sort((a, b) => b.total_wins - a.total_wins); // Sort the array by total_wins

  return (
    <>
      <h1>Alltime-Highscores</h1>
      <br />
      <img
        src={require("../img/goldenTrophy.jpeg")}
        alt="Winner Trophy"
        style={{
          width: "160px",
          height: "auto",
          margin: "0 auto",
          borderRadius: 5,
        }}
      />
      <br></br>

      <i className="text-lg">
        "No matter how hard things get, the real value of winning <br></br>is
        the experience you gain in battling." - Ash Ketchum
      </i>
      <br></br>
      <br></br>
      <div className="grid grid-cols-3 justify-center mx-1 my-1 m-3 border p-3 rounded-md w-104">
        <h1>Rank</h1>
        <h1>Pokemon</h1>
        <h1>Score</h1>
      </div>
      <br></br>
      {sortedScore.length > 0 ? (
        <ol>
          {sortedScore.map((item, index) => (
            <SingleHighscore
              key={index}
              item={item}
              score={score}
              rank={index + 1}
            />
          ))}
        </ol>
      ) : (
        <h1>No Highscores available yet</h1>
      )}
      <br></br>
      <div className="grid grid-cols-2">

        <Link to="../allpokemon/" className="flex ml-1 mx-1 my-1">
          <button className="bg-rose-500 rounded-sm text-white text-lg h-18 w-40 font-bold justify-center">
            Choose another Pokemon

          </button>
        </Link>
      </div>
      <br></br>
    </>
  );
}
