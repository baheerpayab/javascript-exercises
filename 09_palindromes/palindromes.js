const palindromes = function (string) {
    let reduced = string.toLowerCase().replace(/[^\w\s\']/g, "");
    reduced = reduced.replace(/[\s]/g, "");
    let reversedString = [];
    for (i = reduced.length; i >= 0 ; i--) {
        reversedString[reduced.length - i] = reduced[i];
    }
    let palindrome = reversedString.join('');
    if (palindrome == reduced) {
        return true
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
