import React from 'react';
import Home from './Components/home/Home.js';
import About from './Components/about/About.js';
import Navbar from './Components/Navbar.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />  
        <Switch>
          <Route path="/about"> 
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
