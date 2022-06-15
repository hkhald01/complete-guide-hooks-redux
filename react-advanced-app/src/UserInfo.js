import React, { Component } from 'react';

export default class UserInfo extends Component {
 constructor(props) {
  super(props);
  this.state = {
   user: {},
  };
 }

 async fetchUser() {
  try {
   const userJson = await fetch('https://jsonplaceholder.typicode.com/users/1');
   const user = await userJson.json();
   return user;
  } catch (error) {
   console.error(console.error);
  }
 }
 async componentDidMount() {
  const data = await this.fetchUser();
  this.setState({ ...this.state, user: data });
 }
 render() {
  return (
   <div>
    UserInfo: <br />
    Name: {this.state.user.name} <br />
    Email: {this.state.user.email}
   </div>
  );
 }
}
