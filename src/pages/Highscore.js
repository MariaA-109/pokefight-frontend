import React from "react";
import SingleHighscore from "../components/SingleHighscore";

export default function Highscore({score}) {

console.log("score", score)
  return <>
  <h1>PokeFight Alltime-Highscores</h1>
    <ul>
      {score.length > 0 ? (
            score.map((item) => (
              <SingleHighscore item={item} score={score} />
            ))
          ) : (
            <h1>No Highscores available yet</h1>
          )}
    </ul>
  </>;
}