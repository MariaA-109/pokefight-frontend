import React from "react";
export default function SingleHighscore( {score, item} ) {

  console.log("score in singleHighscore:",score[1].first_pokemon)


  return (
    <>
      <p>{item.winner}</p>
      <p>{item.total_wins}</p>
      </>
  );
}