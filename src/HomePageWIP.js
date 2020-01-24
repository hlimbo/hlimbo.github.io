// Home Page Work In Progress
// Making toolbar navigate to specific sections of my portfolio animate smoothly
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';

// bad solution need to get a better one... maybe use react router?
function scrollToId(id) {
  const el = document.getElementById(id); 
  el.scrollIntoView();
}

function HomePage() {
  const [value, setValue] = React.useState(0);
  console.log("The value: ", value);
  return(
    <div>
      <AppBar position="sticky" color="primary">
        <Tabs 
          centered={true}
          value={value} 
          onChange={(event, newValue) => { setValue(newValue); }}>
          <Tab label="About Me" disableRipple={true} onClick={ () => scrollToId('about_me') }/>
          <Tab label="Projects" disableRipple={true} onClick={ () => scrollToId('projects') }/>
        </Tabs>
      </AppBar>
      <div id="about_me">About Me </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div id="projects">Projects</div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
      <div>alfkjalfjaljfalfjlajfla </div>
    </div>
  );
}

export default HomePage;