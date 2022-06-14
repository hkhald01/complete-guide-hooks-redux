import React, { Component } from 'react';

export default class CreateTask extends Component {
 constructor(props) {
  super(props);
  this.state = { task: '' };
 }
 handleChange = (event) => {
  this.setState({ task: event.target.value });
 };
 handleSubmit = (event) => {
  event.preventDefault();
  this.props.createTask(this.state.task);
  this.setState({ task: '' });
 };

 render() {
  return (
   <form onSubmit={this.handleSubmit}>
    <input
     type="text"
     placeholder="Enter task"
     onChange={this.handleChange}
     value={this.state.task}
     autoFocus
    />
    <button type="submit" className="add">
     Add
    </button>
   </form>
  );
 }
}
