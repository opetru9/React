import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Game from './Game/Game'
import { game } from "./helpers";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game data={game} />
  </React.StrictMode>
)

reportWebVitals();
