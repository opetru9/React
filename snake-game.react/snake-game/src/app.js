import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Game from './Game/Game'

let game = {
  score: 0,

  children: [
    {
      name: "snake",
      children: [
        { name: "snake__head", dir: "up", coord: { top: 100, left: 200 } },
        { name: "snake__body", dir: "up", coord: { top: 132, left: 200 } },
        { name: "snake__body", dir: "up", coord: { top: 164, left: 200 } },
        { name: "snake__body", dir: "up", coord: { top: 196, left: 200 } },
        { name: "snake__tail", dir: "up", coord: { top: 228, left: 200 } },
      ],
    },
    {
      name: "apple",
      coord: { top: 228, left: 64 },
    },
  ],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game data={game} />
  </React.StrictMode>
)

reportWebVitals();
