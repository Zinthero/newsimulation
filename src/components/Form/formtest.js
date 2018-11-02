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
      this.priceInput = this.priceInput.bind(this);
    }
    componentDidMount(){
        axios.get('/api/products').then(response=>{
            this.setState({
                product_id:response.data,
                product_name:response.data,
                product_price:response.data,
                product_imgurl:response.data


            })
        })
    }
    handleChange = (val,key)=> {
        let obj = {}
            obj[key] = val
            this.setState(obj)
        
    }

    nameInput = () => {
        let {product_name}=this.stateaxios.post('/api/products', {product_name}).then(response=>{
            this.setState({
                product_name:''
            })
        })
    }
    priceInput = () => {
        let {product_price}=this.stateaxios.post('/api/products', {product_price}).then(response=>{
            this.setState({
                product_price:''
            })
        })
    }
    imageInput = () => {
        let {product_imgurl}=this.stateaxios.post('/api/products', {product_imgurl}).then(response=>{
            this.setState({
                product_imgurl:''
            })
        })
    }
    render(){
        let {product_id,product_imgurl,product_name,product_price} = this.state
        return(
            <div>
            <div>Name<input value={product_name} onChange={(e) => this.handleChange(e.target.value, 'product_name')}/></div>
            <div>Price<input value={product_price} onChange={(e) => this.handleChange(e.target.value, 'product_price')}/></div>
            <div>Image url<input value={product_imgurl} onChange={(e)=> this.handleChange(e.target.value, 'product_imgurl')}/></div>
            <div className='form-butons'>
            <button>Cancel</button>
            <button> Add to Invintory</button>
            </div>
            </div>
        )
    }
    
}

