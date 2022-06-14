import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
 render() {
  return (
   <table>
    <thead>
     <tr>
      <th>Task</th>
      <th>Actions</th>
     </tr>
    </thead>
    <tbody>
     {this.props.tasks.map((task, index) => (
      <TaskItem
       taskItem={task}
       key={index}
       id={index}
       deleteTask={this.props.deleteTask}
       editTask={this.props.editTask}
       toggleTask={this.props.toggleTask}
      />
     ))}
    </tbody>
   </table>
  );
 }
}
