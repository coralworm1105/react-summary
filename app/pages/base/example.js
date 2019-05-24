import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { } from 'antd'
// import {connect} from 'react-redux'
// import {} from '@actions/xxx'

// @connect((storeState)=>({}))
import { Button, List, Typography } from 'antd';
import Clock from '@components/clock/clock';
import AutoComplete from '@components/autoComplete/AutoComplete';

export default class app extends Component {
  static defaultProps={
  }

  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  // #region vscode 1.17的收缩代码块功能  业务代码


  // #endregion

  render() {
    const numbers = ['a', 'b', 'c', 'd', 'e'];
    const list = numbers.map(i =>
      <li key={i.toString()}>{i}</li>);
    const productList = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
      { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
      { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
      { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
      { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
      { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];
    return (
      <div className="page">
        示范页面
        <Clock />
        <Button type="primary">Primary</Button>
        <ul>{numbers.map(i => <li key={i.toString()}>{i}-1</li>)}</ul>
        <List
          bordered
          dataSource={numbers}
          renderItem={item => (
            <List.Item>{item}</List.Item>
          )}
        />
        <AutoComplete data={productList} />
      </div>
    )
  }
}
