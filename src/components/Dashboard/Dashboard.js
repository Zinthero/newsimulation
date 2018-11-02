import React, { Component } from 'react'
import Product from './../Product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className='dashboard'>
      {this.props.inventory.map(el => {
        return <Product 
                  key={el.product_id} 
                  product={el} 
                  editProduct={this.props.editProduct}
                  deleteProduct={this.deleteProduct}
                />
      })}
    </div>

    )
  }
}
