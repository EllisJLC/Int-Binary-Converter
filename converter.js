function converterToBin (integer, size, options) {

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

function convertToInt (array, options) {
    
    if (!options.reversed) {
        array.reverse()
    }

    for (let i = 0; i < array.length; i++) {
        
    }

}


function intToBin (integer, size, options) {

}

function binToInt (array, options) {
    
}