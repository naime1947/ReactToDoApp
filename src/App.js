import React, { Component } from 'react'
import Todolist from './components/todolist'
import Todoinput from './components/todoinput'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4 '>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <Todoinput/>
            <Todolist/>
          </div>
        </div>
      </div>
    )
  }
}
