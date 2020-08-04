import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoComponent from './demoComponent';

function App() {

  let dateCourante = new Date();
  let tempsJavaScript = dateCourante.getTime();
  let tempsPHP = tempsJavaScript/1000;

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DemoComponent/>
          <p>
            Temps JavaScript: {tempsJavaScript} millisecondes 
          </p>
          <p>
            Temps PHP: {tempsPHP} secondes
          </p>
          <p>
            Date pour un humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
          </p>
        </header>
      </div>
      <footer>Un site de Molengeek</footer>
    </div>
  );
}

export default App;
