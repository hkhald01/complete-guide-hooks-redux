import { useState } from 'react';
const NewCounter = () => {
 const [count, setCount] = useState(0);
 const [previousClicks, setPreviousClicks] = useState(0);
 const increase = () => {
  setCount((prev) => prev + 1);
 };
 const inputChangeHandler = (event) => {
  setPreviousClicks(Number(event.target.value));
 };
 return (
  <div>
   <label>
    Previous clicks:
    <input type="text" value={previousClicks} onChange={inputChangeHandler} />
   </label>
   <p>You clicked {previousClicks + count} times</p>
   <button onClick={increase}>Click me</button>
  </div>
 );
};
export default NewCounter;
