const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


// Connect to database
const connection = mysql.createConnection({host: 'mariadb', user: 'root', password: 'password', database: 'math'});
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

const app = express();
app.use(cors())
app.use(express.json());

app.get("/api/equations", (req, res) => {
    const query = "SELECT id, description FROM MathEquations";

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching data from the database", err);
            return res.status(500).send('Failed to fetch equations from the database.');
        }
        // Send the results as JSON
        console.log("RESULTS: " + results)
        res.json(results);
    });
});


app.post("/api/equations", (req, res) => {
    const { equation, description } = req.body;
    if (!equation || !description)
        return res.status(400).send('Both equation and description are required.');

    const query = "INSERT INTO MathEquations (equation, description) VALUES (?, ?)";

    connection.query(query, [equation, description], (err, results) => {
        if (err) {
            console.error("Error inserting data into the database", err);
            return res.status(500).send('Failed to insert the equation into the database.');
        }
        res.status(201).send('Equation added successfully.');
    });
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});