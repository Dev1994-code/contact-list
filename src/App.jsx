import React, { useState, useEffect } from 'react';
import "./contact.css";
import { ContactCard } from './ContactCard';
//import Contact from './contact';

function App() { 
    const [results, setResults] =useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(data => {
          console.log(data); // Here, "data" is defined
          setResults(data.results); // Assuming "setResults" is a state update function
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.log("Error:", error);
        }); 
    }, [])
    
    return (
        <div>
            {results.map((results, index) => (
                <ContactCard
                    key={index}
                    img={results.picture.large}
                    name={results.name.first}
                    email={results.email}
                    age={results.dob.age}
                />
            ))}
        </div>
    );
}

export default App;









































