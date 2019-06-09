import React, { Component } from 'react';
import {shallow}  from 'enzyme';
import List from './List';
import Cart from './Cart';
import './App.css';


class App extends Component{
  state = {
    selectedProperties: []
  }

  addToCart = (event, index) => {
    let newSelectedProperties = this.state.selectedProperties;
    newSelectedProperties[index] = this.props.airBnbs[index]
    this.setState({selectedProperties: newSelectedProperties});
  }

  removeFromCart = (event, index) => {
    const newSelectedProperties = this.state.selectedProperties;
    delete newSelectedProperties[index];
    this.setState({selectedProperties: newSelectedProperties});
  }

  render(){
    return(
      <div className="app">
          <Cart selectedProperties={this.state.selectedProperties} removeFromCart={this.removeFromCart}></Cart>
          <List airBnbs={this.props.airBnbs} addToCart={this.addToCart}></List>
      </div>
    );
  }
}
export default App;
