import React, {useState, useEffect} from 'react';
import '../App.css';
import Backend from "../Backend"

const View = () => {
    // State to store the list of equations
    const [equations, setEquations] = useState([]);

    useEffect(() => {
        // Call getEquations and update the state with the fetched data
        Backend.getEquations().then(data => {
            console.log(data)
            setEquations(data);
        }).catch(error => {
            console.error("Failed to fetch equations:", error);
            // Handle error state as needed
        });
    }, []); // Empty dependency array means this effect runs once on mount

    const equationClick = (id) => {
        alert(id)
    }

    return (
        <div>
            <h1>EQUATION LIST IS BELOW</h1>
            <div id="equation-list">
                <hr/>
                <ul>
                    {equations.map((equation, index) => (
                        <li key={index}>
                            <span class="fake-link"
                                  onClick={() => equationClick(equation.id)}>Equation {equation.id}</span> - {equation.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default View;
