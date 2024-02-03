
const BASE_URL = 'http://localhost:3001/api';

class Backend {

    // Method to fetch all equations
    static getEquations() {
        return fetch(`${BASE_URL}/equations`, {
            method: 'GET',
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            console.log(response)
            return response.json();
        }).then(data => {
            console.log(data);
            return data;
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    // Method to post a new equation
    static postEquation(equation, description) {
        return fetch(`${BASE_URL}/equations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify the content type in the headers
            },
            body: JSON.stringify({ equation, description }), // Convert the JavaScript object to a JSON string
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json(); // Parse JSON response into JavaScript object
            })
            .then(data => {
                console.log('Success:', data); // Process success response
                return data; // Return the data for further processing
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
}

export default Backend;