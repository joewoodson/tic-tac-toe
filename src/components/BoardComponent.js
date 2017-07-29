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
      turn: 0,
      activePlayer: 'x',
      xSelected: [],
      oSelected: [],
      winnerMessage: '',
      disabledTiles: []
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
  onTileSelect(id) {
    if (this.state.gameState !== 'done') {
      let activePlayer = this.state.activePlayer;
      let selectedArr = this.state.activePlayer + 'Selected';
      let newArr = this.state[selectedArr].concat(id);

      if (this.state.disabledTiles.indexOf(id) === -1) {
        // tile.setState({ [activePlayer]: true});
        // this.setState({ [`${activePlayer}Selected`]: this.state.oSelected.concat(id) })
        // alternate activePlayer between x and o after select
        this.setState({
          activePlayer : activePlayer == 'x' ? 'o' : 'x',
          [selectedArr]: newArr,
          turn: this.state.turn + 1
        });
        this.checkWinner(newArr, activePlayer.toUpperCase());
      }

      this.setState({
        disabledTiles: this.state.disabledTiles.concat(id)
      });

    }

  }
  onStart() {
    this.setState({
      tileReset: false
    });
    this.ai();
  }
  onReset() {
    this.setState({
      gameState: 'ready',
      tileReset: true,
      turn: 0,
      activePlayer: 'x',
      xSelected: [],
      oSelected: [],
      winnerMessage: '',
      disabledTiles: []
    });
  }
  ai(playerSelected) {
    switch (playerSelected) {
      case 1:
        this.onTileSelect(5);
        break;
      case 2:
        this.onTileSelect(1);
        break;
      default:
        this.onTileSelect(3);
    }
  }
  render() {
    let tileList = []
    for (let i = 1; i <= 9; i++) {
      let tile = <Tile onTileSelect={this.onTileSelect.bind(this)} tileReset={this.state.tileReset} id={i} key={i} disabled={this.state.disabledTiles.indexOf(i) !== -1} xSelected={this.state.xSelected} oSelected={this.state.oSelected} ai={this.ai.bind(this)} />;
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
        <span>{this.state.turn}</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
