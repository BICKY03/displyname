import "./index.css";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [hasFullName, sethasFullName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
    sethasFullName(true);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fname">Last Name:</label>
          <input
            type="text"
            id="lname"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {hasFullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}



