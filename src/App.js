import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import ArrowDown from './Components/ArrowDown/ArrowDown';
import HomeBottom from './Pages/HomeBottom/HomeBottom';


function App() {
  return (
    <div className="App">
      <Home />
      <a href='#full'>
        <ArrowDown />
      </a>
      <HomeBottom />
    </div>
  );
}

export default App;
