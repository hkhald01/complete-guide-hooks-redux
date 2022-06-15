import React, { useReducer } from 'react';

const inital = {
 loading: false,
 users: [],
 error: '',
};
const reducer = (state, action) => {
 switch (action.type) {
  case 'USERS_REQUEST':
   return { ...state, loading: false };
  case 'USERS_SUCCESS':
   return { ...state, users: action.payload, loading: false, error: '' };
  case 'USERS_FAIL':
   return { ...state, error: action.payload, loading: false };
  default:
   return state;
 }
};

export default function UserList() {
 const [state, dispatch] = useReducer(reducer, inital);
 const { loading, error, users } = state;
 const loadUsers = async () => {
  dispatch({ type: 'USERS_REQUEST' });
  try {
   const data = await (
    await fetch('https://jsonplaceholder.typicode.com/users')
   ).json();
   dispatch({ type: 'USERS_SUCCESS', payload: data });
  } catch (err) {
   dispatch({ type: 'USERS_FAIL', payload: err.message });
  }
 };
 React.useEffect(() => {
  loadUsers();
 }, []);
 return (
  <div className="main">
   <h1>Users</h1>
   <button onClick={loadUsers}>Load Users</button>
   {loading ? (
    <div>Loading users...</div>
   ) : error ? (
    <div>Error: {error}</div>
   ) : (
    <table>
     <thead>
      <tr>
       <th>Username</th>
       <th>Email</th>
       <th>Phone</th>
       <th>Website</th>
      </tr>
     </thead>
     <tbody>
      {users.map((user) => (
       <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
       </tr>
      ))}
     </tbody>
    </table>
   )}
  </div>
 );
}
