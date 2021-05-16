export const generateGameModeOptions = (gameModes) =>
  Object.entries(gameModes).map(([key, { field }], index) => {
    switch (key) {
      case 'easyMode':
        return { id: index, label: 'Easy Mode', value: field };
      case 'normalMode':
        return { id: index, label: 'Normal Mode', value: field };
      default:
        return { id: index, label: 'Hard Mode', value: field };
    }
  });

export const generateCells = (size) =>
  Array(size).fill(Array(size).fill(false));
