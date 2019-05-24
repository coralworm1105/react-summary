import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockOnlyChange(e) {
    this.props.onInStockChange(e.target.value);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.filterText}
          placeholder="请输入关键词"
          onChange={this.handleFilterTextChange}
        />
        <div>
          <input id="inStockOnly"
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockOnlyChange}
          />
          <label>
            {' '}
            Only show products in stock
          </label>
        </div>
      </form>
    );
  }
}
