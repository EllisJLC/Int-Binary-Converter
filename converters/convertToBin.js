function convertToBin (integer, size, options) {

    size--;
    
    if (!options) {
        options = {};
    }

    let pass = options.algebra ? 1 : true;
    let fail = options.algebra? 0 : false;

    let array = new Array(size); // Initialize array

    array.fill(fail);

    while (integer > 1) { 
        if (integer >= 2 ** size) {
            array[size] = pass;
            integer -= 2 ** size;
            size--;
        } else {
            array[size] = fail;
            size--;
        }
    }

    if (!options.reversed) {
        array.reverse(); // Order starts from the right counting left
    }

    return array;

}

module.exports = convertToBin;