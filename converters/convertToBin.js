function convertToBin (integer, size, options) {

    size--; // Reduce size of array to account for 0th position
    
    if (!options) {
        options = {}; // Fill to avoid errors?
    }

    let one = options.algebra ? 1 : true; // Set values to numbers if algebra option is set
    let zero = options.algebra? 0 : false;

    let array = new Array(size); // Initialize array

    array.fill(zero); // Fill with false/0's

    while (integer >= 1) { // Continue to iterate downward
        if (integer >= 2 ** size) {
            array[size] = one;
            integer -= 2 ** size;
            size--;
        } else {
            array[size] = zero;
            size--;
        }
    }

    if (!options.reversed) {
        array.reverse(); // Order starts from the right counting left
    }

    return array;

}

module.exports = convertToBin;