import { useState, useEffect } from "react";

import "./App.css";
import { Cards } from "./components/Cards";
import { SelectionInfo } from "./components/SelectionInfo/SelectionInfo";

function App() {
  const [users, setusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("Justin Smith");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setusers(users));
  }, []);

  return (
    <div className="App">
      <div className="body">
        <div className="left-column">
          <SelectionInfo userName={selectedUser} />
        </div>
        <div className="right-column">
          <Cards users={users} setSelectedUser={setSelectedUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
