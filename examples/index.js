import React, { Component } from 'react';
import { render } from 'react-dom';
import Progress from '../src/index';
import './assets/scss/index.scss';

class App extends Component {
  render() {
    return (
      <div className="examples">
        <Progress type="pie" percent={60} />{' '}
      </div>
    );
  }
}

render(<App />, document.querySelector('#app'));
