export const fetchGameModes = async () => {
  const response = await fetch('https://demo1030918.mockable.io/');
  const data = await response.json();
  return data;
};
