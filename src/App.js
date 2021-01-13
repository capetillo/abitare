import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import ArrowDown from './Components/ArrowDown/ArrowDown';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <a href='#full'>
        <ArrowDown />
      </a>
    </div>
  );
}

export default App;
