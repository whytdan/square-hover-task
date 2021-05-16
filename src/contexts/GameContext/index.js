import React, { useReducer } from 'react';

export const gameContextProvider = React.createContext();

const INIT_STATE = {
  hasGameStarted: false,
  history: [],
  cells: []
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.payload
      };
    case 'SET_CELLS':
      return {
        ...state,
        cells: action.payload
      };
    case 'SET_HAS_GAME_STARTED':
      return {
        ...state,
        hasGameStarted: action.payload
      };
    default:
      return state;
  }
};

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const setHistory = (history) => {
    dispatch({
      type: 'SET_HISTORY',
      payload: history
    });
  };

  const setCells = (cells) => {
    dispatch({
      type: 'SET_CELLS',
      payload: cells
    });
  };

  const setHasGameStarted = (status) => {
    dispatch({
      type: 'SET_HAS_GAME_STARTED',
      payload: status
    });
  };

  return (
    <gameContextProvider.Provider
      value={{
        history: state.history,
        cells: state.cells,
        hasGameStarted: state.hasGameStarted,
        setHistory,
        setCells,
        setHasGameStarted
      }}
    >
      {children}
    </gameContextProvider.Provider>
  );
};

export default GameContextProvider;
