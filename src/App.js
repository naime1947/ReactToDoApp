import React, { Component } from 'react'
import Todolist from './components/todolist'
import Todoinput from './components/todoinput'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

export default class App extends Component {
  state = {
    items:[],
    id:0,
    item:"",
    editItem:false
  }
  
  handleChange = (e)=>{
    this.setState({
      item: e.target.value
      }
    )
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4 '>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <Todoinput item={this.state.item} hadleChange={this.handleChange} />
            <Todolist/>
          </div>
        </div>
      </div>
    )
  }
}
