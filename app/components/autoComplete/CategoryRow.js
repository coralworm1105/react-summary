import React, { Component } from 'react';

export default class CategoryRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}
