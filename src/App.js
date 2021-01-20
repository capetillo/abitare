import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Pages/Projects/Projects';
import CasaFiesta from './Pages/CasaFiesta/CasaFiesta';
import Error from './Pages/Error/Error';
import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (

    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/casa-fiesta" component={CasaFiesta} />
        <Route component={Error} />
      </Switch>
   
      
    </div>
  );
}

export default App;
