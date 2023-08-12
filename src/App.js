import React, { useReducer } from 'react';
import './App.css';
import { PrimaryPage } from './pages/PrimaryPage/PrimaryPage';
import { LandingPage } from './pages/LandingPage/LandingPage';

const initialScreenState = {
  showPrimaryPage: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_PRIMARY_PAGE':
      return { showPrimaryPage: true };
    case 'SHOW_LANDING_PAGE':
      return { showPrimaryPage: false };
    default:
      return state;
  }
}

function App() {
  const [appState, appStateDispatch] = useReducer(reducer, initialScreenState);

  return (
    <div className="App">
      {appState.showPrimaryPage ? (
        <PrimaryPage appStateDispatch={appStateDispatch} />
      ) : (
        <LandingPage appStateDispatch={appStateDispatch} />
      )}
    </div>
  );
}

export default App;
