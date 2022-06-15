import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function Navbar(props) {
 return (
  <ThemeContextConsumer>
   {(context) => (
    <div>
     <div className="row">
      <div>React Context App</div>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
     </div>
    </div>
   )}
  </ThemeContextConsumer>
 );
}
