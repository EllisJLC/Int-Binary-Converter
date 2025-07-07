function convertToBin (integer, size, options) {

    let array = []; // Initialize array

    while (integer > 0) { 
        if (integer >= 2 ** size) {
            array.push(true);
            integer -= 2 ** size;
            size--;
        } else {
            array.push(false);
            size--;
        }
    }

    if (options.reversed) {
        array.reverse();
    }

    return array;

}

export default convertToBin;