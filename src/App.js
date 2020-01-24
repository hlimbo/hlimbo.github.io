import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import HomePage from './HomePageWIP';
import Unity, { UnityContent } from 'react-unity-webgl';


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
      <Paper>
        <Container maxWidth="md">
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
    //return <HomePage/>;
  }
}

export default App;
