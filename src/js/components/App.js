import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import math from 'mathjs';
import Result from './Result';
import Keys from './keys';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'calculator',
      result: '0',
      expression: ''
    };
  }

  calculateClickHandler = () => {
    let evalExpression;
    try {
      evalExpression = math.eval(this.state.expression).toString();
    } catch (err) {
      evalExpression = err.toString();
    }
    this.setState({ result: evalExpression });
  };

  numberClickHandler = key => {
    this.setState({ expression: this.state.expression + key });
  };

  clearHander = () => {
    this.setState({ expression: '', result: 'cleared!!' });
  };

  render() {
    return (
      <Fragment>
        <h1>{this.state.title}</h1>
        <p>{this.state.expression}</p>
        <Result result={this.state.result} />
        <li className="list-style-none">
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '1')}
            value="1"
          />
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '2')}
            value="2"
          />
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '3')}
            value="3"
          />
          <Keys type="clear" handler={this.clearHander} value="C" />
        </li>
        <li className="list-style-none">
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '4')}
            value="4"
          />
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '5')}
            value="5"
          />
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '6')}
            value="6"
          />
          <Keys
            type="operation"
            handler={this.numberClickHandler.bind(this, '+')}
            value="+"
          />
        </li>
        <li className="list-style-none">
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '7')}
            value="7"
          />
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '8')}
            value="8"
          />
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '9')}
            value="9"
          />
          <Keys
            type="operation"
            handler={this.numberClickHandler.bind(this, '-')}
            value="-"
          />
        </li>
        <li className="list-style-none">
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '.')}
            value="."
          />
          <Keys
            type="number"
            handler={this.numberClickHandler.bind(this, '0')}
            value="0"
          />
          <Keys
            type="operation"
            handler={this.numberClickHandler.bind(this, '/')}
            value="/"
          />
          <Keys
            type="operation"
            handler={this.numberClickHandler.bind(this, '*')}
            value="*"
          />
        </li>
        <li className="list-style-none">
          <Keys
            type="equalTo"
            id="equalTo"
            handler={this.calculateClickHandler}
            value="="
          />
        </li>
      </Fragment>
    );
  }
}

export default App;
