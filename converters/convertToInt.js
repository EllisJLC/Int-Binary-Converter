function convertToInt (array, options) {

  let total;
    
    if (!options.reversed) {
        array.reverse()
    }

    for (let i = 0; i < array.length; i++) {
        total += (2 ** i) * array[i];
    }

  return total;

}

export default convertToInt;