import NewCounter from './NewCounter';
import Counter from './Counter';
import UserInfo from './UserInfo';
import NewUserInfo from './NewUserInfo';
import Layout from './Layout';
import MainContent from './MainContent';
import UserList from './UserList';
import React from 'react';

import './App.css';

function App() {
 const [toggle, setToggle] = React.useState(false);
 return (
  <div className="App">
   <button onClick={() => setToggle(!toggle)}>show</button>
   {toggle && (
    <>
     <Counter />
     <NewCounter />
     <UserInfo />
     <NewUserInfo />
     <Layout>
      <MainContent />
     </Layout>
    </>
   )}
   <UserList />
  </div>
 );
}

export default App;
