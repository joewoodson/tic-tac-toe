require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Tile from './TileComponent';

// ToDo
// style grid
// -check selected tile array for winning combination
// - DRY!
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
  hasNum(arr, nums) {
    let hasNum = true;

    for (let i = 0; i < nums.length; i++) {
      if (arr.indexOf(nums[i]) < 0) hasNum = false;
    }
    return hasNum;

  }
  checkWinner(arr) {
    if (this.hasNum(arr, [1,2,3])) console.log('winner!');
  }
  onTileSelect(tile) {
    let activePlayer = this.state.activePlayer;
    let selectedArr = this.state.activePlayer + 'Selected';
    let newArr = this.state[selectedArr].concat(tile.props.id);

    if (tile.state.enabled) {
      tile.setState({ [activePlayer]: true});
      // alternate activePlayer between x and o after select
      this.setState({ activePlayer : activePlayer == 'x' ? 'o' : 'x' });
      this.setState({ [selectedArr]: newArr });
      this.checkWinner(newArr);
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
