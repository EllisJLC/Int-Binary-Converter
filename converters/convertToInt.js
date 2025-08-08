function convertToInt (array, options) {

  if (!options) {
    options = {};
  }

  array.map((item) => {
    if (typeof item == "boolean") {
      item = true ? 1 : 0;
    } else if (item != (0 || "0")) {
      item = true;
    }
  })

  let total = 0;
    
    if (!options.reversed) {
        array.reverse()
    }

    for (let i = 0; i < array.length; i++) {
        total += (2 ** i) * array[i];
    }

  return total;

}

module.exports = convertToInt;