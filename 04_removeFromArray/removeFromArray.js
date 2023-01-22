const removeFromArray = function(array, value) {
    let output = Array.from(array);
    /*let index = output.indexOf(value);*/

    for (i = 1; i < arguments.length; i++) {
        let inputs = Array.from(arguments);
        let remove = output.indexOf(inputs[i]);
        if (remove < 0) {
            continue;
        } else {
        output.splice(remove, 1);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
