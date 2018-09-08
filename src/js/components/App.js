import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Result from './Result';
import Keys from './keys';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Calculator'
    };
  }

  render() {
    return (
      <Fragment>
        <Result />
        <li className="list-style-none">
          <Keys type="number" value="1" />
          <Keys type="number" value="2" />
          <Keys type="number" value="3" />
          <Keys type="clear" value="C" />
        </li>
        <li className="list-style-none">
          <Keys type="number" value="4" />
          <Keys type="number" value="5" />
          <Keys type="number" value="6" />
          <Keys type="operation" value="+" />
        </li>
        <li className="list-style-none">
          <Keys type="number" value="7" />
          <Keys type="number" value="8" />
          <Keys type="number" value="9" />
          <Keys type="operation" value="-" />
        </li>
        <li className="list-style-none">
          <Keys type="number" value="." />
          <Keys type="number" value="0" />
          <Keys type="operation" value="=" />
          <Keys type="operation" value="*" />
        </li>
      </Fragment>
    );
  }
}

export default App;
