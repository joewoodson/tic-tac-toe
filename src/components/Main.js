require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Board from './BoardComponent';

// ToDo
// style grid
// - DRY!
// -better symbols

class AppComponent extends React.Component {
  render() {
    return (
      <Board />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
