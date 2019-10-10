import React from 'react';
import './App.css';
// note for leslie, I was trying to do weather but the api was throwing me an error i wasnt familiar with so now it just barfs up a list of pokemon
 import WeatherList from './components/WeatherList';

function App() {
  return (
    <div className="App">
      <WeatherList />
    </div>
  );
}

export default App;