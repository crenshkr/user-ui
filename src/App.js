import { useState, useEffect } from "react";

import "./App.css";
import { Cards } from "./components/Cards";

function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setusers(users));
  }, []);

  return (
    <div className="App">
      <Cards users={users} />
    </div>
  );
}

export default App;
