import './App.css';
import "//unpkg.com/mathlive"; // math live editable math field
import { useState } from "react";

const View = () => {
  const [value, setValue] = useState("f(x) = \\frac{2x}{3}");

  return (
    <div className="App" style={{ backgroundColor: '#ADD8E6' }}>
      <h1>Math Expression Editor</h1> {"Your Expression: "}
      <math-field
        onInput={evt => setValue(evt.target.value)}
      >
        {value}
      </math-field>
      <p>Value: {value}</p>
    </div>
  );
}

export default View;
