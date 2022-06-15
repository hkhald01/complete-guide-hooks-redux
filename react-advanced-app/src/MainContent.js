import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function MainContent() {
 return (
  <ThemeContextConsumer>
   {(context) => (
    <div className={`content ${context.theme} `.trim()}>
     <h1>Welcome to my app</h1>
     <p>Use Context API to share data between components</p>
    </div>
   )}
  </ThemeContextConsumer>
 );
}
