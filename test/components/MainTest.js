/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Main from 'components/Main';

describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = createComponent(Main);
  });

  it('should have its component name as default className', () => {
    expect(MainComponent.props.className).to.equal('index');
  });

  it('should begin with count state of 0', () => {
    // expect(MainComponent.state.count).to.equal(0);
  });
});

describe('Increment Count Function', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = createComponent(Main);
  });

  // it('should increment count by one', () => {
  //   MainComponent.state.count = 0;
  //   MainComponent.incrementCount();
  //
  //   expect(state.count).to.equal(1);
  // });
});
