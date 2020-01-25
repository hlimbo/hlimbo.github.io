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
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import GameBoxesLayout from './ContentLayout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

// credits: https://gist.github.com/gre/1650294
const easeOutQuad = t => t*(2-t);

function scrollLinearlyById(id) {
  scrollIntoView(
    document.getElementById(id)
  );
}

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

function TransitionComponent(props) {
  return (
    <section id="default-example">
      <div id="example-element" style={{
          padding: '1rem',
          borderRadius: '.5rem',
          width: '100%',
          transition: 'all 2s'
      }}>
        {props.children}
      </div>
    </section>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

let scrollEventAdded = false;
function HomePage(props) {
  // value here serves as the index for the tabs
  const [value, setValue] = React.useState(0);
  const classes = makeStyles();
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
               onClick={() => { scrollLinearlyById("about_me"); setValue(0); }}/>
          <Tab label="Projects" 
               disableRipple 
               onClick={ () => { scrollLinearlyById("projects"); setValue(1); } }/>
        </Tabs>
      </AppBar>
      <br/>
      <div>
        {props.children}
        <br/>
        <br/>
        <Container maxWidth="md">
          <Typography>
            I got my first exposure to programming at my high school's AP Comp Sci Course and since then I have gained a deep interest in building software to entertain and help people. I'm known to be a jack of all trades due to my breadth of knowledge of various programming languages such as:
          </Typography>
          <Container maxWidth="md">
            <Paper elevation={0} style={{marginBottom: "50px", marginTop: "50px"}}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/cSharplogo.png" style={{ width: "50px", height: "50px", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/JavaScript-logo.png" style={{ width: "50px", height: "50px", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/javaLogo.png" style={{ width: "50px", height: "50px", position: "relative", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/pythonLogo.png" style={{ width: "50px", height: "50px", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/rubyLogo.png" style={{ width: "50px", height: "50px", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/kotlinLogo.jpg" style={{ width: "50px", height: "50px", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/cLogo.png" style={{ width: "50px", height: "50px", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{width: "60px", height: "60px"}}>
                    <CardMedia component="img" image="images/cPlusPlusLogo.png" style={{ width: "50px", height: "50px", position: "relative", left: "10%", top: "10%"}}/>
                  </Card>
                </Grid>
              </Grid>  
            </Paper>
          </Container>
          <Typography>
            I'm open to learning different technologies to solve various problems with a focus on:
          </Typography>
          <List>
            <ListItem>
              <Typography>
                - Backend Development
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                - Game Development
              </Typography>
            </ListItem>
          </List>
        </Container>
      </div>
      <Container maxWidth="md">
        <Typography variant="h2" id="projects">Projects</Typography>
        <GameBoxesLayout/>
      </Container>
    </div>
  );
}

export default HomePage;