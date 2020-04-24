import React, { Component } from 'react'
import axios from 'axios'


class Product extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            products:[],
            errorMsg:''
        }
    }
//invoking get method on axios library
    componentDidMount () {
        axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')

//Here the state is being passed down as props to the child component
        .then(response => {
            console.log(response)
            this.setState({products: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg:'Something Went Wrong'})
        })  

    }
    render() {
        const { products, errorMsg } = this.state
        return (
            <div>
                List of Products
                {
                   products.map(product => (
                   <li key={product.id}>
                       Name: {product.name}
                   </li>
                   ))
                }
                {errorMsg ? <div> {errorMsg} </div>:null}
            </div>
        )
    }
}

export default Product
