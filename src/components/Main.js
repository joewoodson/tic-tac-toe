require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Tile from './TileComponent';

// ToDo
// -flexbox 3x3 grid
// -disable tile after click
// -better symbols
// -logic for selected tile arrays
// -check selected tile array for winning combination

class AppComponent extends React.Component {
  constructor() {
	  super();
	  this.state = {
      activePlayer: 'x',
      xSelected: [],
      oSelected: []
    };
	}
  onTileSelect(tile) {
    let activePlayer = tile.props.activePlayer;

    tile.setState({ [activePlayer]: true});
    this.setState({ activePlayer : activePlayer == 'x' ? 'o' : 'x' })
  }
  render() {
    let tileList = []
    for (let i = 1; i <= 9; i++) {
      let tile = <Tile onTileSelect={this.onTileSelect.bind(this)} activePlayer={this.state.activePlayer} id={i} key={i}/>;
      tileList.push(tile);
    }

    return (
      <div className="board">
        {tileList}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
