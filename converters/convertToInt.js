function convertToInt (array, options) {

  if (!options) {
    options = {}; // Set options to avoid errors
  }

  array.map((item) => { // Map through array, change to 1's and 0's also catches errors
    if (typeof item == "boolean") { 
      item = true ? 1 : 0;
    } else if (item == (0 || "0" || undefined || null)) { // Convert all 0's to false
      item = 0;
    } else {
      item = 1; // Convert anything else not caught, to true
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