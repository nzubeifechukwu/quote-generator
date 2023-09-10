const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const setHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHex = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomHex];
  }
  return hexColor;
};

export default setHexColor;
