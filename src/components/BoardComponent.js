require('normalize.css/normalize.css');
require('styles/Board.css');

import React from 'react';
import Tile from './TileComponent';

class AppComponent extends React.Component {
  constructor() {
	  super();
	  this.state = {
      gameState: 'ready',
      tileReset: false,
      activePlayer: 'x',
      xSelected: [],
      oSelected: [],
      winnerMessage: ''
    };
	}
  hasNums(arr, nums) {
    let hasNums = true;

    for (let i = 0; i < nums.length; i++) {
      if (arr.indexOf(nums[i]) < 0) hasNums = false;
    }
    return hasNums;

  }
  checkWinner(arr, winner) {
    let winningArrs = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]
    ];

    for (let i = 0; i < winningArrs.length; i++) {
      if (this.hasNums(arr, winningArrs[i])) {
        this.setState({
          gameState:  'done',
          winnerMessage: `${winner} WINS!`
        });
      }
    }

  }
  onTileSelect(tile) {
    if (!this.state.tileReset && this.state.gameState !== 'done') {
      let activePlayer = this.state.activePlayer;
      let selectedArr = this.state.activePlayer + 'Selected';
      let newArr = this.state[selectedArr].concat(tile.props.id);

      if (tile.state.enabled) {
        tile.setState({ [activePlayer]: true});
        // alternate activePlayer between x and o after select
        this.setState({
          activePlayer : activePlayer == 'x' ? 'o' : 'x',
          [selectedArr]: newArr
        });
        this.checkWinner(newArr, activePlayer.toUpperCase());
      }

      tile.setState({ enabled: false });
    }

  }
  onStart() {
    this.setState({
      tileReset: false
    })
  }
  onReset() {
    this.setState({
      gameState: 'ready',
      tileReset: true,
      activePlayer: 'x',
      xSelected: [],
      oSelected: [],
      winnerMessage: ''
    });
  }
  render() {
    let tileList = []
    for (let i = 1; i <= 9; i++) {
      let tile = <Tile onTileSelect={this.onTileSelect.bind(this)} tileReset={this.state.tileReset} id={i} key={i}/>;
      tileList.push(tile);
    }

    return (
      <div className="board">
        {tileList}
        <div className="winner-message">
          {this.state.winnerMessage}
        </div>
        <div className="button-container" onClick={this.onStart.bind(this)}>
          <button className="start">Start</button>
        </div>
        <div className="button-container" onClick={this.onReset.bind(this)}>
          <button disabled={this.state.tileReset} className="reset">Reset</button>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
