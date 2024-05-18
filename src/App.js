import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables for first name, last name, and full name
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [fullName, setFullName] = useState('');

  // Function to handle changes in input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setName(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Check if both first name and last name are provided
    if (name.firstName && name.lastName) {
      // Combine first name and last name to form full name
      setFullName(`${name.firstName} ${name.lastName}`);
      // Clear the first name and last name fields
      setName({ firstName: "", lastName: "" });
    }
  }

  return (
    <div className="App">
      {/* Form to input first name and last name */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter your firstName:
          {/* Input field for first name */}
          <input
            type="text"
            name="firstName"
            value={name.firstName}
            placeholder="Enter your firstName"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Enter your lastName:
          {/* Input field for last name */}
          <input
            type="text"
            name="lastName"
            value={name.lastName}
            placeholder="Enter your lastName"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        {/* Button to submit the form */}
        <button type="submit">Submit</button>
      </form>
      
      {/* Display full name if it exists */}
      {fullName && <p>Your full name is: {fullName}</p>}
    </div>
  );
}

export default App;

