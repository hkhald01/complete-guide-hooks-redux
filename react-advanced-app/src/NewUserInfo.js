import React, { useEffect } from 'react';

const NewUserInfo = () => {
 const [user, setUser] = React.useState({});
 const [id, setId] = React.useState(1);
 const changeHandler = (e) => setId(e.target.value);
 useEffect(() => {
  console.log('useeffect run');
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
   .then((response) => response.json())
   .then((data) => setUser(data))
   .catch((error) => console.error(error));
  return () => {
   console.log('cleanup');
  };
 }, [id]);

 return (
  <div className="user">
   UserInfo:
   <input type="text" value={id} onChange={changeHandler} />
   <br />
   Name: {user.name} <br />
   Email: {user.email}
  </div>
 );
};
export default NewUserInfo;
