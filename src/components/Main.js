require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Tile from './TileComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor() {
	  super();
	  this.state = {
      count: 0,
      activePlayer: 'x'
    };
	}
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  addActiveClass() {

  }
  onTileSelect(tile) {
    // this.addActiveClass();
    // console.log('clicked:' + this.props.id);
    console.log(tile.props.id);
  }
  render() {
    let tileList = []
    for (let i = 1; i <= 9; i++) {
      let tile = <Tile onTileSelect={this.onTileSelect} id={i} key={i}/>;
      tileList.push(tile);
    }

    return (
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" onClick={this.incrementCount.bind(this)} />
      //   <div className="count">Count: {this.state.count}</div>
      // </div>
      <div className="board">
        {tileList}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
