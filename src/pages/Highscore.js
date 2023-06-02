// import React from "react";
// import SingleHighscore from "../components/SingleHighscore";

// export default function Highscore({score}) {

// console.log("score", score)
//   return <>
//   <h1>PokeFight Alltime-Highscores</h1>
//   <br></br>
//   <div className="grid grid-cols-2 justify-center mx-1 my-1 m-3 border p-3 rounded-md w-104  ">
//     <h1>Fights</h1>
//     <h1>Scores</h1>
//   </div>
//   <br></br>



//     <ul>
//       {score.length > 0 ? (
//             score.map((item) => (
//               <SingleHighscore item={item} score={score} />
//             ))
//           ) : (
//             <h1>No Highscores available yet</h1>
//           )}
//     </ul>
//   </>;
// }

import React from "react";
import SingleHighscore from "../components/SingleHighscore";

export default function Highscore({ score }) {
  const sortedScore = [...score]; // Create a new array to avoid mutating the original data
  sortedScore.sort((a, b) => b.total_wins - a.total_wins); // Sort the array by total_wins

  return (
    <>
      <h1>PokeFight Alltime-Highscores</h1>
      <br />
      <div className="grid grid-cols-2 justify-center mx-1 my-1 m-3 border p-3 rounded-md w-104">
        <h1>Fights</h1>
        <h1>Scores</h1>
      </div>
      <br />

      {sortedScore.length > 0 ? (
        <ul>
          {sortedScore.map((item, index) => (
            <SingleHighscore key={index} item={item} score={score} />
          ))}
        </ul>
      ) : (
        <h1>No Highscores available yet</h1>
      )}
    </>
  );
}