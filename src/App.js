import React from 'react';
import logo from './logo.svg';
import './App.css';
import "animate.css";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import HomePage from './HomePageWIP';
import Unity, { UnityContent } from 'react-unity-webgl';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// add this inside of webpack.config.js located inside of node_modules directory
/*
        // ttf loader
        {
          test: /\.ttf$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './font/[hash].[ext]',
              },
            },
          ]
        }
*/
// Adding text is complicated af must inject a dependency into webpack but since i'm using create-react-app I can't modify webpack.config.js directly
// import Ubuntu from './fonts/Ubuntu/Ubuntu.ttf';

import 'typeface-roboto';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto'
  }
});

// find out what material-ui components I can use out of the box
// to build MVP
// embed MathNinja on my website as homepage for now!
// credit artists etc.....

// Container Component (Centers content horizontally)
// Does this work with react?
// https://www.npmjs.com/package/react-unity-webgl <- it works like magic :)
function Game() {    
  return (
    <Paper>
      <Container>
        <h2>MathNinja</h2>
        <Unity unityContent={this.unityContent} className="game-container"/>
      </Container>
      <section>
        <h1>How to Play</h1>
        <p>Use arrow keys to move. Spacebar to Jump.</p>
      </section>
      <section class="asset_credits">
        <h1>Asset Credits:</h1>
        <p><strong>Note: </strong> All art assets used in the game are placeholders. </p>
        <p>
          <ul>
            <li>Ninja (Spelunky) <a href="https://www.spriters-resource.com/fullview/56425/">https://www.spriters-resource.com/fullview/56425/</a></li>
            <li>tiles and background images by Franco Giachetti (<a href="http://www.ludicarts.com/free-game-platform-tileset/">http://www.ludicarts.com/free-game-platform-tileset/</a>) which is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></li>
          </ul>
        </p>
      </section>
    </Paper>
  );
}

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

const names = [ 'a Software Engineer', 'a UCI Graduate', 'Harvey Limbo'];

function IntroCard() {
  const [nameTagIndex, setNameTagIndex] = React.useState(0);

  // only gets called after all dom mutations happen
  React.useLayoutEffect(() => {
    animateCSS('.nameTag', 'slideInDown', () => {
      if(nameTagIndex < names.length - 1) {
        setTimeout(() => setNameTagIndex(nameTagIndex + 1), 1000);
      }
    });
  });

  return (
    <Container maxWidth="sm" align='center' id="about_me">
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h2">Hi I'm...</Typography>
        </Grid>
        <Grid item>
          <Paper square variant="outlined" style={{minWidth: "50vw"}}>
            <Typography align="center" 
                        variant="h2"
                        color="primary" 
                        className="nameTag">
                          {names[nameTagIndex]}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

class App extends React.Component {
  constructor(){
    super();

    this.unityContent = new UnityContent(
      'content/MathNinja_Release/Build/MathNinja_Release.json',
      'content/MathNinja_Release/Build/UnityLoader.js'
    );
  }

  render() {
    return (
      <HomePage>
        <IntroCard/>
      </HomePage>
    );
  }
}

export default App;
