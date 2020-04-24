import React, { Component } from 'react';
import axios from 'axios'

//
class Search extends Component {
   constructor(props){
       super(props)
       this.state = {
           function:''
       }
   }

   changeHandler = e => {
       this.setState({[e.target.name]:e.target.value})
   }

   submitHandler = e => {
        e.preventdefault ()
        console.log(this.state)
        axios.post('http://makeup-api.herokuapp.com/api/v1/products.json?brand=glossier', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
     
    }

   render (){
      const {name} =this.state
     return(
        <div> 
          <form onSubmit={this.submitHandler}>
              <div>
                  <input 
                  type= "text" 
                  name= "name" 
                  value= {name} 
                  onChange= {this.changeHandler}
                  />

                  <button type="submit"> Submit </button>
              </div>
          </form>
        </div>
     )
   }
}

export default Search