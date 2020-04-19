import React, { Component } from 'react'
import Todolist from './components/todolist'
import Todoinput from './components/todoinput'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid/v1'

export default class App extends Component {
  state = {
    items:[],
    id:uuid(),
    title:"",
    editItem:false
  }
  
  handleChange = (e)=>{
    this.setState({
      title: e.target.value
      });
    };

  handleSubmit = (e)=>{
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.title
    };
    let updatedItems = [];
    if(this.state.editItem){
      const index = this.state.items.findIndex(item=>item.id === this.state.id);
      const newArray = [...this.state.items];
      newArray[index] = newItem;
      updatedItems = newArray;
    }else{
      updatedItems = [...this.state.items, newItem];
    }
    
    this.setState({
      items:updatedItems,
      id:uuid(),
      title:'',
      editItem:false
    });
  };
  
  handleClear = (e)=>{
    this.setState({
      items:[],
      editItem:false
    })
  }
  handleDelete=(id)=>{
    const filteredItems = this.state.items.filter(item=> item.id!==id);
    this.setState({
      items:filteredItems,
      editItem:false
    })
  };
  handleEdit = (id)=>{
    const filteredItem = this.state.items.find(item=>item.id===id);
   
    this.setState({
      id:id,
      title:filteredItem.title,
      editItem:true
    })
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4 '>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <Todoinput title={this.state.title} editItem={this.state.editItem} 
            hadleChange={this.handleChange}
            handleSubmit = {this.handleSubmit} />
            <Todolist items={this.state.items} 
            handleClear={this.handleClear} 
            handleDelete = {this.handleDelete}
            handleEdit = {this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}
