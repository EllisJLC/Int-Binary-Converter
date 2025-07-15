import convertToInt from "./converters/convertToInt.js";

const isBinary = (value) => typeof value == "boolean"

function binToInt (array, options) {

  if (!options) {
    options = {};
  }

  if (array.length > 64) {
    console.error(`Error: Array of length ${array.length} is too large to convert to an integer, please submit a smaller array.`)
    return;
  }

  array.map((item) => {
    switch (item) {
      case 1:
        item = true;
        break
      case 0:
        item = false;
        break
      case true:
        item = true;
        break
      case false:
        item = false;
        break
      default:
        console.error(`Error: Found value ${item} which is a ${typeof item}, can only accept boolean values 1/0 or true/false`)
        return;
    } 
      
  })

  return(convertToInt(array, options))
}

export default binToInt;