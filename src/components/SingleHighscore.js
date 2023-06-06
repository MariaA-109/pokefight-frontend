import React from "react";
export default function SingleHighscore( {score, item, rank} ) {

  return (
    <>
    <div className="grid grid-cols-3 justify-center mx-1 my-1 m-3 border p-3 rounded-md w-104  text-lg">
        <li>{rank}</li>
        <li>{item.winner}</li>
        <li>{`${item.total_wins}`}</li>
    </div>
    
    </>
  );
}
