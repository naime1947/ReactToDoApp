import React, { Component } from 'react'
import Todoitem from './todoitem'

export default class Todolist extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-center text-capitalize" >Todo List</h3>
                <Todoitem/>
                <button className="btn btn-danger btn-block mt-5 text-capitalize" >Clear All</button>
            </ul>
        )
    }
}
