import React from 'react';
import HomePage from './HomePage';
import GameInfoPage from './GameInfoPage';
import 'typeface-roboto';

import { Route, 
         Switch, 
         BrowserRouter as Router } 
from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
const projectsList = require('./JsonData/projectsList.json');

export default function App() {
  return (
    <Router forceRefresh>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        {
          projectsList.map((project, index) => 
            <Route key={index} exact sensitive path={`/${project.name}`}>
              <GameInfoPage 
                projectInfoData={require(`./JsonData/projects/${project.name}.json`)}/>
            </Route>
          )
        }
      </Switch>
    </Router>
  );
}
