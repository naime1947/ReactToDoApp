import React, { Component } from 'react'
import Todoitem from './todoitem'

export default class Todolist extends Component {
    render() {
        const {items} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-center text-capitalize" >Todo List</h3>
                {
                    items.map(item=>{  
                        return  <Todoitem key={item.id} title={item.title}/>
                    })
                }
                
                
                <button className="btn btn-danger btn-block mt-5 text-capitalize" >Clear All</button>
            </ul>
        )
    }
}
