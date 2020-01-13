/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Pie from './Pie';

class Progress extends Component {
  render() {
    const { type, ...otherProps } = this.props;
    let process;
    if (type === 'pie') {
      process = <Pie {...otherProps} />;
    }
    return process;
  }
}

export default Progress;
