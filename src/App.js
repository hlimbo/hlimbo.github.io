import React from 'react';
import HomePage from './HomePage';
import GameInfoPage from './GameInfoPage';
import 'typeface-roboto';

export default class App extends React.Component {
  render() {
    return (
      <GameInfoPage></GameInfoPage>
    );
    // return (<HomePage/>);
  }
}
