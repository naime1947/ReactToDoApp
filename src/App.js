import React, { Component } from 'react'
import Todolist from './components/todolist'
import Todoinput from './components/todoinput'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid/v1'

export default class App extends Component {
  state = {
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  }
  
  handleChange = (e)=>{
    this.setState({
      item: e.target.value
      });
    };

  handleSubmit = (e)=>{
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items:updatedItems,
      id:uuid(),
      item:"",
      editItem:false
    });
  };
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4 '>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <Todoinput item={this.state.item} 
            hadleChange={this.handleChange}
            handleSubmit = {this.handleSubmit} />
            <Todolist items={this.state.items} />
          </div>
        </div>
      </div>
    )
  }
}
