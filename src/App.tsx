import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import CardItem from './components/cards/cardTraining';
import katakana from './utils/katakana.json'
import Providers from './providers';
import { ModelTraining } from './components/modeTraining/modeTraining';

function App() {
  return (
    <Providers>
      <div className="App">
        <Home />
        <ModelTraining />
      </div>
    </Providers>
  );
}

export default App;
