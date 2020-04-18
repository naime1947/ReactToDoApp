import React, { Component } from 'react'
import Todoitem from './todoitem'

export default class Todolist extends Component {
    render() {
        return (
            <div>
                <h1>hello i ma list hold item </h1>
                <Todoitem/>
            </div>
        )
    }
}
