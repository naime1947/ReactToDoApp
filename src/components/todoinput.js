import React, { Component } from 'react'


export default class Todoinput extends Component {
    
    render() {
        const {item,hadleChange} = this.props;
        return (
            <div className="card card-body my-3">
            <form>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book"/>
                    </div>
                </div>
                <input type="text" 
                placeholder="Enter a todo" 
                className="form-control"
                value={item}
                onChange={hadleChange}
                ></input>
            </div>
            <button className="btn btn-primary btn-block mt-3 text-capitalize" type="submit">add item</button>
            </form>
            </div>
        )
    }
}
