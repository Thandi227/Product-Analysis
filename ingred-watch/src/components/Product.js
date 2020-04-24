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
                    products.length ?
                    products.map(post => <div key={post.id}> {post.title}</div>) :
                    null
                }
                {errorMsg ? <div> {errorMsg} </div>:null}
            </div>
        )
    }
}

export default Product
