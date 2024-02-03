import {ComputeEngine} from '@cortex-js/compute-engine';
import './App.css';
import "//unpkg.com/mathlive"; // math live editable math field
import {useState} from "react";
import EquationList from './components/EquationList.js'

const View = () => {
    const ce = new ComputeEngine();
    const [value, setValue] = useState("f(x) = \\frac{2}{3}");
    const [parsed, setParsed] = useState(JSON.stringify(ce.parse(value).toJSON()));

    return (
        <div className="App" style={{backgroundColor: '#ADD8E6'}}>
            <h1>Math Expression Editor</h1>

            <div id="math-field-container">
                <hr/>
                <math-field onInput={evt => {
                    setValue(evt.target.value);
                    setParsed(JSON.stringify(ce.parse(evt.target.value, {canonical: false}).toJSON()))
                }}>
                    {value}
                </math-field>
                <hr/>
                <div style={{textAlign: "left"}}>
                    <p><strong>Value:</strong> {value}</p>
                    <p><strong>Parsed:</strong> {parsed}</p>
                </div>
            </div>
            <EquationList/>
        </div>
    );
}

export default View;
