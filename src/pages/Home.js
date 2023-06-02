import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "../css/home.css";
import img1 from "../img/pokemon.png";
import img2 from "../img/glurak.png";
import sound from "../img/Opening.mp3";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="pokemon"></div>

          <div className="red-section">
            <img className="pokemon" src={img1} alt="Pokemon png" />
            <div>
              <div>
                <img className="glurak" src={img2} alt="Glurak png" />
              </div>
            </div>

            <div className="button-container">
              <Link to="/allpokemon" className="button"></Link>
            </div>
          </div>
          <div className="white-section">
            <div className="music-toggle-container text-zinc-600">
              <button onClick={togglePlay} className="music-toggle-button">
                {isPlaying ? "Pause Music" : "Play Music"}
              </button>
            </div>
            <audio ref={audioRef} src={sound} />
          </div>
        </div>
      </div>
    </>
  );
}
