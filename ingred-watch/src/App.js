import React, { Component } from 'react';
import './App.css'
import Search from './components/search.js'
import Product from './components/product.js'
import NavBar from './components/navBar.js'


//Here my component is being imported from the package react, this is important because it converts the class into a component. 

// I Chose to use class components because if i wanted to used local state, different lifecycle hooks,etc. I could.
class App extends Component {



//I'm using render here because I want to render different types of HTML elements into the DOM once the logic has been implemented 
   render (){

//Within the return function there are class based child components (Search and Product) that are being rendered inside the parent component, APP
     return(
        <div classname = "App"> 
        <Search />    
        <Product />
        <navBar />
        </div>
     );
   }
}

export default App;