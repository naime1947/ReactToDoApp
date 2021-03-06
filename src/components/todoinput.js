import React, { Component } from 'react'


export default class Todoinput extends Component {
    
    render() {
        const {title,editItem,hadleChange,handleSubmit} = this.props;
        return (
            <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book"/>
                    </div>
                </div>
                <input type="text" 
                placeholder="Enter a todo" 
                className="form-control"
                value={title}
                onChange={hadleChange}
                ></input>
            </div>
        <button className={editItem?"btn btn-success btn-block mt-3 text-capitalize":"btn btn-primary btn-block mt-3 text-capitalize"} 
        type="submit"
        disabled={title.length>0 ? false:true}>{  editItem? 'Edit' : 'Add'  }</button>
            </form>
            </div>
        )
    }
}
