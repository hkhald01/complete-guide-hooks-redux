import React, { Component } from 'react';

export default class TaskItem extends Component {
 constructor(props) {
  super(props);
  this.state = {
   task: this.props.taskItem.task,
   isEditing: false,
  };
 }

 setEditingState = (isEditing) => {
  this.setState({ isEditing });
 };
 deleteTask = () => {
  this.props.deleteTask(this.props.id);
 };
 handleChange = (event) => this.setState({ task: event.target.value });
 handleSubmit = (event) => {
  event.preventDefault();
  this.props.editTask(this.props.id, this.state.task);
  this.setState({ isEditing: false });
 };

 toggleTask = () => {
  this.props.toggleTask(this.props.id);
 };
 render() {
  return (
   <tr>
    {this.state.isEditing ? (
     <>
      <td>
       <form onSubmit={this.handleSubmit}>
        <input value={this.state.task} onChange={this.handleChange} autoFocus />
       </form>
      </td>
      <td>
       <button type="submit" onClick={this.handleSubmit} className="save">
        Save
       </button>
       <button onClick={() => this.setEditingState(false)} className="back">
        Back
       </button>
      </td>
     </>
    ) : (
     <>
      <td className="task" onClick={this.toggleTask}>
       <input
        type="checkbox"
        checked={this.props.taskItem.isCompleted}
        defaultChecked={false}
       />
       <span
        className={
         this.props.taskItem.isCompleted ? 'completed' : 'not-completed'
        }
       >
        {this.props.taskItem.task}
       </span>
      </td>
      <td>
       <button onClick={() => this.setEditingState(true)} className="edit">
        Edit
       </button>
       <button onClick={this.deleteTask} className="delete">
        Delete
       </button>
      </td>
     </>
    )}
   </tr>
  );
 }
}
