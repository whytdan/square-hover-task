export const fetchGameModes = async () => {
  /* global fetch */

  const response = await fetch('https://demo1030918.mockable.io/');
  const data = await response.json();
  return data;
};
