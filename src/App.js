import React from 'react';
import HomePage from './HomePage';
import GameInfoPage from './GameInfoPage';
import 'typeface-roboto';

import { Route, 
         Switch, 
         BrowserRouter as Router } 
from 'react-router-dom';

// I'll need to add a list of projectnames
// Based on projectName
// GameInfoPage will load data from a .json file to 
// render the necesary
// data to render the page

export default function App() {
  return (
    <Router forceRefresh>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact sensitive path="/MathNinja">
          <GameInfoPage/>
        </Route>
      </Switch>
    </Router>
  );
}
