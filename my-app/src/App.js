import React, {Component} from 'react';
import './App.css';
import {Route, HashRouter as Router} from 'react-router-dom'
import Nav from './Nav.js'
import Home from './Home.js'
import People from './People.js'
import PersonForm from './PersonForm.js'
import Axios from 'axios'

class App extends Component {
  
  constructor(){
    super()
    
    this.state = {
      names:[]
    }

    this.onDelete = this.onDelete.bind(this);
    this.onCreate = this.onCreate.bind(this)
  }

  onCreate(newName){
    const updatedNames = [...this.state.names, newName];
    this.setState({
      names: updatedNames
    })
  }

  onDelete(idx){
    const updatedNames = this.state.names.filter((item, _idx) => idx != _idx);
    this.setState({
      names: updatedNames
    })
  }
  
  async componentDidMount(){
    const namesArr=[];

    try{
      const api = await Axios.get('https://profs-star-wars.herokuapp.com/people');
      const response = api.data;
      for(let i=0;i<response.length;i++){
        namesArr.push(response[i].name);
      }
    }
    catch(err){
      console.log('There was an error')
    }

    this.setState({
      names:namesArr
    })
  }
  
  
  
  render(){    

    return(
      <Router>
          <h2>Star Wars CRD (no U)</h2>
          <Route render={() => <Nav names = {this.state.names}/>} />
          <Route exact path='/People' render={() => <People names = {this.state.names} onDelete = {this.onDelete}/>} />
          <Route exact path='/People/Create' render={()=> <PersonForm onCreate = {this.onCreate}/>} />
          <Route exact path='/Home' component = {Home} />  
      </Router>
    )
  }
}

export default App;
