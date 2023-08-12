import React, { useReducer } from 'react';
import './App.css';
import { PrimaryPage } from './pages/PrimaryPage/PrimaryPage';
import { LandingPage } from './pages/LandingPage/LandingPage';

const initialAppState = {
  showPrimaryPage: false,
  userSelectionCache: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_PRIMARY_PAGE':
      return { ...state, showPrimaryPage: true };
    case 'SHOW_LANDING_PAGE':
      return {
        ...state,
        showPrimaryPage: false,
        userSelectionCache: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [appState, appStateDispatch] = useReducer(reducer, initialAppState);
  return (
    <div className="App">
      {appState.showPrimaryPage ? (
        <PrimaryPage
          appStateDispatch={appStateDispatch}
          cachedUserChosenTeamMembers={appState.userSelectionCache}
        />
      ) : (
        <LandingPage appStateDispatch={appStateDispatch} />
      )}
    </div>
  );
}

export default App;
