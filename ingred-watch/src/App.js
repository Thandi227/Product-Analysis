import React, { Component } from 'react';
import './App.css'
import Search from './components/Search.js'
import Product from './components/Product.js'

class App extends Component {
   
   render (){
     return(
        <div classname = "App"> 
        <Search />
        <Product />
        </div>
     );
   }
}

export default App;