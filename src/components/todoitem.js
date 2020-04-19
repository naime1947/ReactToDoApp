import React, { Component } from 'react'


export default class Todoitem extends Component {
    render() {
        const {title,handleDelete,handleEdit}=this.props;
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className="text-capitalize">{title}</h6>
                <div>
                    <span className="text-success mx-2" onClick={handleEdit} ><i className="fas fa-edit"/></span>
                    <span className="text-danger mx-2" onClick={handleDelete} ><i className="fas fa-trash"/></span>
                </div>
            </li>
        )
    }
}
