import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Layers/Header';
import Main from './Layers/Main/Main';
import Footer from './Layers/Footer/Footer';
import Chat from './Components/Chat/Chat';
import Menu from './Components/Menu/Menu';
import {rolleList} from './Data/Rolle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App >
      <Header/>

      <Main>
          <Menu data={rolleList}/>
          <Chat/>
      </Main>

      <Footer/>
    </App >
  </React.StrictMode>
);


reportWebVitals();
