import React from "react";
import { useState, useEffect, useReducer } from "react";

import "../../pages/PrimaryPage/primaryPage.css";
import { Cards } from "../../components/Cards/Cards";
import { SelectionInfo } from "../../components/SelectionInfo/SelectionInfo";
import { SelectedMembers } from "../../components/SelectedMembers/SelectedMembers";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { PromptMessage } from "../../components/PromptMessage/PromptMessage";
import { teamSelectionReducer } from "../../state/reducers/teamSelectionReducer";

const initialState = {
  allUsers: [],
  selectedUser: "",
  chosenTeamMembers: [],
  errorMessage: "",
  promptMessage: "Please Select Users",
};

export function PrimaryPage() {
  const [state, dispatch] = useReducer(teamSelectionReducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      // payload is users instead of []
      .then(users => dispatch({ type: "SET_USERS", payload: users }));
  }, []);

  function handleOnCLick() {
    // payload is switch function instead of [] for setTeamMembers & currentState is now state.teamMembers

    switch (true) {
      case state.chosenTeamMembers.length > 2:
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

      case state.chosenTeamMembers.includes(state.selectedUser):
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

  // const currentScreen = {
  //   landingPage: <LandingPage />,
  //   primaryPage: <PrimaryPage />,
  //   signInPage: <SignInPage />,
  // };

  return (
    <div className="primary">
      <div className="body">
        <div className="left-column">
          <SelectionInfo userName={state.selectedUser} />
          <button onClick={handleOnCLick}>Add Teammate</button>
          <SelectedMembers chosenTeamMembers={state.chosenTeamMembers} />
          <ErrorMessage errorMessage={state.errorMessage} />
          <PromptMessage promptMessage={state.promptMessage} />
        </div>
        <div className="right-column">
          <Cards
            allUsers={state.allUsers}
            selectedUsers={state.selectedUsers}
            dispatch={dispatch}
            chosenTeamMembers={state.chosenTeamMembers}
          />
        </div>
      </div>
    </div>
  );
}
