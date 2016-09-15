require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Tile from './TileComponent';

// ToDo
// style outside block
// -logic for selected tile arrays
// -check selected tile array for winning combination
// -better symbols

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
    let activePlayer = this.state.activePlayer;

    if (tile.state.enabled) {
      tile.setState({ [activePlayer]: true});
      // alternate activePlayer between x and o after select
      this.setState({ activePlayer : activePlayer == 'x' ? 'o' : 'x' });
    }
    tile.setState({ enabled: false });

  }
  render() {
    let tileList = []
    for (let i = 1; i <= 9; i++) {
      let tile = <Tile onTileSelect={this.onTileSelect.bind(this)} id={i} key={i}/>;
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
