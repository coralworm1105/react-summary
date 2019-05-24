import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(value) {
    this.setState({ filterText: value });
  }
  handleInStockChange(value) {
    this.setState({ inStockOnly: value });
  }
  render() {
    return (
      <div className="autoComplete">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onInStockChange={this.handleInStockChange}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          productList={this.props.data}
        />
      </div>
    );
  }
}
