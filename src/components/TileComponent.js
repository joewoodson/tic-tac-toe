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
    let tileClassNames = classNames('tile-component', {reset: this.props.tileReset} , {x: this.props.xSelected.indexOf(this.props.id) !== -1}, {o: this.props.oSelected.indexOf(this.props.id) !== -1});
    return <div onClick={() => {this.props.onTileSelect(this.props.id); setTimeout(() => this.props.ai(2), .1)}} className={tileClassNames}></div>
  }
}

TileComponent.displayName = 'TileComponent';

// Uncomment properties you need
// TileComponent.propTypes = {};
// TileComponent.defaultProps = {};

export default TileComponent;
