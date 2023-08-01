import { useState, useEffect, useReducer } from "react";

import "./App.css";
import { Cards } from "./components/Cards";
import { SelectionInfo } from "./components/SelectionInfo/SelectionInfo";
import { SelectedMembers } from "./components/SelectedMembers/SelectedMembers";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { PromptMessage } from "./components/PromptMessage/PromptMessage";

const initialState = {
  users: [],
  selectedUser: "",
  teamMembers: [],
  errorMessage: "",
  promptMessage: "Please Select Users",
};

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
        teamMembers: [...state.teamMembers, state.selectedUser],
        selectedUser: "",
        promptMessage: "",
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      // payload is users instead of []
      .then(users => dispatch({ type: "SET_USERS", payload: users }));
  }, []);

  function handleOnCLick() {
    // payload is switch function instead of [] for setTeamMembers & currentState is now state.teamMembers

    switch (true) {
      case state.teamMembers.length > 2:
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: "Maximum Limit Reached",
        });

        break;
      case state.selectedUser === "":
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: "No User Selected",
        });
        break;

      case state.teamMembers.includes(state.selectedUser):
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: "Teammember Already Selected",
        });
        break;
      default:
        dispatch({
          type: "SET_TEAM_MEMBERS",
          payload: state.selectedUser,
        });
    }
  }

  return (
    <div className="App">
      <div className="body">
        <div className="left-column">
          <SelectionInfo userName={state.selectedUser} />
          <button onClick={handleOnCLick}>Add Teammate</button>
          <SelectedMembers teamMembers={state.teamMembers} />
          <ErrorMessage errorMessage={state.errorMessage} />
          <PromptMessage promptMessage={state.promptMessage} />
        </div>
        <div className="right-column">
          <Cards users={state.users} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
