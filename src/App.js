import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"

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
