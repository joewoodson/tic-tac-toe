'use strict';

import React from 'react';

require('styles//Tile.css');

class TileComponent extends React.Component {
  render() {
    return <div onClick={this.props.onTileSelect.bind(null, this)} className="tile-component">{this.props.id}</div>
  }
}

TileComponent.displayName = 'TileComponent';

// Uncomment properties you need
// TileComponent.propTypes = {};
// TileComponent.defaultProps = {};

export default TileComponent;
