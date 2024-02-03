//import { parse, evaluate } from '@cortex-js/compute-engine';
import './App.css';
import "//unpkg.com/mathlive"; // math live editable math field
import {useState } from "react";

const View = () =>{
  const initialValue = "f(x) = \\frac{2x}{3}";
  const [value, setValue] = useState(initialValue);


  // parse the value 
  //console.log(expr);
// parses the expression into ["Element", ["Subtract", ["Power", 2, 11] , 1], "PrimeNumber"]

//console.log(evaluate(expr));
// evaluates the expression and verifies for "False"
  return (
    
    <div className="App">

      <math-field
        onInput = {evt => setValue(evt.target.value)}
        >{value}</math-field>
        <p>Value: {value}</p>
    </div>
  );
  }
export default View;
