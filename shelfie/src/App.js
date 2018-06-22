import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Product from './component/Product/Product';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [12, 13, 14]
    }
  }
  
  getInv(){
    axios.get('/api/inventory').then(res=>{
      this.setState({
        inventory: res.data
      })
    })
  }
  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  
  render() {
    return (
      <div className="App">

        <Dashboard inv={this.state.inventory}/>
        <Form/>
        <Header/>
        <Product/>
      </div>
    );
  }
}

export default App;
