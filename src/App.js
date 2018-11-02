import React, { Component } from 'react'
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      currentProduct: {product_name:"Mega poop",
    product_price:420,
  product_imgurl:"some url"}
    }

    this.getInventory = this.getInventory.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }

  // Get the products in the inventory when the app is loaded
  componentDidMount() {
    this.getInventory();
  }

  // GET request to retrieve all products
  getInventory() {
    axios.get('/api/inventory')
      .then(response => 
        this.setState({ inventory: response.data })
      )
  }

  // Handles updating a product
  editProduct(product) {
    //console.log('set current product')
    //console.log(product)
    this.setState({
      currentProduct: product
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form product={this.state.currentProduct} getInventory={this.getInventory} editProduct={this.editProduct}/>
        <Dashboard inventory={this.state.inventory} editProduct={this.editProduct} getInventory={this.getInventory}/>
      </div>
    );
  }
}

export default App
