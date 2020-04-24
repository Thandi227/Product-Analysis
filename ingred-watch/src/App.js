import React, {Component} from 'react';


class App extends Component() {
    constructor (props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    }
    
    componentDidMount (){
      fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=cosmetic-ingredient-database-ingredients-and-fragrance-inventory&facet=update_date&facet=restriction&facet=function')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json, 
        })
      })
    }

    render () {
      var {isLoaded, items } = this.state;
      if(!isLoaded){
        return <div>Loading...</div>
      }

      else{
        return (
         <div className="App">
           Data has loaded
           
           </div>
        );
      }
      return (
        <div className="App">

        </div>
      );
    }
    

}

export default App;
