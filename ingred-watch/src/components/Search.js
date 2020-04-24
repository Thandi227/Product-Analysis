import React, { Component } from 'react';
import axios from 'axios'

//Here my component is being imported from the package react, this is important because it converts the class into a component. This is going to help with props.

class Search extends Component {

//Im using props because they allow me to pass data from one component to another component, but since props are read-only I need to use state because it is what makes my React components interactive. This helps so that I can have conditional rendering in my react app.  Also, when my state changes, then the corresponding react component gets rendered again. 

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

//I'm using render here because I want to render different types of HTML elements into the DOM once the logic has been implemented 
//Once the state changes it is being passed down as props to the child component and making the app render itself agin
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