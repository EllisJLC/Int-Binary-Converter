import convertToInt from "./converters/convertToInt.js";

const isBinary = (value) => typeof value == "boolean" || value == (1 || 0)

function binToInt (array, options) {
  if (array.length > 64) {
    console.error(`Error: Array of length ${array.length} is too large to convert to an integer, please submit a smaller array.`)
    return;
  }

  array.map((item) => {
    switch (item) {
      case (item < 0):
        item = 1;
        break
      case (item == 0):
        item = 0;
        break
      case (item > 0):
        item = 1;
        break
      case (item == true):
        item = 1;
        break
      case (item == false):
        item = 0;
        break
      default:
        console.error(`Error: Found value ${item} which is a ${typeof item}, can only accept integer values`)
        return;
    } 
      
  })

  if (array.every(isBinary)) {
    return convertToInt(array, options)
  } else {
    console.error(`Error: Array items are not all binary (true/false or 1/0), please check your array`);
    return;
  }
}

export default binToInt;