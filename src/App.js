import React from 'react';
import HomePage from './HomePage';
import GameInfoPage from './GameInfoPage';
import 'typeface-roboto';

import { Route, 
         Switch,
         useLocation, 
         HashRouter as Router } 
from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
const projectsList = require('./JsonData/projectsList.json');
const jsonData = require(`./JsonData/projects/ProjectAce.json`);


export default function App() {
  return (
    <Router basename="/">
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        {
          projectsList.map((project, index) => 
            <Route key={index} exact sensitive 
                   path={`/${project.name}`}>
              <GameInfoPage key={index} 
                projectInfoData={require(`./JsonData/projects/${project.name}.json`)}/>
            </Route>
          )
        }
        {/* Hard Code route for now but keep hidden from homepage*/}
        <Route exact sensitive path={`/ProjectAce`}>
          <GameInfoPage projectInfoData={jsonData}/>
        </Route>
      </Switch>
    </Router>
  );
}
