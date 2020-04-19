import React, { Component } from 'react'


export default class Todoitem extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between">
                <h6 className="text-capitalize">Title</h6>
                <div>
                    <span className="text-success mx-2"><i className="fas fa-edit"/></span>
                    <span className="text-danger mx-2"><i className="fas fa-trash"/></span>
                </div>
            </li>
        )
    }
}
