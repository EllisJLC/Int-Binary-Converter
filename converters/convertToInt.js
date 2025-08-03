function convertToInt (array, options) {

  if (!options) {
    options = {};
  }

  let total = 0;
    
    if (!options.reversed) {
        array.reverse()
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i] == 1 || true) { 
        total += (2 ** i);
      }
    }

  return total;

}

module.exports = convertToInt;