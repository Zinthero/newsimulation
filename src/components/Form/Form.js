import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state={
      product_id:null,
      product_name:'',
      product_imgurl:'',
      product_price:0

    }
    this.imageInput = this.imageInput.bind(this);
    this.nameInput = this.nameInput.bind(this);
    this.numberInput = this.numberInput.bind(this);
  }





  imageInput(e){
    var img = new Image()
    img.onload=() => this.setState({product_imgurl:e})
    img.src=e
  }


  nameInput(text){
    if(text.length<=20){
      this.setState({product_name:text})
    }
  }

  numberInput(val){
    this.setState({product_price:val})
  }

  numberSubmit(num) {
    num ? num = Number(num) : num = 0
    return Math.round(num)
  }

  handleSubmit(){
    let{product_name, product_imgurl, product_price} = this.state;
    let newproduct = {
      product_name,
      product_imgurl,
      product_price: this.numberSubmit(product_price)

    }
    axios.post('/api/product', newproduct)
    .then(res=>{
      this.props.getInventory();
      this.clearInputs()
    })
    .catch(err=> console.log('creation error', err))
  }

  handleEdit(){
    let{product_id, product_name, product_imgurl, product_price} = this.state;
    if(product_name){
      let product = {
        product_name,
        product_imgurl,
        product_price: this.numberSubmit(product_price)
      }
      axios.put(`/api/product/${product_id}`, product)
      .then(res=>{
        this.props.getInventory();
        this.clearInputs();
      })
      .catch(err => console.log('update error', err))
    }
    else{
      console.log('no name')
    }
  }

  clearInputs() {
    if (this.state.product_id) {
      this.props.editProduct({});
    }
    this.setState({
      product_id: null,
      product_name: '',
      product_imgurl: '',
      product_price: 0
    })
  }
  
  
  render() {
    return (
      <div className='form' id="form">
      <input type='text'/>
      <p>Product name</p>
      <input type='text' value={this.state.product_name} onChange={e=>this.nameInput(e.target.value)}/>
      <p> Product Price</p>
      <input type='text' value={this.state.product_price} onChange={e=> this.numberInput(e.target.value)}/>
      <button onClick={()=> this.clearInputs()}>Cancel</button>
      <div className='form_button-box'>
      {this.state.product_id
      ?<button onClick={()=> this.handleEdit()}> Save changes </button>
      :<button onClick={()=>this.handleSubmit()}>Add to inventory</button>
      
    }
    </div>
      
      </div>
    )
  }
}
