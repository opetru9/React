import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Snake from "./snake/Snake";

let snake = {
  dummy:'somethink',
  children:[
    {name: 'snake__head', dir: "up", coord: {top : 100, left : 200}},
    {name: 'snake__body', dir: "up", coord: {top : 164, left : 200}},
    {name: 'snake__tail', dir: "up", coord: {top : 228, left : 200}},
  ]
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Snake data={snake}/>
  </React.StrictMode>
);

reportWebVitals();
