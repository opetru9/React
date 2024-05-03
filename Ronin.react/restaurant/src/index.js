import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Layers/Header';
import Main from './Layers/Main/Main';
import Footer from './Layers/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App >
      <Header/>
      <Main/>
      <Footer/>
    </App >
  </React.StrictMode>
);


