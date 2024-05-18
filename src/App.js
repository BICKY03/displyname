import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const[name,setName]=useState({firstName:"",lastName:""})
  const [fullName, setFullName] = useState('');

  function handleChange(event){
    const{name,value}=event.target;
    setName((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  function handleSubmit(event){
    event.preventDefault();
    if (name.firstName && name.lastName) {
      setFullName(`${name.firstName} ${name.lastName}`);
    }

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your firstName
          <input type="text" name="firstName" value={name.firstName} placeholder="Enter your firstName" onChange={handleChange}
          required/>
        </label>

        <label>
          Enter your lastNamtName
          <input type="text" name="lastName" value={name.lastName} placeholder="Enter your lastName" onChange={handleChange}
          required/>
        </label>
        <button type="submit" >Submit</button>
      </form>
      {fullName && <p>Your full name is: {fullName}</p>}
       
    </div>
  );
}

export default App;
