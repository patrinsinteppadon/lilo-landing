import React from 'react';
import Home from './Components/Home.js';
import About from './Components/About.js';
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
          <Route path="/about" component={About}> 
            <About />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
