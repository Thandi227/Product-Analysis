import React, { Component } from 'react';
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';

//Here my component is being imported from the package react, this is important because it converts the class into a component. This is going to help with props.

class Search extends Component {

//Im using props because they allow me to pass data from one component to another component, but since props are read-only I need to use state because it is what makes my React components interactive. This helps so that I can have conditional rendering in my react app.  Also, when my state changes, then the corresponding react component gets rendered again. 

   constructor(props){
       super(props)
       this.state = {
           query:'',
           loading: false
       };
   }

//I used setState here because this is where the react app is being told that components and children of components need to be rerendered.  
changeHandle = event => {
    this.setState({[event.target.name]:event.target.value})
}
//cite:https://reactjs.org/docs/forms.html 

submitHandle = event => {
     event.preventdefault ()
     console.log(this.state)
     axios.post('http://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty', this.state)
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
        
        <h2>products</h2>
              
          <form onSubmit={this.submitHandler}>
              <div className="search-tag" htmlFor="search-input">
                  <input 
                  type= "text" 
                  name= "name" 
                  id ="search-input"
                  value= {name}
                  placeholder = "Search Product Name..."
                  onChange= {this.changeHandler}
                  />
{/* Onchange lets me know that whenever a form field is changed, then this event needs to fire. React relies on the onchange events to handle what the user inputs in real time. I use value here to set the value of the component 
  
cite: https://reactjs.org/docs/dom-elements.html
    
    */
}
               
                  <button type="submit"> <SearchIcon /> </button>

                  {/* Button is used to submit the request */}
              </div>
          </form>
        </div>
     )
   }
}

export default Search