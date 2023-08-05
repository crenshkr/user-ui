export function teamSelectionReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        allUsers: action.payload,
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
        chosenTeamMembers: [...state.chosenTeamMembers, state.selectedUser],
        selectedUser: "",
        promptMessage: "",
      };
    default:
      return state;
  }
}
