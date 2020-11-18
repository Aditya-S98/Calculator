import React from 'react';
import {add, sub, mult, div} from './Calc';

function App() {
   return(
      <>
         <ul>
            <li>Sum of two numbers is: {add(3,4)}</li>
            <li>Subtraction of two numbers is: {sub(3,4)}</li>
            <li>Multiplication of two numbers is: {mult(3,4)}</li>
            <li>Division of two numbers is: {div(3,4)}</li>
         </ul>
      </>
   );
}

export default App;