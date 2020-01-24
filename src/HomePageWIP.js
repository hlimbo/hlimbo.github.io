// Home Page Work In Progress
// Making toolbar navigate to specific sections of my portfolio animate smoothly
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import scrollIntoView from 'scroll-into-view';

// credits: https://gist.github.com/gre/1650294
const easeOutQuad = t => t*(2-t);

function scrollEaseOutById(id) {
  scrollIntoView(
    document.getElementById(id),
   { ease: easeOutQuad });
}

function isInViewportView(boundingBox) {
  const viewportWidth = (window.innerWidth || document.documentElement.clientWidth);
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (boundingBox.top >= 0 && 
    boundingBox.left >= 0 && 
    boundingBox.right <= viewportWidth && 
    boundingBox.bottom <= viewportHeight);
}

let scrollEventAdded = false;
function HomePage(props) {
  // value here serves as the index for the tabs
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if(!scrollEventAdded) {
      scrollEventAdded = true;
      window.addEventListener("scroll", () => { 
        const aboutMe = document.querySelector("#about_me");
        const projects = document.querySelector("#projects");
        const aboutMeBoundBox = aboutMe.getBoundingClientRect();
        const projectsBoundBox = projects.getBoundingClientRect();
        if(isInViewportView(aboutMeBoundBox)) {
          setValue(0);
        } else if(isInViewportView(projectsBoundBox)) {
          setValue(1);
        }
      });
    }
  });
  
  return(
    <div>
      <AppBar position="sticky" color="primary">
        <Tabs 
          centered={true}
          value={value} 
          onChange={(event, newValue) => { console.log('newValue: ',newValue); setValue(newValue); }}>
          <Tab label="About Me" 
               disableRipple 
               onClick={() => { scrollEaseOutById("about_me"); setValue(0); }}/>
          <Tab label="Projects" 
               disableRipple 
               onClick={ () => { scrollEaseOutById("projects"); setValue(1); } }/>
        </Tabs>
      </AppBar>
      <br/>
      <div id="about_me">
        {props.children}
        <br/>
        <br/>
        <Container maxWidth="md">
          <Paper elevation={0}>
            <Typography>
              I got my first exposure to programming at my high school's AP Comp Sci Course and since then I have gained a deep interest in building software to entertain and help people. Below are my projects I've done during my spare time, game jams, and school projects:
            </Typography>
          </Paper>
        </Container>
      </div>
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
      <Container maxWidth="md" id="projects">
        <Typography variant="h2">Projects</Typography>
      </Container>
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
    </div>
  );
}

export default HomePage;