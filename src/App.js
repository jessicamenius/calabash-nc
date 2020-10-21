import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
         <Switch>
           <Route exact path="/">
             <Home/>  
           </Route>
         </Switch>
        </Route>
      </Router>
    </div>
  );
}

export default App;
