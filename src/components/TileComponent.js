'use strict';

import React from 'react';

require('styles//Tile.css');
var classNames = require('classnames');

class TileComponent extends React.Component {
  constructor() {
	  super();
	  this.state = {
      enabled: true,
      x: false,
      o: false
    };
	}
  componentWillReceiveProps(nextProps) {
    if (nextProps.tileReset === true) {
      this.setState({
        x: false,
        o: false
      })
    } else if (nextProps.tileReset === false) {
      this.setState({ enabled: true })
    }
  }
  render() {
    let tileClassNames = classNames('tile-component', {x: this.state.x}, {o: this.state.o});
    return <div onClick={this.props.onTileSelect.bind(null, this)} className={tileClassNames}></div>
  }
}

TileComponent.displayName = 'TileComponent';

// Uncomment properties you need
// TileComponent.propTypes = {};
// TileComponent.defaultProps = {};

export default TileComponent;
