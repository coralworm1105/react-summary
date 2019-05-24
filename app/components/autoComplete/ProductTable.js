import React, { Component } from 'react';
import ProductRow from './ProductRow';
import CategoryRow from './CategoryRow';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const productList = this.props.productList;
    let lastCategory = null;
    const rows = [];
    productList.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) return;
      if (inStockOnly && !product.inStock) return;
      if (product.category !== lastCategory) {
        rows.push(<CategoryRow category={product.category} key={product.category} />)
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category;
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
