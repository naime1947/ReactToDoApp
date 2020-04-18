import React, { Component } from 'react'
import Todolist from './components/todolist'
import Todoinput from './components/todoinput'

export default class App extends Component {
  render() {
    return (
      <div>
        <Todoinput/>
        <Todolist/>
      </div>
    )
  }
}
