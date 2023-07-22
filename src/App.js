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

// function reducer(state, action) {
//   if (action.type === "SET_ERROR_MESSAGE") {
//     return {
//       ...state,
//       errorMessage: action.payload,
//     };
//   }
//   if (action.type === "SET_SELECTED_USER") {
//     return {
//       ...state,
//       selectedUser: action.payload,
//     };
//   }
// }

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "SET_SELECTED_USER":
      return {
        ...state,
        selectedUser: action.payload,
      };
    case "SET_TEAM_MEMBERS":
      return {
        ...state,
        teamMembers: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [users, setusers] = useState([]);
  // const [selectedUser, setSelectedUser] = useState("");
  // const [teamMembers, setTeamMembers] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [promptMessage, setPromptMessage] = useState("Please Select Users");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      // payload is users instead of []
      .then(users => dispatch({ type: "SET_USERS", payload: users }));
  }, []);

  function handleOnCLick() {
    // payload is switch function instead of [] for setTeamMembers & currentState is now state.teamMembers
    dispatch({
      type: "SET_TEAM_MEMBERS",
      payload: (() => {
        switch (true) {
          case state.selectedUser === "":
            dispatch({
              type: "SET_ERROR_MESSAGE",
              payload: "No User Selected",
            });

            return state.teamMembers;
          case state.teamMembers.length > 2:
            dispatch({
              type: "SET_ERROR_MESSAGE",
              payload: "Maximum Limit Reached",
            });
            return state.teamMembers;
          case state.teamMembers.includes(state.selectedUser):
            dispatch({
              type: "SET_ERROR_MESSAGE",
              payload: "Teammember Already Selected",
            });
            return state.teamMembers;
          default:
            dispatch({
              type: "SET_ERROR_MESSAGE",
              payload: "",
            });
            return [...state.teamMembers, state.selectedUser];
        }
      })(),
    });
  }
  return (
    <div className="App">
      <div className="body">
        <div className="left-column">
          <SelectionInfo userName={state.selectedUser} />
          <button onClick={handleOnCLick}>Add Teammate</button>

          {/* selected members window window nees to be made ---> */}

          <div>
            <p className="chosen-team-members">Chosen Team Members:</p>
            {state.teamMembers.map((teamMember, index) => (
              <p key={teamMember}>{`${index + 1}: ${teamMember}`}</p>
            ))}
          </div>
          {/* error message window nees to be made ---> */}
          <div>
            <p style={{ color: "red" }}>{state.errorMessage}</p>
          </div>

          {/* user prompt window window nees to be made ---> */}

          <div>
            <p style={{ color: "green" }}>{state.promptMessage}</p>
          </div>
        </div>
        <div className="right-column">
          <Cards users={state.users} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
