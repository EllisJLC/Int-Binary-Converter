import convertToBin from "./converters/convertToBin.js";
// import convertToInt from "./converters/convertToInt.js";

function intToBin (integer, size, options) {
  if (typeof integer != "number") {
    console.error(`Error: Integer received was of type ${typeof integer}, expected "number"`);
    return;
  }
  if (typeof size != "number") {
    console.error(`Error: Size received was of type ${typeof size}, expected "number"`);
    return;
  }
  if (size > 64 || size < 0) {
    console.error(`Error: Size received was ${size}, size of binary return must be of size between 1 and 64.`);
    return;
  }

    if (integer < 2 ** size) {
      return convertToBin(integer, size, options);
    } else {
      console.error(`Cannot convert ${integer} into binary of size ${size}, try a smaller integer or larger array size.`);
      return;
    }
}

// function binToInt (array, options) {
    
// }

export default intToBin;