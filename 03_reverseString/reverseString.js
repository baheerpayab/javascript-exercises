const reverseString = function(string) {
        let reversedArray = [];
    for (let i = string.length; i >= 0 ; i--) {
        reversedArray[string.length - i] = string[i];
    }
    let reversed = reversedArray.join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
