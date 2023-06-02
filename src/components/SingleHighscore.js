import React from "react";
export default function SingleHighscore( {score, item} ) {

  console.log("score in singleHighscore:",score[1].first_pokemon)


  return (
    <>
    <div className="grid grid-cols-2 justify-center mx-1 my-1 m-3 border p-3 rounded-md w-104  ">
        <p>{`${item.first_pokemon}     vs.     ${item.second_pokemon}`}</p>
        <p>{`${item.total_wins} wins in a row`}</p>
        <p>{`The winner is...${item.winner}!!!`}</p>    
    </div>
    <br></br>
    </>
  );
}