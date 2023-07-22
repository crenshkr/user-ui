import { useState, useEffect, useReducer } from "react";

import "./App.css";
import { Cards } from "./components/Cards";
import { SelectionInfo } from "./components/SelectionInfo/SelectionInfo";

const initialState = {
  users: [],
  selectedUser: "",
  teamMembers: [],
  errorMessage: "",
  promptMessage: "Please Select Users",
};

function reducer(state, action) {
  if (action.type === "SET_ERROR_MESSAGE") {
    return {
      ...state,
      errorMessage: action.payload,
    };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [users, setusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // const [promptMessage, setPromptMessage] = useState("Please Select Users");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setusers(users));
  }, []);

  function handleOnCLick() {
    setTeamMembers(currentState => {
      switch (true) {
        case selectedUser === "":
          setErrorMessage("No User Selected");
          // setPromptMessage();
          return currentState;
        case currentState.length > 2:
          setErrorMessage("Maximum Limit Reached");
          return currentState;
        case currentState.includes(selectedUser):
          setErrorMessage("Teammember Already Selected");
          return currentState;
        default:
          setErrorMessage("");
          return [...currentState, selectedUser];
      }
    });
  }
  return (
    <div className="App">
      <div className="body">
        <div className="left-column">
          <SelectionInfo userName={selectedUser} />
          <button onClick={handleOnCLick}>Add Teammate</button>

          <div>
            <p className="chosen-team-members">Chosen Team Members:</p>
            {teamMembers.map((teamMember, index) => (
              <p key={teamMember}>{`${index + 1}: ${teamMember}`}</p>
            ))}
          </div>
          <div>
            <p style={{ color: "red" }}>{errorMessage}</p>
          </div>
          <div>
            <p style={{ color: "green" }}>{state.promptMessage}</p>
          </div>
        </div>
        <div className="right-column">
          <Cards
            users={users}
            setSelectedUser={setSelectedUser}
            setErrorMessage={setErrorMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
