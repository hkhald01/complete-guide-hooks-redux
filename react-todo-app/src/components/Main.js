import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

// const tasks = localStorage.getItem('tasks')
//  ? JSON.parse(localStorage.getItem('tasks'))
//  : [];
const tasks = localStorage.getItem('tasks') || [];
export default class Main extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   tasks: tasks,
  };
 }
 createTask = (task) => {
  if (task === '') {
   alert(`task can;'t be empty`);
   return;
  }
  tasks.push({ task, isCompleted: false });
  this.setState({ ...this.state, tasks });
  localStorage.setItem('tasks', JSON.stringify(tasks));
 };
 deleteTask = (id) => {
  tasks.splice(id, 1);
  this.setState({ ...this.state, tasks });
  localStorage.setItem('tasks', JSON.stringify(tasks));
 };
 editTask = (id, task) => {
  tasks[id].task = task;
  this.setState({ ...this.state, tasks });
  localStorage.setItem('tasks', JSON.stringify(tasks));
 };
 toggleTask = (id) => {
  console.log('first', id, tasks[id]);
  const taskItem = tasks[id];
  taskItem.isCompleted = !taskItem.isCompleted;
  this.setState({ ...this.state, tasks });
  localStorage.setItem('tasks', JSON.stringify(tasks));
 };
 render() {
  return (
   <div className="main">
    <h1>Todos</h1>
    <div className="content">
     <CreateTask createTask={this.createTask} />
     <br />
     <TaskList
      tasks={this.state.tasks}
      deleteTask={this.deleteTask}
      editTask={this.editTask}
      toggleTask={this.toggleTask}
     />
    </div>
   </div>
  );
 }
}
