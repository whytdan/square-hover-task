import React from 'react';
import PlaygroundArea from './apps/PlaygroundArea';
import GameContextProvider from './contexts/GameContext';

function App() {
  return (
    <GameContextProvider>
      <PlaygroundArea />
    </GameContextProvider>
  );
}

export default App;
