import React, { Component } from 'react'


export default class Todoinput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
            <form>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book"/>
                    </div>
                </div>
                <input type="text" placeholder="Enter a todo" className="form-control"></input>
            </div>
            <button className="btn btn-primary btn-block mt-3" type="submit">add item</button>
            </form>
            </div>
        )
    }
}
